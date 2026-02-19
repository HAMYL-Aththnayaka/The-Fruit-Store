import React from 'react';
import Navbar from './compenets/Navbar/navbar';
import Hero from './compenets/Hero/Hero'
import Menus from './compenets/Menus/Menus'
import Banner  from './compenets/Banner/Banner.jsx'
import Banner2  from './compenets/Banner/Banner2.jsx'

const App= ()=><>
  <main className='overflow-x-hidden'>
    <Navbar />
    <Hero/>
    <Menus/>
    <Banner/>
    <Banner2/>
  </main>
</>

export default App;