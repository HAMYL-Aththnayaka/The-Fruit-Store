import React from 'react';
import BannerPng from '../../assets/banner-bg.jpg';
import fruitPlate from '../../assets/fruit-plate2.png';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FadeUp } from '../../utility/animation';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className='bg-secondary/10'>
      <div className="container grid grid-cols-1 md:grid-cols-2 py-14 gap-6 md:gap-0">

        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={BannerPng}
            alt="Banner"
            className="w-[300px] md:max-w-[400px] h-full object-cover"
          />
        </div>

        {/* Banner Content */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">

            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Brand Info
            </motion.h1>

            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
              Ut enim ad minim veniam,
              quis nostrud exercitation
              ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </motion.p>

            <motion.p
              variants={FadeUp(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </motion.p>

            {/* Button Section */}
            <motion.div
              variants={FadeUp(1.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2">
                <IoBagHandleOutline />
                Learn More
              </button>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
