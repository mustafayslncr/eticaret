import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { adminAction } from '../redux/actions/adminAction'
import { TYPES } from '../redux/constants/globalType'
import './Admin.css'
import { Link } from 'react-router-dom'
import { fontWeight } from '@material-ui/system'

const Admin = () => {
    const [avatar,setAvatar] = useState('')
    const [marka,setMarka] = useState('')
    const [kategori,setKategori] = useState('')
    const [fiyat,setFiyat] = useState('')
    const dispatch = useDispatch()
    console.log(avatar);
    const history=useHistory()
    const changeAvatar=(e)=>{
        const file=e.target.files[0]
        setAvatar(file)
       }
       const adminSubmit = ()=>{
        dispatch(adminAction(URL.createObjectURL(avatar),marka,kategori,fiyat))
        history.push('/home')
       }
    return (
        <div className="admin">
            <h2>ADMİN PANELİ ÜRÜN EKLEME SAYFASI</h2>
           <span><input type="file" name="file" id="file_up" accept="image/*" placeholder="Resim" onChange={changeAvatar} /></span>
           <img src={avatar ? URL.createObjectURL(avatar) : ''} alt="" /> 
           <span><input value={marka} onChange={e=>setMarka(e.target.value)} placeholder="Marka" type="text" id="marka"/></span> 
           <span><input value={kategori} onChange={e=>setKategori(e.target.value)} placeholder="Kategori" type="text" id="kategori"/></span> 
           <span><input value={fiyat} onChange={e=>setFiyat(e.target.value)} placeholder="Fiyat" type="text" id="fiyat"/></span>
           <button style={{marginBottom:'5px'}} onClick={adminSubmit}>ÜRÜNÜ EKLE</button>
           <Link to='/home'><button>AnaSayfa</button></Link>
           
            
        </div>
    )
}

export default Admin
