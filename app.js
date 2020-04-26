const express=require('express')
const passportSetup=require('./config/passport-setup')
const authRoutes=require('./routes/auth-routes')
const app=express()

app.set('view engine','ejs')

app.use('/auth',authRoutes)

app.get("/",(req,res)=>{
    res.render('home')
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Started...");
});

