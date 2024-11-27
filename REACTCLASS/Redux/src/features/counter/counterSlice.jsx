import { createSlice } from "@reduxjs/toolkit";

const initialState = {value : 0};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment : (state)=>{
            state.value += 1; //immer - it's a library that helps to manipulate the state properly indirectly under the hood.the library comes with redux-toolkits.
        },
        decrement : (state)=>{
            state.value -= 1;
        },
        reset : (state)=>{
            state.value = 0;
        }
    }
})

    export const {increment, decrement, reset} = counterSlice.actions;
    export default counterSlice.reducer;