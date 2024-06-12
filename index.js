import connection from "./src/db/index.js";
import { app } from "./src/app.js";
import mongoose from 'mongoose';

//This is to access require while using module as a type in package.json
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 8000;

//connection()
  //.then(
    //app.listen(PORT, () => {
      //console.log("server is running on porty ", PORT);
    //})
  //)
  //.catch((err) => console.log("connection failed", err));

  mongoose
    .connect(`mongodb+srv://maaz:maaz@cluster0.0zdduss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(()=>{
        console.log("App is connected to DB");

        app.listen(PORT,()=>{
            console.log("Server is listening to the PORT")
        })
    })
    .catch((error)=>{
        console.log(error)
    })
