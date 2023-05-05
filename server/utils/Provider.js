import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import {User} from "../models/User.js";

export const connectPassport=()=>{
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, Profile, done){
        //if we get profile from google login then only this function runs
        //look for the user in DB
        const user= User.findOne({
            googleId:Profile.id,
        });

        if(!user){
            const newUser= await User.create({
                googleId:Profile.id,
                name:Profile.displayName,
                photo:Profile.photos[0].value
            });
        return done(null,newUser);
            
        }else{
            
            return done(null,user);
        }
    }));
    
    //must things in passport

    passport.serializeUser((user, done)=>{
        done(null,user.id);
    });

    passport.deserializeUser(async(id, done)=>{
       const user = await User.finfById(id);
        done(null,user);
    })

}