
import mongoose  from "mongoose";
export const connectDB = async()=>{
    try {
       console.log(process.env.MONGO_URI)
       const conn = await mongoose.connect(process.env.MONGO_URI);
       console.log(`MongoDB conected: ${conn.connection.host}`);
    } catch (error) {
        console.log('ERROR connection ' ,error.message)
        process.exit(1)//failure 
        
    }
}