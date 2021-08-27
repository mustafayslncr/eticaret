import { TYPES } from "../constants/globalType";

const initialState = {
    avatar:[],
    marka:[],
    kategori:[],
    fiyat:[],
}

export const adminReducer = (state=initialState,action) => {
    switch(action.type){
        case TYPES.ADMIN_ADD_PRODUCT :
            return{
                ...state,
                avatar:[action.payload.avatar],
                marka:[action.payload.marka],
                kategori:[action.payload.kategori],
                fiyat:[action.payload.fiyat]
            }

            default:
                return state
    }
}