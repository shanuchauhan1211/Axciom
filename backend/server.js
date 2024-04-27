import express from "express";
import cors from "cors";

//import User from "./router/auth-router.js";
import connectDb from "./util.js";
//import Post from "./router/createPost.js";



const app = express();


app.use(express.json({limit:'50mb'}));
app.use(cors());

// app.use("/User",User);
// app.use("/Post",Post);

const PORT = 5000;
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port : ${PORT}`);
})

})