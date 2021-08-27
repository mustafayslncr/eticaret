import axios from "axios"
import { TYPES } from "../constants/globalType"


export const cardAction = (productId,qty) => async (dispatch) => {
    const { data } = await axios.get(`/api/products/${productId}`)
    dispatch({
        type:TYPES.CARD_ADD_ITEM,payload:{
            name:data.name,
            brand:data.brand,
            image:data.image,
            price:data.price,
            id:data._id,
            stock:data.stock,
            qty
        }
    })
}
export const deleteAction = (productId) => async (dispatch) => {
    
    dispatch({
        type:TYPES.CARD_REMOVE_ITEM,payload:productId
    })
}