import { Register,Network } from '../exports.js'
import jwt from 'jsonwebtoken'
import { Loginlist } from '../types.js'

const Home = () => { 
    //logic
}

const SignIn = async (req, res) => { 
    try{ 
        const {username,password} = req.body;
        console.log({username,password})
        const user = await Register.findOne({ username: username });
        const parseUser = Loginlist.safeParse(user);
        
         console.log(parseUser)

        if(!parseUser.success){ 
          res.json({
            message:"User not found",
            navigate:false
        });
        return;
        }

        const token = jwt.sign({username},process.env.JWT_SECRET);
        console.log(token)
        res.status(200).json({
            message:"User Signed In",
            token:token,
            granted:true
        })

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

        res.status(201).json({ 
            message: "User Registered", 
            token:token 
        });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while registering the user" });
    }
};


const Account = (req,res) => { 
     const  user  = Network.find({
            username:req.body.username
     });
     console.log(user)
        if(!user){ 
            res.status(404).json({
                message:"User not found",

            })
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