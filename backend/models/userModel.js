import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    cartData : { type: Object, default: {} }
},{minimize: false}); // if we don't use minimize: false then it will not store empty object in database(cartData)

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;