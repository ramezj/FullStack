const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()

// Middleware 
app.use(cors())
app.use(express.json());


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
