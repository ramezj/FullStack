const router = require('express').Router();
const { PrismaClient }  = require('@prisma/client');
const prisma = new PrismaClient()
const jwt = require('jsonwebtoken');
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
        const exist = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if(exist) {
            return res.status(400).json({
                ok:false,
                response:'user already exists'
            })
        }
        const hashed = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email:email,
                password:hashed
            }
        });
        const token = await jwt.sign({id:user.id}, process.env.JWT_SECRET)
        res.status(200).json({
            ok:true,
            response:token
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