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
        const token = await jwt.sign({id:user.id}, "NOTASECRET")
        res.status(200).json({
            ok:true,
            response:'Registered Successfully.',
            token:token
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            ok:false,
            response:error
        })
    }
})

router.post('/login', async(req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({
            ok:false,
            response:'Fields Missing'
        })
    }
    try {
        const userExist = await prisma.user.findUnique({
            where:{
                email:req.body.email
            }
        });
        if(!userExist) {
            return res.status(400).json({
                ok:false,
                response:"User doesn't exist"
            })
        }
        const comparePassword = await bcrypt.compare(req.body.password, userExist.password);
        if(!comparePassword) {
            res.status(400).json({
                ok:false,
                response:'Incorrect Credentials'
            })
        }
        const loginToken = await jwt.sign({id:userExist.id}, "NOTASECRET");
        if(userExist && comparePassword && loginToken) {
            res.status(200).json({
                ok:true,
                response:'Logged In Successfully',
                token:loginToken
            })
        }
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;