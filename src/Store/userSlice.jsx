import { createSlice } from '@reduxjs/toolkit'
import { Data } from '../Data/Data'


const userSlice= createSlice({
    name:"user",
    initialState:Data,
    reducers:{
        addUser:(state,action)=>{
           state.push(action.payload)
        },
        updtae:(state,action)=>{
            const {id,name,email}= action.payload;
            const uu = state.find(user=>user.id == id);
            if(uu){
                uu.name=name,
                uu.email=email
            }
        },
        deletee:(state,action)=>{
            const {id}= action.payload;
            const uu = state.find(user=>user.id == id);
            if(uu){
             return state.filter(f => f.id !== id)
            }
           

        },
  

    }
})
export const {addUser,updtae,deletee}=userSlice.actions

export default userSlice.reducer