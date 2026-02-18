import React from 'react';




const MenuData = [
  { id: 1, title: 'Red Apple', link: '/', price: '100.00' },
  { id: 2, title: 'Fresh Oranges', link: '/', price: '50.00' },
  { id: 3, title: 'Big Avocado', link: '/', price: '75.00' },
  { id: 4, title: 'Sweet Cherries', link: '/', price: '100.00' },
];

const Menus = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h1 className="text-3xl font-bold text-left pb-10 uppercase text-gray-800">
          Our Menu
        </h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MenuData.map((menu) => (
            <div 
              key={menu.id} 
              className="bg-white rounded-3xl shadow-[0_0_22px_rgba(0,0,0,0.15)] p-6 flex flex-col items-center justify-center gap-3 hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              {/* Placeholder for Fruit Image */}
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-3xl">
                {menu.id === 1 && "🍎"}
                {menu.id === 2 && "🍊"}
                {menu.id === 3 && "🥑"}
                {menu.id === 4 && "🍒"}
              </div>

              {/* Text Info */}
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-700">{menu.title}</h2>
                <p className="text-lg font-bold text-secondary text-orange-500">
                  ${menu.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;