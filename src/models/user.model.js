
import bcrypt from 'bcrypt';
import { Jwt } from 'jsonwebtoken';
import mongoose, { Schema } from "mongoose";

const UserSchema =new Schema({
username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true,
},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
  
},
fullName:{
    type:String,
    required:true,
    lowercase:true,
    trim:true,  
},
avatar:{
    type:String,
    required:true,
},
coverImage:{
    type:String,
},
watchHistory:[
    {
    type:Schema.Types.ObjectId,
    ref:"Video"
    }
],
password:{
    type:String,
    required:[true,'Password is required']
},
refreshToken:{
    type:String
}

},{
    timestamps:true,
}

);



UserSchema.pre("save",async function(next) {
if(!this.isModified("password")) return next();

    this.password =bcrypt.hash(this.password,10)
next()

})

UserSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(this.password,password)
}

UserSchema.methods.generateAccessToken =  function () {
 return   jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expireIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
UserSchema.methods.generateRefreshToken =  function () {
    return   jwt.sign(
        {
            _id:this._id,
           
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expireIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )

}

export const User = mongoose.model("User",UserSchema)