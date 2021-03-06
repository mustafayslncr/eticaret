import express from 'express';
import data from './data.js';
const app=express()

app.get("/api/products/:id",(req,res)=>{
    const product = data.products.find(x=>x._id === req.params.id)
    if(product){
        res.send(product)
    }else{
        res.status(400).json({msg:'ürün detayına ulasılamadı'})
    }
})

app.get("/api/products",(req,res)=>{
    res.send(data.products)
})


const port =process.env.PORT || 5000
app.listen(port, ()=> console.log(`server is running ${port}`))