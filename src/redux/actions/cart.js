export const addItemToCart = (obj) => ({
    type: 'ADD_TO_CART',
    payload:{
        type: obj.type,
        size: obj.size,
        price: obj.price,
    }
})