import app from './app.js';
import { connectDB } from './database.js';

//calling DB connection
connectDB();

app.get("/",(req,res,next)=>{
    res.send("<h2>hello</h2>");

})


//server is connected
app.listen(process.env.PORT,()=>
    console.log(`Server is working on PORT: ${process.env.PORT}`)
);