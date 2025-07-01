import React from 'react';
import { PlusCircle, DollarSign, Users, TrendingUp } from 'lucide-react';

const FieldOwnersCTA = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Extra Income',
      description: 'Earn up to KSh 150,000/month from your unused field'
    },
    {
      icon: Users,
      title: 'Fill Empty Slots',
      description: 'Turn downtime into bookings with our active community'
    },
    {
      icon: TrendingUp,
      title: 'Growth Analytics',
      description: 'Track performance and optimize your field pricing'
    }
  ];

  return (
    <section id="list" className="py-20 bg-gradient-to-br from-[#11C2A7] to-[#0EA58D] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Own a Field? 
                <br />
                <span className="text-white/90">Earn by Listing It!</span>
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Join hundreds of field owners already earning extra income by listing their sports facilities on our platform.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-white/80">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white text-[#11C2A7] px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
                <span className="flex items-center justify-center space-x-2">
                  <PlusCircle className="h-5 w-5 group-hover:rotate-90 transition-transform duration-200" />
                  <span>List My Field</span>
                </span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#11C2A7] transition-all duration-200 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sports field owner"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Earnings Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">Monthly Earnings</div>
                    <div className="text-2xl font-bold text-[#11C2A7]">KSh 120,000</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">This Month</div>
                    <div className="text-lg font-semibold text-green-600">+24%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-white/80">Active Field Owners</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-white/80">Occupancy Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24hrs</div>
            <div className="text-white/80">Quick Approval</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">0%</div>
            <div className="text-white/80">Listing Fee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldOwnersCTA;