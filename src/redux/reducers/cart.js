const initialState = {
    items:{},
    totalPrice: 0,
    totalCount: 0
}
const cart = (state = initialState, action)=>{
    switch (action.type) {
        case 'ADD_TO_CART':
        const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);
        const currentItem = 
            !state.items[action.payload.uniq] ? [action.payload] : [...state.items[action.payload.uniq].items, action.payload]
        
        const actualItems = {
            ...state.items,
            [action.payload.uniq]: {
                items: currentItem,
                totalPrice: getTotalPrice(currentItem)

              },
        }
        console.log(actualItems)    
        const res = {
                ...state,
                items: actualItems,
                totalPrice: Object.values(actualItems).reduce((sum, obj) => obj.totalPrice + sum, 0)

            }
        console.log(res)
            return res
    
        default:
            return state
    }
}

export default cart