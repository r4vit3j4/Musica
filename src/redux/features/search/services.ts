import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchData = createAsyncThunk(
  "searchSlice/fetchSearchData",
  async (searchTerm: string) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/search?query=${searchTerm}`
    );

    return response.data;
  }
);
