import { TYPES } from "../constants/globalType"


export const adminAction  = (avatar,marka,kategori,fiyat) => (dispatch) => {
    dispatch({
        type:TYPES.ADMIN_ADD_PRODUCT,payload:{
            avatar:avatar,
            marka:marka,
            kategori:kategori,
            fiyat:fiyat
        }
    })
}