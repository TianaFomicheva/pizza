export const addItemToCart = (obj) => ({
    type: 'ADD_TO_CART',
    payload: obj
    
})

export const plusCartItem = (id, uniq) => ({
    type: 'PLUS_CART_ITEM',
    payload: {
        id: id,
        uniq: uniq
    }
  });

export const minusCartItem = (id, uniq) => ({
    type: 'MINUS_CART_ITEM',
    payload: {
        id: id,
        uniq: uniq
    }
  });