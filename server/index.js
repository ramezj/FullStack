import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from 'dotenv'
dotenv.config()
import bodyParser from "body-parser";
import { router as auth } from "./routes/auth.js"
import { redisStore } from "./lib/redis.js"

// Initialize App
const app = express();

// Redis

// Middleware 
app.use(cors({
    origin: 'http://localhost:3000',
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}))
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser());
app.use(session({
    store:redisStore,
    secret:'test',
    resave: false,
    saveUninitialized:false,
    cookie: ({})
}));

// Routes 
app.use('/auth', auth);

app.get('/', async (req, res) => {
    res
    .status(200)
    .json({
        ok:true,
        msg:'Hello from Express ✨'
    })
})

// Run Server
app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on ${process.env.PORT}`);
})
