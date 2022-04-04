import React, {useEffect, useState} from 'react'
import axios from 'axios'
import UserItem from '../layout/UserItem'

const UserScreen = () => {
  const [signedUsers, setSignedUsers] = useState([])
  const newUser = {
    // name : "admin",
    // email : "admin@mywebapp.com"
    name : "random_user",
    email : "random@gamil.com"
  }

  useEffect(() => {
    getData();
  },[])


  const getData = async () => {
    try {
        const res = await axios.get('getUsers');
        setSignedUsers(res.data);
        console.log(signedUsers);
    } catch (error) {
        console.error({msg : error.message});
    }
  }

  return (
    <div className='userList'>
      {
        (newUser.name === 'admin' && newUser.email === 'admin@mywebapp.com') ? 
          (
          signedUsers.map((user) => (
            <UserItem key={user._id} name={user.name} email={user.email}/>
          ))
          ) : (
          <UserItem name={newUser.name} email={newUser.email}/>
        )
      }
    </div>
  )
}

export default UserScreen