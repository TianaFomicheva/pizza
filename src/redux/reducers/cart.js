const initialState = {
    items:{},
    groupedItems: {},
    totalPrice: 0,
    totalCount: 0
}
const cart = (state = initialState, action)=>{
    switch (action.type) {
        case 'ADD_TO_CART':
        const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);
        const currentItems = 
            !state.items[action.payload.uniq] ? [action.payload] : [...state.items[action.payload.uniq].items, action.payload]
        
        const currentGroupedItems = 
            !state.groupedItems[action.payload.id] ? [action.payload] : [...state.groupedItems[action.payload.id].groupedItems, action.payload]
        
        const actualItems = {
            ...state.items,
            [action.payload.uniq]: {
                items: currentItems,
                totalPrice: getTotalPrice(currentItems)

              },
            
        }  
        const actualGroupedItems = {
            ...state.groupedItems,
            [action.payload.id]: {
                groupedItems: currentGroupedItems,
                totalPrice: getTotalPrice(currentGroupedItems),
                totalCount: currentGroupedItems.length

              },
            
        }  
        const res = {
                ...state,
                items: actualItems,
                groupedItems: actualGroupedItems,
                totalPrice: Object.values(actualItems).reduce((sum, obj) => obj.totalPrice + sum, 0),
                totalCount: Object.values(actualItems).reduce((sum, obj) => obj.items.length + sum, 0)

            }
        console.log(res)
            return res
    
        default:
            return state
    }
}

export default cart