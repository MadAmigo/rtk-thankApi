import {usersSlice} from '../redusers/usersSlice'
import {AppDispatch} from '../store'
import instance from '../../API/API'
import {IResponceUser,IUser} from '../../Types/Types'
import {useAppDispatch} from '../../Hooks/hooks'
import { createAsyncThunk } from '@reduxjs/toolkit'

//Типизация:первый параметр тип возвращаемого значения,
//          второй параметр тип атрибута функции, в данном случае '_',
//			третий параметр объект  AsyncThunkConfig = {
//													    state?: AppState;
//													    dispatch?: AppDispatch;
//													    extra?: null;
//													    rejectValue?: string;
//													  }

export const fetchUsers = createAsyncThunk<IUser[], undefined, {rejectValue:string}> (
	'users/fetchUsers',
	async (_,{rejectWithValue}) => {
			const responce = await instance.get('users')
			if (responce.status===200) {
				return responce.data
				}
				return rejectWithValue('Error loading')
	}
)
	
 export const deleteUser = createAsyncThunk<number, number, {rejectValue:string}>(
  	'users/deleteUser',
  	async  (id,{rejectWithValue}) => {
  			const responce = await instance.delete(`users/${id}`)
			if (responce.status===200) return id
 			return rejectWithValue('Error deleting')
 		}
  )

export const updateUser = createAsyncThunk<any, IUser, {rejectValue:string}>(
  	'users/updateUser',
  	async  (user,{rejectWithValue}) => {
  			const responce = await instance.put(`users/${user.id}`, {user})
  			
			if (responce.status===200) return responce.data
 			return rejectWithValue('Error update')
 		}
  )

// import usersSlise from ...
// export const fetchUsers = () =>{
// 	return async (dispatch:AppDispatch) =>{
//  dispatch(usersSlice.actions.fetchingUsers())	
//			try{
// 			const responce = await axios.get(`users`)
// 			dispatch(usersSlice.actions.fetchUsersSuccess())
//			} catch {
//			dispatch(usersSlice.actions.fetchUserserror('error loading'))
//			}				
// 	}
// }
// export const deleteUser = (id:number) =>{
// 	return async (dispatch:AppDispatch) =>{
// 		const responce = await axios.delete(`users/${id}`)	
// 			dispatch(usersSlice.actions.deleteUserSuccess(id))	
// 	}
// }