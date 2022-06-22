import React from 'react'

const User = ({user}) => {
  return (
    <div className='col-md-4'>
      <div><b>Name:</b> {user.name}</div>
      <div><b>Username:</b> {user.username}</div>
      <div><b>Email:</b> {user.email}</div>
      <div><b>Street:</b> {user.address.street}</div>
    </div>
  )
}

export default User