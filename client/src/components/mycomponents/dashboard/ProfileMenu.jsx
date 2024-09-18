'use client'
import React, { Suspense, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import UserAvatar from './UserAvatar'
import dynamic from 'next/dynamic'


const LogoutModel = dynamic(() => import('./Logout'), {
    suspense: true,
})
  
 

const ProfileMenu = ({ image}) => {
    const [openLogout , setOpenLogout] = useState(false)
  return (
    <>
    {openLogout && <Suspense fallback={<p>Loading..</p>}>
        <LogoutModel open={openLogout} setOpen ={setOpenLogout} />
        </Suspense>}
    <DropdownMenu>
    <DropdownMenuTrigger>
        <UserAvatar image={image}   />
    </DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={()=>setOpenLogout(true)} >Logout</DropdownMenuItem>
    </DropdownMenuContent>
</DropdownMenu>
</>
  )
}

export default ProfileMenu