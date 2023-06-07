import express from "express";
const router = express.Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import bcrypt from "bcrypt";
import { authenticated } from "../middleware/auth.js";

router.get('/app', authenticated, async(req, res) => {
    res.status(200).json({
        ok:true,
        response:req.session.user
    })
})

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    if(!email|| !password ) {
        res.status(400).json({
            ok:false,
            response:'Fields Missing'
        })
    }
    try {
        const userExist = await prisma.user.findUnique({
            where: {
                email:email
            }
        });
        if(userExist) {
            return res.status(400).json({
                ok:false,
                response:'user exists on db'
            })
        };
        const hashed = await bcrypt.hash(req.body.password, 10);
        const user = await prisma.user.create({
                data: {
                    email:req.body.email,
                    password:hashed
                }
            });
        if(!user) {
            return res.status(400).json({
                ok:false,
                response:'Something went wrong'
            })
        }
        req.session.user = {
            id:user.id
        }
        return res.status(200).json({
            ok:true,
            response:user
        })
    } catch (error) {
        console.error(error);
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
        if(userExist && comparePassword) {
            req.session.user = {
                id:userExist.id
            }
            res.status(200).json({
                ok:true,
                response:'Logged In Successfully'
            })
        }
    } catch (error) {
        console.error(error);
    }
})

router.get('/logout', async(req, res) => {
    req.session.destroy();
})

export { router }