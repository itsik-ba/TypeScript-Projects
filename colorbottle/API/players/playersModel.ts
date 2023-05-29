import mongoose, { Schema } from "mongoose"

export const PlayerSchema = new Schema({
    
    name: { require: [true, "user must enter"], type: String },
    password: { require: true, type: String },
    email: { require: true, type: String, unique:true},

   })


const UserModel = mongoose.model("bottle", PlayerSchema);

export default UserModel; 