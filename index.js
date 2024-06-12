import connection from "./src/db/index.js";
import { app } from "./src/app.js";
import mongoose from 'mongoose';
const PORT = process.env.PORT || 8000;

//connection()
  //.then(
    //app.listen(PORT, () => {
      //console.log("server is running on porty ", PORT);
    //})
  //)
  //.catch((err) => console.log("connection failed", err));

  mongoose
    .connect(`mongodb+srv://hashiradnan55:duV57gxalfflwe21@quizgame-mernstack.8jnxvsr.mongodb.net/?retryWrites=true&w=majority `)
    .then(()=>{
        console.log("App is connected to DB");

        app.listen(PORT,()=>{
            console.log("Server is listening to the PORT")
        })
    })
    .catch((error)=>{
        console.log(error)
    })
