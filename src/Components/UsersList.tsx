import React, {FC, useEffect} from 'react'
import {useAppSelector, useAppDispatch} from '../Hooks/hooks'
import {fetchUsers} from '../redux/Actions/userAction'
import {useDispatch} from 'react-redux'
import User from './user/User'

 const Users = () => {
	const {usersIsFetcing,users,usersError} = useAppSelector(state => state.users)
	const dispatch = useAppDispatch()
	useEffect(()=>{dispatch(fetchUsers())},[])
  //console.log(users) 
	
	return(
		<div>
			{!!usersIsFetcing && <div style={{color:'red'}}>'loading'</div>}
			{!!usersError && <div style={{color:'red'}}>{usersError}</div>}
			{
				
				users.map(user=><User key={user.id} user={user} />)
			}
			
				
		</div>
		)
}
export default Users
