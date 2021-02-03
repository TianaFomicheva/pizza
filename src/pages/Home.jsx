import React from 'react'
import PizzaBlock from '../components/PizzaBlock'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import SortPopup from '../components/SortPopup'
import Categories from '../components/Categories'
import {setSortBy, setCategory} from '../redux/actions/filters'
import {addItemToCart} from '../redux/actions/cart'
import { fetchPizzas } from '../redux/actions/pizzas';

function Home() {
  const categoryNames = ['Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [{name:'популярности', type:'rating', order: 'desc'},{name:'цене', type:'price', order: 'asc'},{name:'по алфавиту', type:'name', order: 'asc'}]

  const dispatch = useDispatch()
  const items = useSelector(({pizzas})=> pizzas.items)
  const cartItems = useSelector(({cart})=> cart.items)
  const onSelectCategory = React.useCallback(index=>{dispatch(setCategory(index))},[])
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy} = useSelector(({ filters }) => filters);
  const {groupedItems} = useSelector(({cart})=>cart)
  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);
  
 const sendToCart = (obj)=>{
   
   dispatch(addItemToCart(obj))
 }
 const onSelectSortType = React.useCallback((type) => {
  dispatch(setSortBy(type));
}, []) 



    return (
        <div className="container">
           <div className="content__top">
           <Categories activeCategory={category}  items={categoryNames} onClickCategory={onSelectCategory}/>
             <SortPopup items={sortItems} onClickSortType={onSelectSortType} />
           </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
            {
      items.pizzas && (
        items.pizzas.map((obj)=><PizzaBlock key={obj.id} {...obj} onSendToCart={sendToCart}  addedCount={groupedItems[obj.id] && groupedItems[obj.id].groupedItems.length}/>)
      )
    }
            </div>
        </div>
    )
}

export default Home
