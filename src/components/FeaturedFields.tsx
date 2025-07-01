import React from 'react';
import { Star, MapPin, Clock, Users } from 'lucide-react';

const FeaturedFields = () => {
  const fields = [
    {
      id: 1,
      name: 'Nairobi Sports Complex',
      location: 'Westlands, Nairobi',
      price: 2500,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=600',
      sport: 'Football',
      capacity: '22 players',
      features: ['Floodlights', 'Parking', 'Changing Rooms']
    },
    {
      id: 2,
      name: 'Mombasa Beach Court',
      location: 'Nyali, Mombasa',
      price: 1800,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600',
      sport: 'Basketball',
      capacity: '10 players',
      features: ['Outdoor', 'Sea View', 'Equipment']
    },
    {
      id: 3,
      name: 'Kisumu Tennis Club',
      location: 'Milimani, Kisumu',
      price: 1200,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=600',
      sport: 'Tennis',
      capacity: '4 players',
      features: ['Clay Court', 'Coaching', 'Equipment']
    },
    {
      id: 4,
      name: 'Eldoret Athletics Track',
      location: 'Eldoret Town',
      price: 800,
      rating: 4.7,
      reviews: 92,
      image: 'https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&w=600',
      sport: 'Athletics',
      capacity: '50+ athletes',
      features: ['400m Track', 'Field Events', 'Timing']
    },
    {
      id: 5,
      name: 'Nakuru Rugby Grounds',
      location: 'Nakuru Town',
      price: 3000,
      rating: 4.5,
      reviews: 67,
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=600',
      sport: 'Rugby',
      capacity: '30 players',
      features: ['Full Pitch', 'Clubhouse', 'Medical']
    },
    {
      id: 6,
      name: 'Thika Volleyball Arena',
      location: 'Thika Town',
      price: 1500,
      rating: 4.4,
      reviews: 78,
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600',
      sport: 'Volleyball',
      capacity: '12 players',
      features: ['Indoor', 'Air Conditioning', 'Spectator Area']
    }
  ];

  return (
    <section id="fields" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4">
            Featured Fields
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our top-rated sports fields across Kenya. Quality venues trusted by thousands of players.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {fields.map((field) => (
            <div key={field.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative">
                <img
                  src={field.image}
                  alt={field.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#2C2C2C]">
                  {field.sport}
                </div>
                <div className="absolute top-4 right-4 bg-[#11C2A7] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  KSh {field.price}/hr
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2 group-hover:text-[#11C2A7] transition-colors">
                  {field.name}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{field.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-[#2C2C2C]">
                      {field.rating}
                    </span>
                    <span className="ml-1 text-sm text-gray-500">
                      ({field.reviews} reviews)
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{field.capacity}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {field.features.map((feature, index) => (
                    <span key={index} className="bg-[#11C2A7]/10 text-[#11C2A7] px-2 py-1 rounded-full text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-[#11C2A7] text-white py-3 rounded-lg hover:bg-[#0EA58D] transition-colors duration-200 font-semibold">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-white text-[#11C2A7] border-2 border-[#11C2A7] px-8 py-3 rounded-lg hover:bg-[#11C2A7] hover:text-white transition-all duration-200 font-semibold">
            View All Fields
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFields;