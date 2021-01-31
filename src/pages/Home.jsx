import React from 'react'
import PizzaBlock from '../components/PizzaBlock'
import axios from 'axios'


function Home() {
  const initialState = {
    
  }
    const [pizzas, setPizzas ] = React.useState(null);
 

    React.useEffect(()=>{axios.get(`/db.json`).then(({data})=>{setPizzas(data.pizzas)
    })
   
  },[])
    return (
        <div className="container">
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
