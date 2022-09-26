import React, {useEffect,useState} from 'react'
import {useAppSelector, useAppDispatch} from '../../Hooks/hooks'
import {deleteUser, updateUser} from '../../redux/Actions/userAction'
import   style from './user.css'
import {IUser} from '../../Types/Types'
import state from '../../redux/store'

type UserProps ={
	user:IUser
}

const User = ({user}:UserProps) => {
	const [isActive, setActive] = useState(false)
	const [newNameToUpdate, setNewNameToUpdate] = useState<string>('')
	const [isVisibleInputFild, setIsVisibleInputFild] = useState(false)
	const dispatch = useAppDispatch()		
	const handleToggle = () => {
    setActive(!isActive)
  	}

  	type InputEvent = React.ChangeEvent<HTMLInputElement>
  	const handleCangeName=(e:InputEvent)=>{
  		setNewNameToUpdate(e.target.value)	
  	}

  	const updateUserName=()=>{
  		const cgangedUser={...user,name:newNameToUpdate}  
  		dispatch(updateUser(cgangedUser))
  		setIsVisibleInputFild(false)
  		setActive(false)	
  	}
	return(
		<div className={style.userList}>
	
			<div onClick={handleToggle} className={isActive ? style.activeUser : style.user}>
				{user.name}
			
			{isActive && !isVisibleInputFild && <button className={style.button}
			 onClick ={()=> dispatch(deleteUser(user.id))}>delete</button>}
			{isActive && !isVisibleInputFild && <button className={style.button}
			onClick ={()=> setIsVisibleInputFild(true)}>updatename</button>}
			
			{isVisibleInputFild && <input 
							className={style.button}
							value={newNameToUpdate}
							 onChange= {handleCangeName}			
							type="text" 
							placeholder="enter new name"
							/>}
			{isVisibleInputFild && <button className={style.button}
			onClick ={updateUserName}>
			set new name
			</button>}
			</div>				
						 
		 </div>
		)
}
export default User

//