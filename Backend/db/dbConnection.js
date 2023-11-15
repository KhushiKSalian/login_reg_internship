const mongoose=require('mongoose');
const connectDB= async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');
        console.log("Connected to mongoDB successfully");
    }
    catch(error){
        console.log('Connection failed',error);
    }
}

module.exports = connectDB;
