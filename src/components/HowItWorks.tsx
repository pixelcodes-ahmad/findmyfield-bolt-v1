import React from 'react';
import { Search, Eye, Calendar } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: 'Search Fields',
      description: 'Search fields by location & sport type to find the perfect match for your game.',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      id: 2,
      icon: Eye,
      title: 'Compare Options',
      description: 'Compare availability, prices, facilities and reviews to make the best choice.',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
    },
    {
      id: 3,
      icon: Calendar,
      title: 'Book & Play',
      description: 'Book instantly with secure payment and show up ready to play your best game.',
      color: 'bg-[#11C2A7]/10 dark:bg-[#11C2A7]/20 text-[#11C2A7]'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2C2C2C] dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Getting on the field has never been easier. Follow these simple steps to book your next game.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-[#11C2A7] to-[#0EA58D]"></div>
          
          {steps.map((step, index) => (
            <div key={step.id} className="text-center group">
              <div className="relative mb-6">
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#11C2A7] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.id}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-[#2C2C2C] dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#11C2A7] text-white px-8 py-4 rounded-lg hover:bg-[#0EA58D] transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Booking Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;