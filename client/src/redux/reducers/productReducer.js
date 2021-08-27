import { TYPES } from "../constants/globalType";


export const productReducer = (state={loading:true,products:[]},action) => {
  switch(action.type){
      case TYPES.PRODUCT_LIST_REQUEST :
          return{
              loading:true
          } 
      case TYPES.PRODUCT_LIST_SUCCESS :
          return{
              loading:false,
              products:action.payload,
              filteredItems:action.payload,
              items:action.payload
          }
      case TYPES.FILTER_PRODUCTS_SIZE :
          return{
              ...state,
              size:action.payload.size,
              filteredItems:action.payload.items
          }
        case TYPES.ORDER_PRODUCTS_PRICE :
            return{
                ...state,
                sort:action.payload.sort,
                filteredItems:action.payload.items
            }        


          default:
              return state

  }
}

