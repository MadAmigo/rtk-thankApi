import { configureStore } from '@reduxjs/toolkit'
import userReducer from './redusers/usersSlice'
//import {usersSlice} from './redusers/usersSlice'



export const store = configureStore({
    reducer:{
  users:userReducer,
  },
})
 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store