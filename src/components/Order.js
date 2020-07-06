import React from 'react';
import {motion} from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
       delay: 0.5,
       damping: 8,
       when: "beforeChildren",
       staggerChildren: 0.4
    }
  }
}

 const childVariants = {
   hidden: {
     opacity: 0
   },
   visible: {
     opacity: 1
   }
 }

const Order = ({ pizza }) => {
  return (
    <motion.div className="container order"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    >
      <h2>Спасибо за ваш заказ :)</h2>
      <motion.p variants={childVariants}>Вы заказали{pizza.base} пиццу с:</motion.p>
      <motion.div variants={childVariants}>
      {pizza.toppings.map(topping => <motion.div key={topping}>{topping}</motion.div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;