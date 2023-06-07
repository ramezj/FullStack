import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from 'dotenv'
dotenv.config()
import bodyParser from "body-parser";
import { router as auth } from "./routes/auth.js"
import redis, { createClient } from "redis"
import RedisStore from "connect-redis"

const client = createClient({
    url:process.env.REDIS_URL,
    host:process.env.REDISHOST,
    port:process.env.REDISPORT,
    password:process.env.REDISPASSWORD
});
client.on('error', err => console.log('Redis Client Error', err));
await client.connect();

// Initialize App
const app = express();

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
    name:"session",
    store: new RedisStore({
        client: client
    }),
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
