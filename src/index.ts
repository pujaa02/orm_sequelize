
import express, { Application } from "express";
const app: Application = express();
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import main from "./routes/route";
dotenv.config();
const port = process.env.PORT;
import cors from "cors";

app.use(cookieParser());
import bodyParser from 'body-parser';
import db from "./models";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.connect
const corsOptions = {
    origin: 'http://192.168.10.103:5000',
    methods: 'GET, PUT, POST',
    credentials: true
};
app.use(cors(corsOptions))
app.options('http://192.168.10.103:5000', cors(corsOptions));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://192.168.10.103:5000");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/", (req, res) => {
    res.send("Puja Moravadiya");
});

try {
    app.listen(port, () => {
        console.log(`Server is running in port: ${port} `);
        app.use(main);
    });
} catch (error) {
    console.log(`Error: ${error}`);
}
