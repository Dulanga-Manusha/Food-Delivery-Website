import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item to database for admin panel
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category
    });
    try{
        await food.save();
        res.json({success: true, message: "Food item added successfully"});
    } catch(err){
        console.log(err);
        res.json({success: false, message: "Error adding food item"});
    }
};

//for listing the all food items
const listFood = async (req, res) => {
    try{
        const foods = await foodModel.find({});
        res.json({success: true, data: foods});
    } catch(err){
        console.log(err);
        res.json({success: false, message: "Error fetching food items"});
    }
}

// remove food item from database
const removeFood = async (req, res) => {
    try{
        const food = await foodModel.findById(req.body.id);
        if (!food) {
            return res.json({ success: false, message: "Food item not found" });
        }
        fs.unlink(`uploads/${food.image}`, ()=>{});
        await foodModel.findByIdAndDelete(req.body.id);

        res.json({success: true, message: "Food item removed successfully"});
    } catch(err){
        console.log(err);
        res.json({success: false, message: "Error removing food item"});
    }
}

export { addFood ,listFood ,removeFood};