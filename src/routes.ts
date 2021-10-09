import { Request, Response } from "express";
const UserController = require('./controllers/UserController')
const router = require('./app').Router

router.get('/user',(req: Request,res: Response)=>{
    return res.status(200).json({message:'Created user'})
})

router.get('/users',async(req: Request,res: Response): Promise<Response>=>{
    return await res.status(200).json({message:'Created user'})
})
router.post('/user',UserController.store)
