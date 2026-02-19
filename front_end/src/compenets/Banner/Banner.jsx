import React from 'react';
import BannerPng from '../../assets/banner-bg.jpg'
import { IoBagHandleOutline } from 'react-icons/io5'
import{FadeUp} from '../../utility/animation' 

const Banner = () => {
    return <>
        <section>
            <div className='container grid grid-cols-1 md:grid-cols-2
            space-y-6 md:space-y-0'>
                {/*Banner Image */}
                <div>
                    <img src={BannerPng} alt='' className='w-[300px]
                md:max-w-[400px] h-full object-cover'/>
                </div>
                <div>
                    <div className=''>
                        <h1>Brand Info</h1>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam,
                            quis nostrud exercitation
                            ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua
                        </p>
                        {/*Button Section */}
                        {/* Button Placeholder */}
                        <motion.div
                            variants={FadeUp(1.5)}
                            initial='hidden'
                            animate='visible'
                            className='flex justify-center md:justify-start'>
                            <button className='primary-btn flex  items-center gap-2'>
                                <span>
                                    <IoBagHandleOutline />
                                </span>Learn more</button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>



    </>;
}

export default Banner;