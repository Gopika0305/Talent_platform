//signin,register,home,account
import { Router } from 'express'

const router = Router();

router.get('/signin')
router.post('/signup')

router.get('/account')
router.post('/account/details');
router.update('/account/details/:username')

router.get('/')

