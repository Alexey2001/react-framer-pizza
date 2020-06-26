import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const Home = () => {
  return (
    <motion.div className="home container"
    initial={{opacity: 0}}
    animate={{ opacity: 1}}
    transition={{delay: 1, duration: 2}}
    >
      <h2 >
        Добро пожаловать в Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          animate={{}}
          >
          Создайте свою пиццу
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;