import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Loading from '../components/Loading'
import { loginAction } from '../redux/actions/loginAction'
import { TYPES } from '../redux/constants/globalType'
import './Login.css'

const Login = () => { 
const [data,setData] = useState([])
const dispatch=useDispatch()
const history = useHistory()
const [count,setCount] = useState(20)
const [text,setText] = useState('')

    const buttonClick = () =>{ 
        if(data.length>0){
           
          dispatch(loginAction(data))
          history.push('/home')
          
        }else{
          
        }
    }

    setTimeout(()=> {
        if(count > 0){
            setCount(count - 1)
        }else {
            let err='Zaman aşımına uğradınız.'
            setText(err)
        }
    }, 1000)


    return (
        <>
        
        <div className="login" style={{backgroundImage:'url(https://images.alphacoders.com/990/thumb-1920-990940.png',width:'100%',height:'1000px',objectFit:'cover',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            
            <h2 style={{color:'white',marginBottom:'30px',fontWeight:'bolder'}}>YEŞİLNACAR/CLUB MAĞAZASI'NA HOŞ GELDİNİZ</h2>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
             {
                 text && <div style={{border:'1px solid black',color:'white',width:'250px',height:'50px',textAlign:'center',fontSize:'18px',fontFamily:'sans-serif',paddingTop:'10px',background:'crimson',position:'fixed',top:'10px',right:'10px',zIndex:50}}>{text}</div>
             }
            <span style={{textAlign:'center',fontWeight:'bolder',marginRight:'5px',border:'1px solid black',color:'black',fontSize:'30px',background:'white',height:'55px',width:'60px'}} >{count}</span>
           <input className="loginbir" disabled={text.length > 0 && true} value={data} onChange={e=>setData(e.target.value)} style={{width:'400px',height:'55px',fontSize:'20px'}} type="text" placeholder="" /><button onClick={buttonClick} style={{fontSize:'22px',padding:'10px',marginLeft:'3px'}}><i class="fas fa-key"></i></button>
        </div>
        </div>
        </>
    )
}

export default Login
