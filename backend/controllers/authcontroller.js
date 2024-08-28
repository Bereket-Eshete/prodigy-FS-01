import { User } from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js"
export const signup= async (req,res)=>{
 const {email,password,name}=req.body
 try {

    if(!email || !password || !name){
        throw new Error('All fileds are required')
     }
     const userAlreadyExist = await User.findOne({email})
     if(userAlreadyExist){
        return res.status(400).json({succes:false, message:'user already exists'})
     }
     const hashePassword = await bcryptjs.hash(password,10)
     const verificationToken = Math.floor(1000000 + Math.random()*900000).toString()
     const user = new User({
        email,
        password:hashePassword,
        name,
        verificationToken,
        verificationTokenExpiredAt:Date.now()+24*60*60*1000//24 hours
     })
     await user.save()
     generateTokenAndSetCookie(res,user._id)
     await sendVerificationEmail(user.email, verificationToken);
     res.status(201).json({
      succes:true,
      message:'user created succesfully',
      user:{
         ...user._doc,
         password:undefined
      }


     })
 } catch (error) {
    res.status(400).json({succes:false , message:error.message})
 }
 


}
export const login= async (req,res)=>{
    res.send('loin')
}
export const logout= async (req,res)=>{
    res.send('logiut')
}