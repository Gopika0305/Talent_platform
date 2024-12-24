import { Register,User } from '../exports.js'
import jwt from 'jsonwebtoken'
import z from 'zod';

const Home = () => { 
    //logic
}

const SignIn = (req,res) => { 
    try{ 
        const {username,password} = req.body;

        const user = Register.findOne({username:username,password:password});
        const parseUser = z.safeParse(user);
        
        console.log(user)

        if(!parseUser.sucess){ 
            res.status(404).json({message:"User not found"})
        }

        const token = jwt.sign({username},process.env.JWT_SECRET);
        console.log(token)

        res.status(200).json({message:"User Signed In"})
    }
    catch(error){ 
        res.status(500).json({error:"An error occurred while signing in the user"})
    }
}

const SignUp = async (req, res) => {
    try {
        const { firstname, lastname, username, password } = req.body;
        
        const newUser = new Register({
            firstname,
            lastname,
            username,
            password, 
        });
        
        const token = jwt.sign({ username }, process.env.JWT_SECRET);
        console.log(token)
        await newUser.save();

        res.status(201).json({ message: "User Registered", token });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while registering the user" });
    }
};

const Network = (req,res) => { 
    
}

const Account = (req,res) => { 
     const  user  = User.find({
            username:req.body.username
     });
     console.log(user)
        if(!user){ 
            res.status(404).json({message:"User not found"})
        }
        res.status(200).json({message:"User Account"})
}

const AccDetails = (req,res) =>{ 
    //logic
}

const AccUpdate = (req,res) => { 
    //logic
}


export{ 
    Home,
    SignIn,
    SignUp,
    Account,
    AccDetails,
    AccUpdate
}