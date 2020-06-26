import React from 'react';

const Order = ({ pizza }) => {
  return (
    <div className="container order">
      <h2>Спасибо за ваш заказ :)</h2>
      <p>Вы заказали{pizza.base} пиццу с:</p>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </div>
  )
}

export default Order;