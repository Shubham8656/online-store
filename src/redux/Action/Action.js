export const addToCart=(item)=>{
    return{
        type:'ADD_TO_CART',
        payload:item
    }
}

export const RemoveFromCart=(item)=>{
    return{
        type:'REMOVE_FROM_CART',
        payload:item
    }
}

export const changeLogging=(payload)=>{
    console.log('in action')
    return {
        type: 'IS_LOGGED_IN',
        payload: payload
    }
}