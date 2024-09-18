
import { io , Socket} from "socket.io-client";

let socket;

const getSocket = ()=>{
    if(!socket){
        socket = io('http://localhost:3001' , {autoConnect:false})
    }
    return socket
}

export default getSocket