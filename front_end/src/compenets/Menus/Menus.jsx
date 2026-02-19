import React from 'react';
import Fruit1 from '../../assets/fruits/apple.png'
import Fruit3 from '../../assets/fruits/avocado.png'
import Fruit4 from '../../assets/fruits/cherry.png'
import Fruit2 from '../../assets/fruits/orange.png'
//import FruitOne from '../../assets/fruits/apple.png'

import {motion} from 'framer-motion';
import {FadeLeft} from '../../utility/animation';


const MenuData = [
  { id: 1, title: 'Red Apple', link:Fruit1 ,price: '100.00' ,delay:0.3},
  { id: 2, title: 'Fresh Oranges', link:Fruit2 , price: '50.00',delay:0.6 },
  { id: 3, title: 'Big Avocado', link: Fruit3, price: '75.00',delay:0.9 },
  { id: 4, title: 'Sweet Cherries', link:Fruit4, price: '100.00' ,delay:1.2},
];

const Menus = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.h1 
        initial={{opacity:0 , x:200}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1,delay:0.5}}


        className="text-3xl font-bold text-left pb-10 uppercase text-gray-800">
          Our Menu
        </motion.h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MenuData.map((menu) => (
            <motion.div 
            variants={FadeLeft(menu.delay)}
              initial='hidden'
              whileInView={'visible'}
              key={menu.id} 
              className="bg-white rounded-3xl shadow-[0_0_22px_rgba(0,0,0,0.15)] p-6 flex flex-col items-center justify-center gap-3 hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              {/* Placeholder for Fruit Image */}
              <div 
              

              className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-3xl">
                { <img src={menu.link}/>}
                
              </div>

              {/* Text Info */}
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-700">{menu.title}</h2>
                <p className="text-lg font-bold text-secondary text-orange-500">
                  Rs {menu.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;