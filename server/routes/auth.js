const router = require('express').Router();
const { PrismaClient }  = require('@prisma/client');
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password ) {
        res.status(400).json({
            ok:false,
            response:'Fields Missing'
        })
    }
    try {
        const user = await prisma.user.create({
            data: {
                email:email,
                password:password
            }
        });
        res.status(200).json({
            ok:true,
            response:user
        })
    } catch (error) {
        console.error(error);
        res.status(400).json({
            ok:false,
            response:error
        })
    }
})

router.post('/login', async(req, res) => {

})

module.exports = router;