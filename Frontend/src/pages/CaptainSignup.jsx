import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')


    const { captain, updateCaptain } = useContext(CaptainDataContext)

    const submitHandler = async (e) => {
      e.preventDefault();
      const captainData = {
        fullname:{
          firstname: firstName,
          lastname: lastName
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: Number(vehicleCapacity),
          vehicleType
        }
      }

      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData)
        
        if (response.status === 201) {
          const data = response.data
          updateCaptain(data.captain)
          localStorage.setItem('token', data.token)
          navigate('/captain-home')
        }
      } catch (error) {
        console.error("Axios error:", error.response ? error.response.data : error.message)
        // Optionally, display an error message to the user here.
      }
      
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
      setVehicleType('')
    }
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-20 mb-3' src="data:image/png;base64,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" alt="" />
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
          
            <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
            <div className='flex gap-4 mb-6'>
            <input 
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-nase' 
              type="text" 
              placeholder='Vehicle Color' 
              value={vehicleColor} 
              onChange={(e) => setVehicleColor(e.target.value)} 
            />
            <input 
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-nase' 
              type="text" 
              placeholder='Vehicle Plate' 
              value={vehiclePlate} 
              onChange={(e) => setVehiclePlate(e.target.value)} 
            />
            </div>
            <div className='flex gap-4 mb-6'>
            <input 
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-nase' 
              type="number" 
              placeholder='Vehicle Capacity' 
              value={vehicleCapacity} 
              onChange={(e) => setVehicleCapacity(e.target.value)} 
            />
            <select 
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-nase' 
              value={vehicleType} 
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorbike">Motorbike</option>
            </select>
            </div>

          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Register Captain</button>
        </form>
        <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-[#10b461]'>Login here</Link></p>
        </div>
        <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span></p>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup