import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import {
  setDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../../Config/firebase";
const initialState = {
  user: null,
  userDetails: [],
  loading: false,
  error: null,
  token: localStorage.getItem("userToken")
    ? localStorage.getItem("userToken")
    : "",
  iduser: localStorage.getItem("idUser") ? localStorage.getItem("idUser") : "",
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        wishlist: [],
        UserName: name,
        email: email,
        password: password,
      });
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    return userCredential.user;
  }
);

export const addItemToWishlist = createAsyncThunk(
  "auth/addItemToWishlist",
  async ({ userId, item }, { rejectWithValue }) => {
    try {
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, {
        wishlist: arrayUnion(item),
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeItemFromWishlist = createAsyncThunk(
  "auth/removeItemFromWishlist",
  async ({ userId, item }, { rejectWithValue }) => {
    try {
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, {
        wishlist: arrayRemove(item),
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUsers = createAsyncThunk("auth/fetchUsers", async () => {
  const latestQuery = query(collection(db, "users"));
  const snapshot = await getDocs(latestQuery);
  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return users;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.setItem("userToken", "");
      localStorage.setItem("idUser", "");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.userDetails = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.userDetails = action.payload;
        state.loading = false;
        localStorage.setItem("userToken", action.payload.accessToken);
        localStorage.setItem("idUser", action.payload.uid);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeItemFromWishlist.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
