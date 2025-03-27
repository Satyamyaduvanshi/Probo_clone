import express, { Request, Response } from "express";


const app = express();

app.use(express.json())

app.get("/",(req:Request,res:Response)=>{

    res.json({
        message:"welcome to Probo_BE"
    })

})

app.listen(3000,()=> console.log("starting you REST API on 3000"))