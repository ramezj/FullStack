const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const jwt = require('jsonwebtoken');

// Middleware 
app.use(cors())
app.use(express.json());
app.use(cookieParser());

// Routes 
app.use('/api/', require('./routes/auth'));

app.get('/test', async(req, res) => {
    const test = await jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsaWM3eDZybTAwMDB1c2FrbWp2djAxaHgiLCJpYXQiOjE2ODU1Njg0Mjh9.fO0PSQnGm4gBe_LJZ4iQAcrXgT9KAXryoOdlmTEql1U', "NOTASECRET")
    res.json(test);
    console.log(test);
})

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
