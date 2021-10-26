const express = require('express');
const connectDB = require('./config/db');
const httpsStatusCodes = require('./constants/httpStatusCodes');

const app = express();
//connect database
connectDB();

//init middleware
app.use(express.json());                               //body json parsing
app.use(express.urlencoded({extended:false})); //for form post requests

app.get('/',(req,res)=>{
    res.send('API Running...');
})

//set global variable
app.use(function (req,res,next){
    res.locals.httpsStatusCodes = httpsStatusCodes;
    next();
});

//define routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));