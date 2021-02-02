import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../components/CartItem'

function Cart() {
  const { totalCount, totalPrice, items } = useSelector(({ cart }) => cart)
    return (
        <div className="container container--cart">
          {totalCount ?

          // Object.values(items).map(item=>console.log(item['items']))
          Object.values(items).map((item)=>(<CartItem name={item['items'][0].name} size={item['items'][0].size} key={item['items'][0]} totalCount={item['items'].length} totalPrice={item.totalPrice}/>))
         
          :(
        <div className="cart cart--empty">
          <h2>Корзина пустая <icon>😕</icon></h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.<br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src="/img/empty-cart.png" alt="Empty cart" />
         
<Link to="/">
          <button className="button button--black">
            <span>Вернуться назад</span>
          </button>
          </Link>
        </div>
        )}



      </div>
    )
}

export default Cart
