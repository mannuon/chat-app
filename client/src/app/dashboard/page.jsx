'use client'
import Navbar from '@/components/mycomponents/dashboard/navbar'
import {  useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

const Dashboard = () => {
    const router = useRouter()

    useEffect(() => {
      
        const token = localStorage.getItem('token')
        if (!token){
            toast.loading('please login first')
            router.push('/signin')
        }
    }, [])
    
    


  return (
    <div>
        <Navbar/>

    </div>
  )
}

export default Dashboard