import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Product = ({product}) => {
    
    
    return (
     
        <div className="product col-lg-4">
            <div className="resim">
               <img src={product.image} alt="" />
            </div>
            <div>
               <strong> <span>{product.brand}</span></strong>
            </div>
            <div>
                <span>{product.name} </span>
            </div>
            <div>
               <strong> <span style={{marginRight:'12px'}}>{product.price} ₺</span></strong>
                <span><i style={{color:'gray'}} class="fas fa-comments"></i> {product.yorum} </span>
            </div>
             <Link style={{width:'350px',textAlign:'center'}} to={`/detaylar/${product._id}`}> <button className="btn btn-primary w-50 mt-2">Ürün Detayları</button></Link>
             
        </div>
        
      
    )
}

export default Product
