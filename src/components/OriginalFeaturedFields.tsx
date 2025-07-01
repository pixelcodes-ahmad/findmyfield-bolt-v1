import React from 'react';
import { Star, MapPin, Eye } from 'lucide-react';

const OriginalFeaturedFields = () => {
  const fields = [
    {
      id: 1,
      name: 'STAnfield',
      location: 'Nairobi West, Nairobi County, Coast, Kenya',
      rating: 4.5,
      price: 'KSH 2,500 - 5,000',
      image: 'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Available Now',
      statusColor: 'bg-green-500'
    },
    {
      id: 2,
      name: 'STAnsario',
      location: 'Karen Road, Nairobi County, Nairobi County, Coast, Kenya',
      rating: 4.8,
      price: 'KSH 3,000 - 6,000',
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Available Now',
      statusColor: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Start',
      location: 'Nairobi West, Nairobi County, Nairobi County, Coast, Kenya',
      rating: 4.6,
      price: 'KSH 2,000 - 4,500',
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Booking',
      statusColor: 'bg-orange-500'
    },
    {
      id: 4,
      name: 'Nyali stadium',
      location: 'Karen Road, Nairobi County, Nairobi County, Coast, Kenya',
      rating: 4.7,
      price: 'KSH 3,500 - 7,000',
      image: 'https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Available Now',
      statusColor: 'bg-green-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2C2C2C] dark:text-white mb-4">
            Featured Fields
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Promoted this week</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {fields.map((field) => (
            <div key={field.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative">
                <img
                  src={field.image}
                  alt={field.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 ${field.statusColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {field.status}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full">
                  <Eye className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#11C2A7] font-medium">Football</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-[#2C2C2C] dark:text-white">
                      {field.rating}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-[#2C2C2C] dark:text-white mb-2 group-hover:text-[#11C2A7] transition-colors">
                  {field.name}
                </h3>
                
                <div className="flex items-start text-gray-600 dark:text-gray-400 mb-3">
                  <MapPin className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                  <span className="text-sm line-clamp-2">{field.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Book by the hour</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">From 1 hour available</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#2C2C2C] dark:text-white">{field.price}</span>
                  <button className="text-[#11C2A7] hover:text-[#0EA58D] font-medium text-sm">
                    View details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="text-[#11C2A7] hover:text-[#0EA58D] font-medium">
            View all fields →
          </button>
        </div>
      </div>
    </section>
  );
};

export default OriginalFeaturedFields;