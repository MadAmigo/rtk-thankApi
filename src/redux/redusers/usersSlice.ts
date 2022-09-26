import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IUser,IResponceUser} from '../../Types/Types'
import {fetchUsers,deleteUser,updateUser} from '../Actions/userAction'

export interface IUsers {
  usersIsFetcing:boolean
  users:IUser[]
  usersError:string | undefined
}
export const initialState:IUsers = {
  usersIsFetcing:false,
  users:[],
  usersError:'',
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},

  extraReducers: (builder) =>{
    builder
      .addCase(fetchUsers.fulfilled,(state,action)=>{ 
      state.usersIsFetcing=false
      state.usersError=''
      state.users=action.payload
     
    })
      .addCase(fetchUsers.pending,(state)=>{ 
      state.usersIsFetcing=true
      state.usersError=''
    })
      .addCase(fetchUsers.rejected,(state,action)=>{
      state.usersIsFetcing=false
      state.usersError=action.payload
      
    })
      .addCase(deleteUser.fulfilled,(state,action)=>{
     state.users=state.users.filter(user=>user.id !== action.payload)
  })
      .addCase(updateUser.fulfilled,(state,action)=>{
     state.users=state.users.map((user)=>{

 console.log(user.id)
                          console.log(action.payload.user)

      if(user.id !== action.payload.id)return user
      return action.payload.user
     
               
           
        
    })
  })
   

 }    
})

//export const{usersFetcing,usersSuccess,usersError,deleteUserSuccess}=usersSlice.actions

export default usersSlice.reducer
