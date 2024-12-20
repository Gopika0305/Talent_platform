import mongoose from 'mongoose';

const mongo = mongoose.Schema;

const UserSchema = new mongo({ 
    username:{ 
       type: String,
       max:6,
       required:true,
       unqiue:true
    },
    password:{ 
        type: String,
        min:5,
        max:8,
        required:true,
    }
},{timestamps:true})

module.exports = mongoose.model('User',UserSchema)


