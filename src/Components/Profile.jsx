import React from 'react'
import Header from './Header'

const Profile = () => {
  return (
    <div>
        <Header/>
    <div className='m-5'>
    <h3>Edit Profile</h3>
      <p className='me-5 text-align-left'>Name:</p>
      <input  type='text' className='form p-2 col-3' placeholder='Name' name='name'/>
      <p className='me-5 text-end'>Email:</p>
      <input type="email" className="form p-2 col-3" placeholder="name@example.com"name="email"/>
      <p>Profile Picture:</p>
      <input type="file"  className="rounded-none" accept="image/png, image/jpeg" name="pictrue"></input>
    </div>
    <div className='buttons'>
          <button className='bt1 w-25'>Save</button><br></br><br></br>
          <button className='bt2 w-25'>Reset Password</button>

        </div>
    </div>
  )
}

export default Profile
