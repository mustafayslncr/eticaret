import { TYPES } from "../constants/globalType";

const loginReducer=(state={loginItem:[]},action)=>{
    
    switch(action.type){
        case TYPES.LOGIN :
        return{
            
        
            loginItem:[action.payload],
        
        }
        
        default:
            return state
    }
}
export default loginReducer