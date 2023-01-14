import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IVendors, IQueryParams } from '../../types/vendors'
import { RootState } from '../store'
import API from '../../helpers/API'

const initialState: IVendors = {
  result: [],
  loading: false,
  loaded: false,
  error: null
}

export const getVendors = createAsyncThunk(
  "restaurant/vendors-list",
  async (params: IQueryParams) => {
    const res = await API.get(`restaurant/vendors-list?page=${params.page}&page_size=${params.page_size}0&lat=${params.lat}&long=${params.long}`);
    return res;
  }
);

export const vendorsSlice = createSlice({
  name: 'vendors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVendors.pending, (state) => {
      state.loading = true
    }),
    builder.addCase(getVendors.rejected, (state, action) => {
      state.loading = false
      state.error = action.error
    }),
    builder.addCase(getVendors.fulfilled, (state, action) => {
      state.result = action.payload.data.data.finalResult
      state.loaded = true
      state.loading = false
    })
  },
})

export const selectedValue = (state: RootState) => state.vendors

export default vendorsSlice.reducer
