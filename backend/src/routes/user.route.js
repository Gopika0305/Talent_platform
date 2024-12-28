//signin,register,home,account
import { Router } from 'express'
import  { SignUp ,SignIn,JobsPost, JobsGet } from '../controllers/user.control.js'
import { authMiddleware }  from '../middlewares/auth.js'
const router = Router();

router.post('/login',SignIn)
router.post('/signup',SignUp)
router.get('/network')
router.get('/getjob',authMiddleware,JobsGet)
router.post('/postjob',authMiddleware,JobsPost);
//router.update('/account/details/:username')

router.get('/')

export default router