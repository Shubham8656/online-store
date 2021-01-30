// import Action from '../Action/Action';

const initialState = {
    cart:[],
    length:0,
    isLoggedIn:false
 };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
       case 'ADD_TO_CART': return{
            ...state,
            cart:action.payload,
            length:state.cart.length
        }

        case 'REMOVE_FROM_CART': return{
         ...state,
         cart:action.payload,
         length:state.cart.length
       }

        case 'IS_LOGGED_IN': return{
            ...state,
            isLoggedIn: action.payload
        }
    
       default:
          return state;
    }
 }
 export default rootReducer;