import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../components/CartItem'

function Cart() {
  const { totalCount, totalPrice, items } = useSelector(({ cart }) => cart)
  return (
    <div className="content">
    <div className="container container--cart">
      {totalCount ? (
        <div  className="cart">
          <div className="content__items">
            { Object.values(items).map(item => <CartItem name={item['items'][0].name} size={item['items'][0].size} imageUrl={item['items'][0].imageUrl} key={item['items'][0].uniq} totalCount={item['items'].length} totalPrice={item.totalPrice} />)}
          </div>
          
          <div className="cart__bottom">
                              <div className="cart__bottom-details">
                                  <span> Всего пицц: <b>{totalCount} шт.</b> </span>
                                  <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
                              </div>
                              <div className="cart__bottom-buttons">
                                  <a href="/" className="button button--outline button--add go-back-btn">
                                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                      </svg>

                                      <Link to="/">
                                          <span>Вернуться назад</span>
                                      </Link>
                                  </a>
                                  <div className="button pay-btn">
                                      <span>Оплатить сейчас</span>
                                  </div>
                              </div>
                          </div>
          
          </div>
        ) : (
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
    </div>
  )
}

export default Cart
