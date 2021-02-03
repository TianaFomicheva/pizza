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
        
            return res
            
              case 'PLUS_CART_ITEM': {
                const newObjItems = [
                  ...state.items[action.payload.uniq].items,
                  state.items[action.payload.uniq].items[0],
                ];
               
                const newItems = {
                  ...state.items,
                  [action.payload.uniq]: {
                    items: newObjItems,
                    totalPrice: Object.values(newObjItems).reduce((sum, obj) => obj.price + sum, 0),
                  },
                };

                const newObjGroupedItems = [
                  ...state.groupedItems[action.payload.id].groupedItems,
                  state.groupedItems[action.payload.id].groupedItems[0],
                ];
               
                console.log(newObjGroupedItems)
                const newGroupedItems = {
                  ...state.groupedItems,
                  [action.payload.id]: {
                    groupedItems: newObjGroupedItems,
                    totalPrice: Object.values(newObjItems).reduce((sum, obj) => obj.price + sum, 0),
                  },
                };
          
                
          
                return {
                  ...state,
                  items: newItems,
                  groupedItems: newGroupedItems,
                  totalPrice: Object.values(newItems).reduce((sum, obj) => obj.totalPrice + sum, 0),
                  totalCount: Object.values(newItems).reduce((sum, obj) => obj.items.length + sum, 0)

                };
              }
              case 'MINUS_CART_ITEM': {
                const oldItems = state.items[action.payload.uniq].items;
                const newObjItems =
                  oldItems.length > 1 ? state.items[action.payload.uniq].items.slice(1) : oldItems;
                const newItems = {
                  ...state.items,
                  [action.payload.uniq]: {
                    items: newObjItems,
                    totalPrice: Object.values(newObjItems).reduce((sum, obj) => obj.price + sum, 0),
                  },
                };
          
                const oldGroupedItems = state.groupedItems[action.payload.id].groupedItems;
                const newObjGroupedItems =
                  oldGroupedItems.length > 1 ? state.groupedItems[action.payload.id].groupedItems.slice(1) : oldGroupedItems;
                const newGroupedItems = {
                  ...state.groupedItems,
                  [action.payload.id]: {
                    groupedItems: newObjGroupedItems,
                    totalPrice: Object.values(newObjGroupedItems).reduce((sum, obj) => obj.price + sum, 0),
                  },
                };
          
                
          
                return {
                  ...state,
                  items: newItems,
                  groupedItems: newGroupedItems, 
                  totalCount: Object.values(newItems).reduce((sum, obj) => obj.items.length + sum, 0),
                  totalPrice: Object.values(newItems).reduce((sum, obj) => obj.totalPrice + sum, 0),
                };
              }
        default:
            return state
    }
}

export default cart