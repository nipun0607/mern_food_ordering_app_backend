//import all npm run commands
import express,{Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoute from "./routes/MyUserRoute";


//casting as string
// console.log("moongoose");
mongoose
.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=>console.log("Connected to database!"))
.catch((error) => console.error("Error connecting to database:", error));
const app = express();

//middleware
app.use(express.json());
app.use(cors())


// /api/my/user
app.use("/api/my/user",MyUserRoute);
const PORT = process.env.PORT || 7000;
app.listen(PORT,()=>{
    console.log("server start on localhost:7000 ");
    
});