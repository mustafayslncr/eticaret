import React, { useEffect, useState } from 'react';
import './DetailScreen.css'
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { detailAction } from '../redux/actions/detailAction';
import Loading from '../components/Loading';
import { useHistory } from 'react-router-dom';

const DetailScreen = (props) => {
   const productId=props.match.params.id
   const dispatch=useDispatch()
   const history = useHistory()
   const detailList=useSelector(state=>state.detailList)
   const {loading,product}=detailList
   const [qty,setQty] = useState(1)
   
   useEffect(()=>{
     dispatch(detailAction(productId))
   },[dispatch])
    
    const addToCardHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }
    return (
        <>
        <Header />
        { loading ? <Loading/> :
        <div className="detaylar row">
            <div className="col-lg-4 resimlerim">
                <img src={product.image}/> 
                <div className="ucresim">
                    <img src={product.image2} alt="" />
                    <img src={product.image3} alt="" />
                    <img src={product.image4} alt="" />
                </div>
            </div>
            <div className="col-lg-4  detayicerik">
                <span style={{fontSize:'30px',color:'crimson'}}>{product.brand}</span>
                <span>{product.name}</span>
                <span>Fiyat: {product.price} ₺</span>
                <span>{product.description}</span>
                <span>{product.icerikbir}</span>
                <span>Materyal: {product.icerikiki}</span>
                <span>Renk: {product.color}</span>
                <span>Beden: {product.beden[0]}-{product.beden[1]}-{product.beden[2]}-{product.beden[3]}-{product.beden[4]}</span>
                <span>Stok: <strong>{product.stock}</strong>  Adet</span>
            </div>
            <div className="col-lg-4 " style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
               <select value={qty} onChange={e=>setQty(e.target.value)} style={{width:'80%',fontSize:'25px'}}>
                    {
                        [...Array(product.stock).keys()].map(x=>(
                            <option key={x+1} value={x+1}>{x+1}</option>
                        ))
                    }
                </select>
                <button onClick={addToCardHandler} className="btn btn-primary mt-3" style={{width:'500px'}}>Sepete Ekle</button>
                <button className="btn btn-danger mt-3" style={{width:'500px'}}>AnaSayfa</button>

            </div>
                
        </div>}
        </>
    )
}

export default DetailScreen
