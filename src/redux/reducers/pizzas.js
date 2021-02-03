const initialState ={
    items: [],
    groupedItems:[],
    isLoaded: false
}

const pizzas = (state = initialState, action)=>{
    switch(action.type){
        case 'SET_PIZZAS': 
        return {
            ...state, 
            items: action.payload,
            groupedItems: action.payload,
            isLoaded: true
        }
        case 'SET_LOADING': 
        return {
            ...state, 
            isLoaded: action.payload
        }
        default: 
        return state
    }

    return state
}

export default pizzas