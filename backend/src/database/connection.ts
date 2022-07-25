import mongoose from "mongoose";

const connection = (DB_URL:string) => {
    mongoose.connect(DB_URL).then(() =>{
        console.log("Database connection successful")
    }).catch((err:unknown) => {
        console.log("Error :- " ,err);
    })
}

export default connection;