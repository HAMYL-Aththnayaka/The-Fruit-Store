import React from 'react';
import Navbar from './compenets/Navbar/navbar';
import Hero from './compenets/Hero/Hero'
import Menus from './compenets/Menus/Menus'


const App= ()=><>
  <main className='overflow-x-hidden'>
    <Navbar />
    <Hero/>
    <Menus/>
  </main>
</>

export default App;