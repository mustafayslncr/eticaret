import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterProducts, sortProducts } from '../redux/actions/productAction'
import './Filtreleme.css'

const Filtreleme = () => {
    const productList = useSelector(state => state.productList)
    const { size, sort, items, filteredItems } = productList
    const dispatch = useDispatch()

    return (
        <div className="filtreleme">
            <div className="filtre">
                <input value="VERSACE" onChange={(e)=>dispatch(filterProducts(items,e.target.value))} style={{margin:'5px'}} type="checkbox" name="kutu1" id="kutu1"/>VERSACE &nbsp;
                <input value="EMPORİO ARMANİ" onChange={(e)=>dispatch(filterProducts(items,e.target.value))} style={{margin:'5px'}} type="checkbox" name="kutu2" id="kutu2"/> EMPORİO ARMANİ &nbsp;
                <input value="HUGO BOSS" onChange={(e)=>dispatch(filterProducts(items,e.target.value))} style={{margin:'5px'}} type="checkbox" name="kutu3" id="kutu3"/> HUGO BOSS &nbsp;
                <input value="PAUL & SHARK" onChange={(e)=>dispatch(filterProducts(items,e.target.value))} style={{margin:'5px'}} type="checkbox" name="kutu4" id="kutu4"/> PAUL & SHARK &nbsp;
                <input value="MONCLER" onChange={(e)=>dispatch(filterProducts(items,e.target.value))} style={{margin:'7px'}} type="checkbox" name="kutu5" id="kutu5"/> MONCLER &nbsp;
                <input value="MİCHAEL KORS " onChange={(e)=>dispatch(filterProducts(items,e.target.value))} style={{margin:'7px'}} type="checkbox" name="kutu6" id="kutu6"/> MİCHAEL KORS &nbsp;
                <input value="MOSCHINO" onChange={(e)=>dispatch(filterProducts(items,e.target.value))} style={{margin:'7px'}} type="checkbox" name="kutu7" id="kutu7"/>MOSCHINO &nbsp;
                <input value="PHİLİPP PLEİN" onChange={(e)=>dispatch(filterProducts(items,e.target.value))} style={{margin:'7px'}} type="checkbox" name="kutu8" id="kutu8"/>PHİLİPP PLEİN &nbsp;
                <input value="ALL" onChange={(e)=>dispatch(filterProducts(items,e.target.value))} style={{margin:'7px'}} type="checkbox" name="kutu9" id="kutu9"/> (ALL) &nbsp;
            
            
                <select value={sort} onChange={e=>dispatch(sortProducts(filteredItems,e.target.value))} className="select">
                    <option value="DEFAULT">DEFAULT</option>
                    <option value="HIGH">HIGH</option>
                    <option value="LOW">LOW</option>
                </select>
            
                </div>
        </div>
    )
}

export default Filtreleme
