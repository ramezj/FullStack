import express from "express";
const router = express.Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

router.post('/', async(req, res) => {
    if(!req.body.UID) {
        return res.status(500).json({
            ok:false,
            response:'Widget Missing UID'
        })
    }
    if(!req.body.email || !req.body.description) {
        return res.status(400).json({
            ok:false,
            response:'Please fill out all fields'
        })
    };
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: req.body.UID
            }
        });
        if(!user) {
            return res.status(400).json({
                ok:false,
                response:"User doesn't exist"
            })
        };
        const save = await prisma.Feedback.create({
            data: {
                userId:req.body.UID,
                email:req.body.email,
                description:req.body.description,
            }
        })
        if(!save) {
            return res.status(400).json({
                ok:false,
                response:'Error saving feedback'
            })
        } 
        return res.status(200).json({
            ok:true,
            response:'Feedback Received'
        })
    } catch (error) {
        console.error(error);
    }
})




export { router }