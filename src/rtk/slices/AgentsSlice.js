import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {collection, query, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../Config/firebase";

export const fetchAgents = createAsyncThunk(
  "agents/fetchAgents",
  async () => {
    const latestQuery = query(collection(db, "agents"));
    const snapshot = await getDocs(latestQuery);
    const agents = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return agents;
  }
);

export const getAgentsById = createAsyncThunk(
  "agents/getAgentsById",
  async (id) => {
    const productDocRef = doc(db, "agents", id);
    const productDoc = await getDoc(productDocRef);
    if (productDoc.exists()) {
      return { id: productDoc.id, ...productDoc.data() };
    } else {
      console.log("No such document!");
      return null;
    }
  }
);

const AgentsSlice = createSlice({
  name: "agents",
  initialState: {
    agents: [],
    loading: false,
    agent: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAgents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAgents.fulfilled, (state, action) => {
        state.loading = false;
        state.agents = action.payload;
      });
    builder.addCase(getAgentsById.fulfilled, (state, action) => {
      state.agent = action.payload;
    });
    builder.addCase(getAgentsById.rejected, (state, action) => {
      console.log(action);
    });
  },
});

// export const { setAgents } = AgentsSlice.actions;
export default AgentsSlice.reducer;