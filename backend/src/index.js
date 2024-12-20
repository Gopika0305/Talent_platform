import express from 'express'
import  DbConnect  from '../src/db/connect.db.js'
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config({ 
    path:'.env'
})
const app = express();

app.use(bodyParser.json())

DbConnect()
.then(()=>{
    app.listen(process.env.PORT || 3000,() =>{ 
        console.log(`Server is started at the port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`Error ${err}`)
})