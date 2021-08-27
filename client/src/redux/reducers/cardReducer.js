import { TYPES } from "../constants/globalType";


export const cardReducer=(state={cartItems:[],message:''},action)=>{
    switch(action.type){
        case TYPES.CARD_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find(x=> x.id === item.id )
            if(existItem){
                return{
                    ...state,
                    cartItems:state.cartItems.map(x=> x.id === existItem.id ? item : x),
                    
                }

            }else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,item],
                    message:'Ürün Sepete Eklenmiştir.'
                }
            }
            
                case TYPES.CARD_REMOVE_ITEM:
                    return{
                        ...state,cartItems:state.cartItems.filter(x=>x.id !== action.payload)
                    }
    
            default:
                return state
    }
}