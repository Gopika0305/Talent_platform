import express from 'express'
import  DbConnect  from '../src/db/connect.db.js'
import dotenv from 'dotenv';

dotenv.config({ 
    path:'.env'
})
const app = express();


DbConnect()
.then(()=>{
    app.listen(process.env.PORT || 3000,() =>{ 
        console.log(`Server is started at the port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`Error ${err}`)
})