import axios from 'axios'

export const setLoaded = payload => ({
    type: 'SET_LOADING',
    payload
})

export const fetchPizzas = (category, sortBy) => (dispatch) => {

    dispatch(setLoaded(false))
    axios.get(`/db.json`).then(({ data }) => {
        
        const sortProp = (a, type) => {
            return (type === 'price') ? a['prices'][0] : a[type]
        }

        const sortByRule = (newarr, sortRule, order) => {
            return (order === 'asc') ? (newarr.sort((a, b) => sortProp(a, sortRule) > sortProp(b, sortRule) ? 1 : -1)) : (newarr.sort((a, b) => sortProp(a, sortRule) < sortProp(b, sortRule) ? 1 : -1))
        }


        dispatch(setPizzas({ pizzas: sortByRule(category ? data.pizzas.filter(item => item.category === category) : data.pizzas, sortBy.type, sortBy.order) }))

    })

}
export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})

