import { ISearchInitialState } from "../../types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import axios from "axios";
import { fetchSearchData } from "./services";

const initialState: ISearchInitialState = {
  data: {
    albums: [],
    songs: [],
  },
  status: {
    isLoading: false,
    isError: false,
    error: "",
  },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchData.pending, (state) => {
        state.status.isLoading = true;
        state.status.isError = false;
        state.status.error = "";
      })
      .addCase(fetchSearchData.fulfilled, (state, action) => {
        console.log(action.payload);
        state.data.songs = action.payload.data.songs.data;
        state.data.albums = action.payload.data.albums.data;
        state.status.isLoading = false;
      })
      .addCase(fetchSearchData.rejected, (state) => {
        state.status.isError = true;
        state.status.error = "Error Fetching Data";
        state.status.isLoading = false;
      });
  },
});

export const selectSearchData = (state: RootState) => state.search;

export default searchSlice.reducer;
