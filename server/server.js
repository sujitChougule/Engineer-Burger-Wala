import app from './app.js';
import { connectDB } from './database.js';
import Razorpay from 'razorpay';
//calling DB connection
connectDB();

//razorpay integration
export const instance = new Razorpay({ key_id: process.env.RAZORPAY_API_KEY, key_secret: process.env.RAZORPAY_API_SECRET});

app.get("/",(req,res,next)=>{
    res.send("<h2>hello</h2>");

})


//server is connected
app.listen(process.env.PORT,()=>
    console.log(`Server is working on PORT: ${process.env.PORT}`)
);

