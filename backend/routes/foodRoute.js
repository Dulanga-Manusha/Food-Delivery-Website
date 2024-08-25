import express from 'express';
import { addFood ,listFood ,removeFood } from '../controllers/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();

// image storage engine for store images at uploads
const storage = multer.diskStorage({
    destination: "uploads",
    filename : (req,file,cb) => {
        return cb(null,`${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({storage: storage});

// handle with front
foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list",listFood);
foodRouter.delete("/remove",removeFood)


export default foodRouter;