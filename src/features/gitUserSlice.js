import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk("gitUsers",async (args,{rejectWithValue}) => {
    const response = await fetch("https://date.nager.at/api/v2/publicholidays/2020/US");
    try {
        const result = response.json();
        return result; 
    } catch (error) {
        return rejectWithValue('oops you found Error.');
    }
});

export const gitUser = createSlice({
    name:"gitUser",
    initialState:{
        users:[],
        loading:false,
        error:null,
    },
    extraReducers:{
        [getAllData.pending]: (state) =>{
            state.loading= true;
        },
        [getAllData.fulfilled]: (state,action) =>{
            state.loading= false;
            state.users= action.payload;
        },
        [getAllData.rejected]: (state,action) =>{
            state.loading= false;
            state.error= action.payload;

        }
    }

})

export default gitUser.reducer;