import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['Классическая', 'Тонкая и хрустящая', 'Толстая корка'];

  return (
    <motion.div className="base container"
    initial={{x: '100vw'}}
    animate={{x: 0}}
    type={{type: 'spring', delay: 0.5}}>

      <h3>Шаг 1: выберите базу</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          initial={{x: '-100vw'}}
          animate={{x: -15}}
          transition={{type: 'spring', stiffness: 120}}
        >
          <Link to="/toppings">
            <button>Далее</button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;