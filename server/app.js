import express from 'express';
import dotenv from 'dotenv';
import {connectPassport} from "./utils/Provider.js";
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import userRoute from './routes/user.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';

const app = express();
export default app;
dotenv.config({
    path:'./config/config.env'
})
//using middlewares

app.use(session({
    secret:process.env.SESSION_SECRETE,
    resave:false,
    saveUninitialized:false,
}));
app.use(cookieParser());


app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

connectPassport();







//importing routes



app.use('/api/v1/',userRoute);

//error middleware

app.use(errorMiddleware)