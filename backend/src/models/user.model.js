import mongoose from mongoose;

const mongo = mongoose.Schema;
const UserSchema = new mongo({ 
    username:{ 
       type: String,
    },
    password:{ 
        type: String
    }
})