import express, {Express} from "express";
import session from "express-session";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";
import dotenv from "dotenv";
import connection from "./database/connection";

dotenv.config();

const DB_HOST_NAME = process.env.DB_HOST_NAME;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const URL = process.env.URL as string;

//connect to the database
const DB_URL = `mongodb://${DB_HOST_NAME}:${DB_PORT}/${DB_NAME}`;
connection(DB_URL);

const app:Express = express();
app.use(express.json());
app.use(cors({
    origin:URL,
    credentials:true
}));
app.use(
    session({
        secret:"secretcode",
        resave:true,
        saveUninitialized:true
    })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());