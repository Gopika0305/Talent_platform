import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({
     path:'.env'
})

const DbConnect = async () => { 
    try{
       const connection = await mongoose.connect(process.env.MONGO_URL)
       return connection
    }
    catch(err){ 
        console.log('Error occurred' + err)
        process.exit(1)
    }
}


export default DbConnect; 