import React from 'react';
import BannerPng from '../../assets/banner-bg.jpg';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FadeLeft } from '../../utility/animation';
import { motion } from 'framer-motion';

const bgStyle = {
  backgroundImage: `url(${BannerPng})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Banner3 = () => {
  return (
    <section className="py-10">
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 
        py-16 px-6 md:px-12 
        rounded-3xl 
        bg-black/40 backdrop-blur-sm"
      >
        {/* Empty Left Side */}
        <div></div>

        {/* Banner Content */}
        <div className="flex flex-col justify-center text-white">
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">

            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Brand Info
            </motion.h1>

            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm md:text-base"
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

            {/* Button */}
            <motion.div
              variants={FadeLeft(0.9)}
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

export default Banner3;
