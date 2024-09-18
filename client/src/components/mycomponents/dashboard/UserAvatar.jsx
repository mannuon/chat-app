import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const UserAvatar = ({ image}) => {
  return (
    <div>
        <Avatar>
            <AvatarImage src={image} />
        </Avatar>

    </div>
  )
}

export default UserAvatar