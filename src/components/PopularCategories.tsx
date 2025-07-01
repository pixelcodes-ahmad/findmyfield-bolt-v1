import React from 'react';
import { ArrowRight } from 'lucide-react';

const PopularCategories = () => {
  const categories = [
    {
      name: 'Basket Ball',
      count: '11 Fields',
      icon: '🏀',
      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
    },
    {
      name: 'Football',
      count: '15 Fields',
      icon: '⚽',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    },
    {
      name: 'Padel',
      count: '8 Fields',
      icon: '🎾',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      name: 'View All',
      count: '50+ More',
      icon: '➕',
      color: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2C2C2C] dark:text-white mb-4">
            Popular Categories
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className={`${category.color} rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-sm opacity-75">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;