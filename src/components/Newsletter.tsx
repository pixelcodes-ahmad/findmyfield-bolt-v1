import React, { useState } from 'react';
import { Mail, Gift, Bell, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1500);
  };

  const benefits = [
    {
      icon: Gift,
      text: 'Exclusive field discounts up to 30%'
    },
    {
      icon: Bell,
      text: 'Early access to new field listings'
    },
    {
      icon: Mail,
      text: 'Weekly sports tips and field recommendations'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#2C2C2C] to-gray-800 dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#11C2A7] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#11C2A7] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {!isSubscribed ? (
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#11C2A7] rounded-full mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Never Miss a Booking!
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join our community and get notified about the best field deals, new listings, and exclusive offers.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#11C2A7] rounded-full flex items-center justify-center">
                    <benefit.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white text-sm font-medium">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-10 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#11C2A7] focus:border-transparent outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#11C2A7] text-white px-8 py-4 rounded-lg hover:bg-[#0EA58D] transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    </div>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Join 15,000+ sports enthusiasts. Unsubscribe anytime.
              </p>
            </form>

            {/* Social Proof */}
            <div className="mt-10 flex items-center justify-center space-x-8 opacity-60">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">15K+</div>
                <div className="text-gray-400 text-sm">Subscribers</div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.8★</div>
                <div className="text-gray-400 text-sm">Newsletter Rating</div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Weekly</div>
                <div className="text-gray-400 text-sm">Updates</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6 animate-bounce">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome to the Team! 🎉
            </h2>
            <p className="text-xl text-gray-300 max-w-md mx-auto mb-8">
              Thanks for subscribing! Check your inbox for a special welcome offer.
            </p>
            <div className="bg-[#11C2A7] text-white px-6 py-3 rounded-lg inline-block font-semibold">
              🎁 30% OFF your first booking - Use code WELCOME30
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;