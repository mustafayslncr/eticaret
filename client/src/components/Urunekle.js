import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Urunekle = () => {
    const adminList = useSelector(state => state.adminList)
    const {avatar, marka, kategori, fiyat } = adminList
    
    return (
        <div className="row">
            <div className="product col-lg-4">
            <div className="resim">
               <img src={avatar} alt="" />
            </div>
            <div>
               <strong> <span>{marka}</span></strong>
            </div>
            <div>
                <span>{kategori} </span>
            </div>
            <div>
               {marka.length > 0 ? <strong> <span style={{marginRight:'12px'}}>{fiyat} ₺</span></strong> : ''}
                {marka.length > 0 && <span><i style={{color:'gray'}} class="fas fa-comments"></i></span>}
            </div>
            {marka.length > 0 && <Link style={{width:'350px',textAlign:'center'}}> <button className="btn btn-primary w-50 mt-2">Ürün Detayları</button></Link>}
            </div>
        </div>
    )
}

export default Urunekle
