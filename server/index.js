const express = require('express');
const authroutes = require('./routes/authroute');
const cors = require('cors')
const { Server } = require("socket.io");
const {createServer} = require('http');
const { setupSocket } = require('./config/socket');






const app = express();
const server = createServer(app);
const io = new Server(server , {
  cors:{
    origin:'http://localhost:3000',
    methods:["GET","POST"],
    credentials:true
  },
  
})


app.use(cors({
  origin:'http://localhost:3000',
  methods:["GET","POST"],
  credentials:true
}))
app.use(express.urlencoded({ extended: true }));  
app.use(express.json());
app.use('/api/auth', authroutes);


module.exports = io
setupSocket(io)
const port = 3001;




 server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


