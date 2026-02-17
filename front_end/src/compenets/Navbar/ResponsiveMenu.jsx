import React from 'react'
import { motion,AnimatePresence} from 'framer-motion'


const ResponsiveMenu =({open})=>{
    return (
        <AnimatePresence mode='wait'>
            {
                open &&(
                    <div className ='absolute top-0 left-0 w-full
                    h-screen z-20'>
                        <motion.div
                        initial={{opacity:0 ,y:-100}}
                        animate={{opacity:1,y:0}}
                        className='text-xl font-semibold uppercase
                        bg-emerald-200 text-white py-10 m-6 rounded-3xl'>
                            <ul className='flex flex-col items-center gap-10'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Service</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                )
            }
            </AnimatePresence>
    );
}
export default ResponsiveMenu