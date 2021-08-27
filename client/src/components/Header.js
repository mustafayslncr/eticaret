import React, { useState } from 'react'
import './Header.css'
import logo from './logo/logo-my.png'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { TYPES } from '../redux/constants/globalType';

const Header = () => {
    const  {pathname} = useLocation()
    console.log(useLocation());
    const cardList = useSelector(state=>state.cardList)
    const { cartItems,message } = cardList
    const dispatch = useDispatch()
    const [text,setText] = useState(message)
    const sidebarList = useSelector(state=>state.sidebarList)
    const { sidebar } = sidebarList
    const { loginItem } = useSelector(state => state.loginItem)

    return (
        <>
        <div className="headertop">
            <div className="marka">
                <span onClick={()=> dispatch({type:TYPES.SIDE_BAR,payload:!sidebar})}><i class="fas fa-align-justify"></i></span>
                <span>
                   <Link to="/home"> <img src={logo} alt="" /> </Link>
                </span>
                <span className="animation" >Yeşilnacar/Club</span>
            </div>
            <div className="sagsekme">
               <span ><Link to='/home' style={{textDecoration:'none'}}>Ürünler</Link></span> 
               <span><Link to="/iletisim" style={{textDecoration:'none'}}>İletişim</Link></span> 
               <span><Link to="/" style={{textDecoration:'none'}}>Login</Link></span> 
               <span style={{position:'relative'}}><Link to="/cart" style={{textDecoration:'none'}}><i style={{fontSize:'30px'}} class="fas fa-shopping-bag"></i><span className="sil" style={{position:'absolute',top:'0',right:'0',transform:'translate(-25%,-18%)',fontSize:'20px',color:'red',fontWeight:'bolder',opacity:0.7}}>{cartItems.length}</span></Link> </span> 
               <span><Link to='/admin' style={{textDecoration:'none'}}>{loginItem[0] === 'MUSTAFA' && 'Admin'}</Link></span>
            </div>
        </div>
        {text.length > 0 && <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',width:'250px',height:'70px',fontWeight:'bolder', background:'RGB(161, 127, 26)',color:'black',position:'fixed',top:'50px',right:'5px',transform:'translateY(100%)',border:'1px solid black',fontSize:'17px'}}> <div>{text}</div>
          <span onClick={() => setText('')}  style={{fontSize:'30px',cursor:'pointer'}}>&times;</span>
         </div>}
        </>

    )
}

export default Header
