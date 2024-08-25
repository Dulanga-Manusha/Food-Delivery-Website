import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import 'dotenv/config';
import orderRouter from './routes/orderRoute.js';


//app config
const app = express();
const port = 4000;

//middleware
app.use(cors());
app.use(express.json());

//db connection
connectDB();

// api main endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads")); // mount this folder at this end point. when we want to access the file path is /images/filename
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get('/', (req, res) => {
    res.send('API working')
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

//mongodb+srv://dula:dulanga1234@cluster0.m33pgbe.mongodb.net/?