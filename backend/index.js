import express from 'express'
import { connectDB } from './db/connectDB.js';
import dotenv from "dotenv"
import authRoutes from './routes/auth routes.js'
dotenv.config()
const app = express();
const PORT=process.env.PORT || 5000
app.use(express.json())//allows as to parse incoming request:req.body
app.use('/api/auth',authRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log('server is runing on port: ',PORT)

}
)
