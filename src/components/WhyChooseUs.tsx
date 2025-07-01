import React from 'react';
import { CheckCircle, Shield, DollarSign, Smartphone } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Smartphone,
      title: 'Easy Booking',
      description: 'Book your field in just a few taps. Our streamlined process makes reservations effortless.',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      icon: Shield,
      title: 'Verified Fields',
      description: 'All fields are personally verified by our team to ensure quality and safety standards.',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    },
    {
      icon: DollarSign,
      title: 'Affordable Rates',
      description: 'Competitive pricing with transparent fees. No hidden charges or surprise costs.',
      color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
    },
    {
      icon: CheckCircle,
      title: 'Seamless Payment',
      description: 'Secure payment integration with mobile money, cards, and instant confirmations.',
      color: 'bg-[#11C2A7]/10 dark:bg-[#11C2A7]/20 text-[#11C2A7]'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2C2C2C] dark:text-white mb-4">
            Why Choose FindMyField?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're committed to making sports accessible to everyone with our reliable platform and quality service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className={`w-20 h-20 ${benefit.color} rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                  <benefit.icon className="h-10 w-10" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-[#2C2C2C] dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-[#11C2A7] to-[#0EA58D] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-lg opacity-90">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Secure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;