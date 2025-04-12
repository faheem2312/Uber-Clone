import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandler = (e) => {
      e.preventDefault();
      setUserData({
        fullName:{
          firstName: firstName,
          lastName: lastName
        },
        email: email,
        password: password
      })
      
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
    }
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e) => {
              submitHandler(e)
        }}>
          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-6'>
            <input className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-nase' type="text" placeholder='First Name' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
            <input className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-nase' type="text" placeholder='Last Name' value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
          </div>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input required value={email} onChange={(e)=>{ setEmail(e.target.value) }} className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-nase' type="email" placeholder='email@example.com' />
          
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input required value={password} onChange={(e)=>{ setPassword(e.target.value) }} className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-nase' type="password" placeholder='password' />
          
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
        </form>
        <p className='text-center'>Already have a account? <Link to='/login' className='text-[#10b461]'>Login here</Link></p>
        </div>
        <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span></p>
        </div>
      </div>
    </div>
  )
}

export default UserSignup