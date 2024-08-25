import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://dula:dulanga1234@cluster0.m33pgbe.mongodb.net/food-del').then(()=>console.log('DB connected'))); 
}