import express, { Router } from 'express'
import passport, { Passport } from 'passport'
import { getAdminUsers, logout, myProfile } from '../controllers/user.js';
import { autherizedAdmin, isAuthenticated } from '../middlewares/auth.js';

const router =express.Router();

router.get("/googlelogin",passport.authenticate("google",{
    scope:["profile"],
}))

router.get('/login', passport.authenticate("google"),(req,res,next)=>{
    res.send("Logged IN");
})

router.get('/me', isAuthenticated,myProfile);
router.get('/logout',logout);

//for admins only

router.get('/admin/users',isAuthenticated,autherizedAdmin,getAdminUsers)


export default router;