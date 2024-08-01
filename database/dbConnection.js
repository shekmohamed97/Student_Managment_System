import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URL,{    dbName:"",
        useNewUrlParser:true,
        useUnifiedTopology:true,
        serverSelectionTimeoutMS:10000,
        socketTimeoutMS:45000
    })
    .then(()=>{
        console.log("Connected to the database");
    })
    .catch((err)=>{
        console.log(`can't connected to the database ${err}`);
    });
}

