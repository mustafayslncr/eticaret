import { TYPES } from "../constants/globalType"
import axios from 'axios'

export const productAction = () => async (dispatch) => {
    dispatch({
        type:TYPES.PRODUCT_LIST_REQUEST
    })
    const {data}=await axios.get('/api/products')
    dispatch({
        type:TYPES.PRODUCT_LIST_SUCCESS,payload:data
    })
}

export const filterProducts = (products,size) => (dispatch) => {
    dispatch({
        type:TYPES.FILTER_PRODUCTS_SIZE,payload:{
            size:size,
            items:size === '' ?  products : products.filter(x=>x.brand.indexOf(size) >= 0)
        }
    })
}

export const sortProducts = (filteredProducts,sort) => (dispatch) => {
    const sortedProducts = filteredProducts.slice()
    if(sort === 'DEFAULT'){
        sortedProducts.sort((a,b)=>(a._id > b._id ? 1 : -1 ))

    }else{
        sortedProducts.sort((a,b) => sort === 'LOW' ? a.price > b.price ? 1 : -1 : a.price > b.price ? -1 : 1)
    }
    dispatch({
        type:TYPES.ORDER_PRODUCTS_PRICE,payload:{
            sort:sort,
            items:sortedProducts
        }
    })
}