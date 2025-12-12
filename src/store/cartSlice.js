import { createSlice } from "@reduxjs/toolkit";
    
const initialState =[];
const cartSlice = createSlice({
    name:"cart",
    initialState,//on this state action will be performed
    // redcuer = pure function that decides how state change when an action happens
    // state ==> datatype = array
    // (state, action) ➜ newState
    // ex.count: 0, action: increment ➜ new state: 1

    reducers:{
        add(state,action){
            // in redux ,we return new array(state)  ex. return [...state,action.payload]

            // but in redux toolkit we overwrite on same array(state)
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(item=>item.id!==action.payload)
        }
    }
})
export const {add,remove} = cartSlice.actions
export default cartSlice.reducer