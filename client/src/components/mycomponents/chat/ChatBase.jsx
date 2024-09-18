'use client'
import { Button } from '@/components/ui/button'
import getSocket from '@/lib/socket.config'
import React, { useEffect, useMemo } from 'react'
import {v4 as uuidV4} from 'uuid'

const ChatBase = () => {


    let socket = useMemo(()=>{
        const socket = getSocket()

        return socket.connect()
    },[])


    useEffect(() => {

        socket.on("message", (data)=>{
            console.log('socket message is ',data);
            
        })


        return ()=>{
            socket.close()
        }
    }, [])


    const handleClick = ()=>{
        socket.emit("message",{name:'myName',id:uuidV4()})
    }
    



  return (
    <div>
        <Button onClick={handleClick}>
            send message
        </Button>
    </div>
  )
}

export default ChatBase