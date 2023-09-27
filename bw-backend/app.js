import express from "express";
import dotenv from "dotenv";
dotenv.config();

//app init
const app = express();
const PORT = process.env.PORT || 3000;

//in-built Middlewares
app.use(express.json());

//app test
app.get("/", (req, res) => {
    res.status(200).json({ message: "Success call" });
});

//app listen
app.listen(PORT, () => {
    console.log(`Server started and running on port ${PORT}`);
});
