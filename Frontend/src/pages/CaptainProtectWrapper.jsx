import React from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, updateCaptain } = useContext(CaptainDataContext)
    const [ isLoading, setIsLoading ] = useState(true)


    useEffect(() => {
      if(!token){
        navigate('/captain-login')
      }
    }, [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
            }
    }).then(response => {
        if(response.status === 200) {
            const data = response.data
            updateCaptain(data.captain)
            setIsLoading(false)
        }
    }).catch(error => {
        console.log(error)
        localStorage.removeItem('token')
        navigate('/captain-login')
    }
) 
    
    if(isLoading) {
        return (
            <div>Loading...</div>
        )
    }


    if(!token) {
        navigate('/captain-login')
    }

  return (
    <>
        {children}
    </>
  )
}

export default CaptainProtectWrapper