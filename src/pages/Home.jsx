import React from 'react'
import PizzaBlock from '../components/PizzaBlock'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import SortPopup from '../components/SortPopup'
import Categories from '../components/Categories'
import {setSortBy} from '../redux/actions/filters'

function Home() {
  const dispatch = useDispatch()
  const categoryNames = ['Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']
  const sortItems = [{name: 'Популярности', type: 'rating', order: 'desc'}, {name: 'Цене', type: 'prices', order: 'asc'}, {name: 'Алфавиту', type: 'name', order: 'asc'}]
  
    const [pizzas, setPizzas ] = React.useState(null);
    const SelectByType =          React.useCallback((type)=>{
      alert(1)
        dispatch(setSortBy(type))
      },[])
    
 

    React.useEffect(()=>{axios.get(`/db.json`).then(({data})=>{setPizzas(data.pizzas)
    })
   
  },[])
    return (
        <div className="container">
           <div className="content__top">
           <Categories items={categoryNames}/>
             <SortPopup items={sortItems} onSelectByType={SelectByType} />
           </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
            {
      pizzas && (
        pizzas.map((obj)=><PizzaBlock key={obj.id} {...obj}/>)
      )
    }
            </div>
        </div>
    )
}

export default Home
