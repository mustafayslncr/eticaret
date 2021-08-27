import { createStore,applyMiddleware,compose,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import loginItem from './reducers/loginReducer'
import { productReducer } from './reducers/productReducer'
import { detailReducer } from './reducers/detailReducer'
import { cardReducer } from './reducers/cardReducer'
import { sidebarReducer } from './reducers/sidebarReducer'
import { adminReducer } from './reducers/adminReducer'

const initialState = {
    
}

 const reducer = combineReducers({
    loginItem,
    productList:productReducer,
    detailList:detailReducer,
    cardList: cardReducer,
    sidebarList: sidebarReducer,
    adminList: adminReducer    
})

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))

export default store