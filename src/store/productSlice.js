import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";

// enum-->to catagroize
// freeze-->immutable = no changes allowed (read only)
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name:"product",
    initialState:{
        data:[],
        status:STATUSES.IDLE
        // status-->idle,loading,error
    },
    reducers:{
      // setProducts(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
})
export const {add,remove} = productSlice.actions
export default productSlice.reducer

// Thunks
// A thunk is a function that returns another function. (this Another func can be async)
// used to handle async tasks
// syntax for RTK is this :
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
});

