import express, { Router } from 'express'
import passport from 'passport'

const router =express.Router();

router.get("/googlelogin",passport.authenticate("google",{
    scope:["profile"],
}))

router.get('/login',(req,res,next)=>{
    res.send("Logged IN");
})

export default router;