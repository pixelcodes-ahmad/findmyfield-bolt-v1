import React, { useState } from 'react';
import { Search, MapPin, Calendar, Trophy } from 'lucide-react';

const Hero = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    date: '',
    sport: ''
  });

  const sportTypes = [
    'Football',
    'Basketball',
    'Tennis',
    'Cricket',
    'Rugby',
    'Volleyball'
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search data:', searchData);
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#2C2C2C] leading-tight">
                Book Your Next 
                <span className="text-[#11C2A7]"> Match</span> in 
                <span className="text-[#11C2A7]"> Seconds</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Find the perfect sports field near you. Quick, reliable, and affordable.
              </p>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location"
                    value={searchData.location}
                    onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#11C2A7] focus:border-transparent outline-none"
                  />
                </div>
                
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    value={searchData.date}
                    onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#11C2A7] focus:border-transparent outline-none"
                  />
                </div>
                
                <div className="relative">
                  <Trophy className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    value={searchData.sport}
                    onChange={(e) => setSearchData({...searchData, sport: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#11C2A7] focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option value="">Sport Type</option>
                    {sportTypes.map((sport) => (
                      <option key={sport} value={sport}>{sport}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#11C2A7] text-white py-3 px-6 rounded-lg hover:bg-[#0EA58D] transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Search className="h-5 w-5" />
                <span>Find a Field</span>
              </button>
            </form>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#11C2A7]">500+</div>
                <div className="text-gray-600">Fields Listed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#11C2A7]">10K+</div>
                <div className="text-gray-600">Happy Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#11C2A7]">25+</div>
                <div className="text-gray-600">Cities</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Football players on a field"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#11C2A7] rounded-full flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#2C2C2C]">Premium Fields</div>
                  <div className="text-sm text-gray-600">Verified & Quality</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#11C2A7] rounded-full flex items-center justify-center">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#2C2C2C]">Easy Booking</div>
                  <div className="text-sm text-gray-600">Book in seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;