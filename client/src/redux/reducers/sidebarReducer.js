import { TYPES } from "../constants/globalType";


export const sidebarReducer = (state={sidebar:false},action) => {
    switch(action.type){
        case TYPES.SIDE_BAR :
            return{
               sidebar:action.payload
            }

          default:
              return state  
    }
}