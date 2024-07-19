import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {collection, query, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../Config/firebase";

export const fetchProducts = createAsyncThunk(
  "realestate/fetchProducts",
  async () => {
    const latestQuery = query(collection(db, "products"));
    const snapshot = await getDocs(latestQuery);
      const Realestate = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return Realestate;
    });

export const getProductsById = createAsyncThunk(
  "realestate/getProductsById",
  async (id) => {
    const productDocRef = doc(db, "products", id);
    const productDoc = await getDoc(productDocRef);
    if (productDoc.exists()) {
      return productDoc.data();
    } else {
      console.log("No such document!");
      return null;
    }
  }
);

const RealestateSlice = createSlice({
  name: "realestate",
  initialState: {
    realestate: [],
    loading: false,
    apartment: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.realestate = action.payload;
      });
    builder.addCase(getProductsById.fulfilled, (state, action) => {
      state.apartment = action.payload;
    });
    builder.addCase(getProductsById.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export default RealestateSlice.reducer;
