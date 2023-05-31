const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser');

// Middleware 
app.use(cors())
app.use(express.json());
app.use(cookieParser());

// Routes 
app.use('/api/', require('./routes/auth'));

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
