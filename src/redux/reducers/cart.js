const initialState = {
    items:{},
    totalPrice: 0,
    totalCount: 0
}
const cart = (state = initialState, action)=>{
    switch (action.type) {
        case 'ADD_TO_CART':

        const currentItem = 
            !state.items[action.payload.uniq] ? [action.payload] : [...state.items[action.payload.uniq].items, action.payload]
        
        const actualItems = {
            ...state.items,
            [action.payload.uniq]: {
                items: currentItem,

              },
        }
        console.log(actualItems)    
            return{
                ...state,
                items: actualItems
            }
    
        default:
            return state
    }
}

export default cart