const express = require('express');
const authroutes = require('./routes/authroute');
// const protectedRoute = require('./routes/protected'); 

const app = express();

app.use(express.urlencoded({ extended: true }));  
app.use(express.json());


app.use('/api/auth', authroutes);
// app.use('/api/protected', protectedRoute);  

const port = 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
