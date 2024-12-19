import mongoose from mongoose;

const mongo = mongoose.Schema;

const RegisterSchema = new mongo({
    firstname:{ 
        type: String,
    },
    lastname:{ 
        type:String
    },
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
    },
    dob:{ 
        type: Date,
        required:true,
    }
},{timestamps:true})


module.exports = mongoose.model("Register",RegisterSchema); 