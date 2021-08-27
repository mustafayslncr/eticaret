import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { cardAction, deleteAction } from '../redux/actions/cardAction'
import './CardScreen.css'
import { Link } from 'react-router-dom'

const CardScreen = (props) => {
    const productId = props.match.params.id
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1
    const dispatch = useDispatch()
    const cardList = useSelector(state=>state.cardList)
    const { cartItems,message } = cardList
    const [text,setText] = useState('')
    
    useEffect(()=>{
      if(productId){
          dispatch(cardAction(productId,qty))
      }
    },[dispatch,productId,qty])

    const removeFromCartHandler = (id) =>{
        dispatch(deleteAction(id))
    }

    const fiyat=cartItems.reduce((a,c)=>a+c.price * c.qty,0).toFixed(2)
    
   
    
    return (
        <>
        <Header />
        <div  className="kupon">
            <h4>%10 İndirimden yararlanmak için kupon kodunuz : <strong>yslncr</strong></h4>
            <span><input value={text} onChange={e => setText(e.target.value)} type="text" placeholder="Kupon Kodu"/>
                <button className="btn btn-primary">Onayla</button>
            </span> 
         </div>
            { cartItems.length>0 ? cartItems.map(cart=>(
                <div className="cartcart">
                <div className="cart-genel"  key={cart.id}>
                <div className="cart-resim">
                    <img src={cart.image} alt=""/>
                </div>
                
                    <span>{cart.brand}</span>
                    <span>
                        <select value={cart.qty} onChange={e=>dispatch(cardAction(cart.id),Number(e.target.value))}>
                        {
                        [...Array(cart.stock).keys()].map(x=>(
                            <option key={x+1} value={x+1}>{x+1}</option>
                        ))
                    }
                        </select>
                    </span>
                    <span>{cart.price} ₺</span>
                    <button type="button" onClick={()=>removeFromCartHandler(cart.id)} className="btn btn-danger">delete</button>
                
                </div>
                </div>
            )) : <div className="bossepet">
                     <div>
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlMoyv3v3PcUaFzOKIi6_mYW_9fZG5yi9zsg&usqp=CAU" alt="" />
                     </div>
                       <h2>SEPETİNİZDE ÜRÜN BULUNMAMAKTADIR...</h2>
                      <Link to="/home"><button className="btn btn-primary w-40">Alışverişe devam...</button></Link> 
                </div>}
          
                   <h2 className="toplam">
                      <span style={{marginRight:'10px'}}>Subtotal ({cartItems.reduce((a,c)=>a+c.qty,0)})</span> 
                       <span>   {fiyat} ₺ </span>
                   </h2>
        </>
    )
}

export default CardScreen
