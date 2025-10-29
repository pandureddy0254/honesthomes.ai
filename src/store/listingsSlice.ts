import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { listingsApi } from '../utils/api';

export interface Listing {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  tag?: string;
  type: 'buy' | 'rent' | 'invest';
  highlights: string[];
}

export interface ListingsState {
  items: Listing[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: ListingsState = {
  items: [],
  status: 'idle'
};

export const fetchListings = createAsyncThunk('listings/fetch', async () => {
  const response = await listingsApi.fetchFeaturedListings();
  return response.data;
});

const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    setListings(state, action: PayloadAction<Listing[]>) {
      state.items = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchListings.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setListings } = listingsSlice.actions;
export default listingsSlice.reducer;
