import { NextFunction, Request, Response } from "express"

const jwt = require('jsonwebtoken')

module.exports = async (req: Request,res: Response, next: NextFunction) =>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({message:'Token not provider'})
    }
    let tokenHash = token.split(' ')[0]
    if(await jwt.verify()){
        return res.status(401).json({message: 'token not provider'})
    }
    next();
}