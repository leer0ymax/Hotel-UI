import React, { useState, useEffect, useMemo } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { hotelApi } from '../features/hotels/hotelAPI';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch real data for stats
  const { data: hotels = [] } = hotelApi.useGetAllHotelsQuery();

  // Calculate real stats
  const stats = useMemo(() => {
    const hotelCount = hotels.length;
    const avgRating = hotels.length > 0
      ? Math.round((hotels.reduce((sum, hotel) => sum + hotel.rating, 0) / hotels.length) * 10) / 10
      : 4.9;
    
    return {
      travelers: '50K+', // This would typically come from booking/user data
      hotels: hotelCount > 0 ? `${hotelCount}+` : '500+',
      rating: avgRating,
      support: '24/7'
    };
  }, [hotels]);

  const testimonials = [
    {
      id: 1,
      name: "Bruno Mwas",
      location: "Nairobi, Kenya",
      rating: 5,
      text: "Booker made our honeymoon unforgettable! The hotel was stunning, the service impeccable, and the local experiences were top-notch. We felt like VIPs throughout our stay.",
      // image: "",
      trip: "Honeymoon in Malindi"
    },
    {
      id: 2,
      name: "Chris Nolan",
      location: "Nairobi, Kenya",
      rating: 5,
      text: "As a frequent business traveler, I need reliability. Booker's instant booking and 24/7 support have saved me countless times. The mobile app is fantastic for last-minute changes.",
      // image: "",
      trip: "Business Travel"
    },
    {
      id: 3,
      name: "Emma Williams",
      location: "Nakuru, Kenya",
      rating: 5,
      text: "Booker helped us find the perfect family-friendly hotel in Mombasa. The kids loved the pool, and we enjoyed the local tours. Everything was seamless from booking to check-out.",
      // image: "",
      trip: " Safari in Mombasa"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Kisumu, Kenya",
      rating: 5,
      text: "I was skeptical about online hotel booking, but Booker changed my mind. The user reviews were spot on, and the hotel exceeded my expectations. I will definitely use it again.",
      // image: "",
      trip: "Weekend Getaway in Kisumu"
    },
   
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            What Our Clients Say
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Testimonials from 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Satisfied clients
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            "Discover unforgettable stays just like thousands of happy travelers
             who trust us for handpicked accommodations and outstanding service."
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-blue rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Quote Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Rating */}
                <div className="flex justify-center lg:justify-start items-center space-x-1 mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 font-medium">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  {/* <img
                   
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-amber-200"
                  /> */}
                  <div className="text-center sm:text-left">
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonials[currentIndex].location}
                    </div>
                    <div className="text-amber-600 text-sm font-medium">
                      {testimonials[currentIndex].trip}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-50 transition-all duration-300 border border-gray-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-50 transition-all duration-300 border border-gray-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-amber-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">{stats.travelers}</div>
            <div className="text-gray-600 font-medium">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">{stats.hotels}</div>
            <div className="text-gray-600 font-medium">Partner Hotels</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">{stats.rating}</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">{stats.support}</div>
            <div className="text-gray-600 font-medium">Customer Support</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;