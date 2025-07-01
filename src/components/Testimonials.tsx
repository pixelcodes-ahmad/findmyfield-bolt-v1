import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'David Kimani',
      role: 'Football Team Captain',
      location: 'Nairobi',
      rating: 5,
      text: 'FindMyField made organizing our weekly matches so much easier. The booking process is seamless and the fields are always in great condition.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Sarah Wanjiku',
      role: 'Basketball Coach',
      location: 'Mombasa',
      rating: 5,
      text: 'As a coach, I need reliable courts for training. FindMyField consistently delivers quality venues at fair prices. Highly recommended!',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Michael Ochieng',
      role: 'Tennis Enthusiast',
      location: 'Kisumu',
      rating: 5,
      text: 'The variety of courts available is impressive. I can always find a court that fits my schedule and budget. Great platform!',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 4,
      name: 'Grace Muthoni',
      role: 'Sports Event Organizer',
      location: 'Nakuru',
      rating: 5,
      text: 'Organizing sports events is now stress-free thanks to FindMyField. The booking system is reliable and customer support is excellent.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 5,
      name: 'James Mutua',
      role: 'Field Owner',
      location: 'Thika',
      rating: 5,
      text: 'Since listing my field on FindMyField, my bookings have increased by 300%. The platform brings me consistent customers.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 6,
      name: 'Mary Akinyi',
      role: 'Volleyball Player',
      location: 'Eldoret',
      rating: 5,
      text: 'The mobile app makes it so convenient to book courts on the go. I can secure a court in minutes, even during peak hours.',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2C2C2C] dark:text-white mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of happy players and field owners who trust FindMyField for their sports needs.
          </p>
        </div>

        {/* Desktop View - 3 Cards */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={testimonial.id} className={`bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${index === 1 ? 'scale-105 ring-2 ring-[#11C2A7]/20' : ''}`}>
                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-[#11C2A7] mb-4" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#2C2C2C] dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Single Card */}
        <div className="md:hidden">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg mb-8">
            <div className="relative mb-6">
              <Quote className="h-8 w-8 text-[#11C2A7] mb-4" />
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                "{testimonials[currentIndex].text}"
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-[#2C2C2C] dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                </p>
              </div>
              <div className="flex">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-200 text-[#11C2A7] hover:bg-[#11C2A7] hover:text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-[#11C2A7]' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-200 text-[#11C2A7] hover:bg-[#11C2A7] hover:text-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Overall Stats */}
        <div className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#11C2A7] mb-2">4.9★</div>
              <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#11C2A7] mb-2">10K+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#11C2A7] mb-2">50K+</div>
              <div className="text-gray-600 dark:text-gray-400">Bookings Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#11C2A7] mb-2">99%</div>
              <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;