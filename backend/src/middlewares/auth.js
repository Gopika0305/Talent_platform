import jwt from 'jsonwebtoken';

const authMiddleware = (req,res,next) => {
    //Get the token as headers.authorization
    const token = req.headers.authorization;
    const words = token.split(' ');
    const jwtToken = words[1]; 
    //Verify the token
    const codeWord = jwt.verify(jwtToken,JWT_SECRET);

    if(codeWord.username){ 
        req.username = codeWord.username;
        next()
    }
    else{ 
        res.json({
             msg: 'You are not authenticated'
        })
    }
}

export default authMiddleware;
