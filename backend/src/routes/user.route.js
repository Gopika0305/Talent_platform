//signin,register,home,account
import { Router } from 'express'
import  { SignUp ,SignIn} from '../controllers/user.control.js'
import { authMiddleware }  from '../middlewares/auth.js'
const router = Router();

router.post('/signin',SignIn)
router.post('/signup',SignUp)

router.get('/account')
router.post('/account/details');
//router.update('/account/details/:username')

router.get('/')

export default router