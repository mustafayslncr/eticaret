import { TYPES } from "../constants/globalType"
import axios from "axios"


export const detailAction = (productId) => async (dispatch) =>{
    dispatch({
        type:TYPES.PRODUCT_DETAIL_REQUEST,payload:productId
    })
    const {data}=await axios.get(`/api/products/${productId}`)
    dispatch({
        type:TYPES.PRODUCT_DETAIL_SUCCESS,payload:data
    })
}