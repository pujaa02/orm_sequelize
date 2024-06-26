import express, { Application } from "express";
const app: Application = express();
import dotenv from "dotenv";
import db from "./models"

dotenv.config();
const port = process.env.PORT;
db.connect

app.get("/", (req, res) => {
    res.send("hello");
});

try {
    app.listen(port, () => {
        console.log(`Server is running in port: ${port} `);
    });
} catch (error) {
    console.log(`Error: ${error}`);
}
