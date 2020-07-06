import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

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
       delay: 0.5
    }
  }
}

const nextVarians = {
  hidden: {
    x: '-100vw'
  },
  visible: {
    x: 0,
    transition: {type: 'spring', stiffness: 120}
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Классическая', 'Тонкая и хрустящая', 'Толстая корка'];

  return (
    <motion.div className="base container"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    >

      <h3>Шаг 1: выберите базу</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
            whileHover={{scale: 1.3, originX:0, color: '#f8e112'}}
            transition={{type: 'spring', stiffness:300}}>
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
         
          variants={nextVarians}
        >
          <Link to="/toppings">
            <motion.button
             whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)"
             }}>Далее</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;