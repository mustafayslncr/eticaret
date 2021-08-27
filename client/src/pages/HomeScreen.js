import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Product from '../components/Product';
import Loading from '../components/Loading';
import { productAction } from '../redux/actions/productAction';
import Filtreleme from '../components/Filtreleme';
import Urunekle from '../components/Urunekle';
import Footer from '../components/Footer';
import './HomeScreen.css'

const HomeScreen = () => {
    const {loginItem} = useSelector(state => state.loginItem)
    const dispatch=useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading,products,size,sort,items,filteredItems}=productList

    useEffect(()=>{
       dispatch(productAction())
    },[dispatch])
 
    console.log('object',loginItem[0]);

   
    return (
        <>
        <Header />
        <div className="merhaba" style={{background:'rgb(20, 20, 20)',textAlign:'center',color:'white',fontSize:'30px',marginTop:'5px'}}>
          <span>merhaba</span> <strong>{loginItem[0]}</strong> <i class="far fa-smile"></i>
        </div>

        <Filtreleme/>
            

          <div className="row mt-5" > 

          {  loading ? (
              <Loading />
          ) :
              filteredItems.map(product=> (
              < Product product={product}/>
              ))
          }
          </div> 
  
            <Urunekle />
            
            <Footer />
        </>
    )
}

export default HomeScreen
