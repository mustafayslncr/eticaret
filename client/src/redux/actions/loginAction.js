import { TYPES } from "../constants/globalType"


export const loginAction = (data) => (dispatch)=>{
    
// async-await kullanmadım
try{
    
   dispatch({
       type:TYPES.LOGIN, payload:data
   })
  
}catch(err){
    console.log(err);
}
 

}