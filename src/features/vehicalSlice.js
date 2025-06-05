import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  vehicles : [],
  loading: false,
  error: null,
};

export const fetchAllVehicles = createAsyncThunk(
  "vehicleInfo/fetchAllVehicles",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("");
    //   console.log("Fetched vehicles:", response.data);
      return response.data;
    } catch (error) {
    //   console.error("Fetch error:", error);
      return thunkAPI.rejectWithValue(
        error.response?.data || "Something went wrong");
    }
  }
);

const vehicleSlice = createSlice({
  name: "vehicleInfo",
  initialState,
  reducers: {
    addVehicle: (state, action) => {
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllVehicles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllVehicles.fulfilled, (state, action) => {
        // console.log(state)
        // console.log(action)
        state.loading = false;
        state.vehicles = action.payload;
})
      .addCase(fetchAllVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addVehicle } = vehicleSlice.actions;
export default vehicleSlice.reducer;
