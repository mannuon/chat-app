

function setupSocket(io){
    io.on("connection",(socket)=>{
        console.log("socket connected " , socket.id);

        socket.on('disconnect',()=>{
            console.log("socket disconnected ", socket.id);
            
        })
        
    })
}


module.exports = {setupSocket}