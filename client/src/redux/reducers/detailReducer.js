import { TYPES } from "../constants/globalType";

export const detailReducer = (state={product:{},loading:true},action) =>{
   switch(action.type){
       case TYPES.PRODUCT_DETAIL_REQUEST:
           return {
               loading:true
           }
        case TYPES.PRODUCT_DETAIL_SUCCESS:
            return{
                loading:false,
                product:action.payload
            }
                default:
                    return state

   }
}