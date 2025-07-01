import React, { useState } from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';

const OriginalHero = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    date: '',
    category: ''
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search data:', searchData);
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200)'
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center py-20">
          {/* Hero Content */}
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Join Local Sports
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Discover and book the best sports fields near you. Join a community of sports enthusiasts.
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  value={searchData.location}
                  onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#11C2A7] focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={searchData.date}
                  onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#11C2A7] focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              <div className="relative">
                <select
                  value={searchData.category}
                  onChange={(e) => setSearchData({...searchData, category: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#11C2A7] focus:border-transparent outline-none appearance-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Categories</option>
                  <option value="football">Football</option>
                  <option value="basketball">Basketball</option>
                  <option value="tennis">Tennis</option>
                  <option value="cricket">Cricket</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="bg-[#11C2A7] text-white py-3 px-6 rounded-lg hover:bg-[#0EA58D] transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>
            
            <div className="text-center">
              <button
                type="button"
                className="text-[#11C2A7] hover:text-[#0EA58D] font-medium text-sm"
              >
                Select location
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OriginalHero;