import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    name:{
        type:String,
        required:true
    },
    lastLogin:{
        type:Date,
        default:Date.now
    },
    isVerfied:{
        type:Boolean,
        default:false
    },
    resetPasswordToken:String,
    restPasswoedExpiredAt:Date,
    verificationToken:String,
    verificationTokenExpiredAt:Date
},{timestamps:true})//created at and updated at
 export const User = mongoose.model('User',userSchema);