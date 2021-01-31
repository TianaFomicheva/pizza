const initialState = {
    items:{},
    totalPrice: 0,
    totalCount: 0
}
export const cart = (state = initialState, action)=>{
    switch (action.type) {
        case 'ADD_TO_CART':
            
            return{
                ...state
            }
    
        default:
            return state
    }
}