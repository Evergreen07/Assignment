import React from 'react'

const UserItem = ({name, email}) => {
  return (
    <div className='userItem'>
      <div className='userDetails'>
        <i className="fas fa-user fa-lg"></i> &ensp;
        <h2>{name}</h2>
      </div>
      
      <div className='userDetails'>
        <i className="fas fa-envelope fa-lg"></i> &ensp;
        <h2>{email}</h2>
      </div>
      
    </div>
  )
}

export default UserItem