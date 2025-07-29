// AboutPage.tsx

import React from 'react';
import img from '../assets/images/nav.jpg'; // Placeholder image

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-16 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">About Booker</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Booker is your trusted partner in discovering and booking high-quality hotels — quickly, confidently, and all in one place.
        </p>
      </div>

      {/* Our Mission */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2">
          <img
             src= {img}
            alt="Hotel booking platform"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Our Mission</h2>
          <p className="mb-4">
            We built Booker to take the stress out of hotel reservations. Whether you're traveling for work, vacation, or a last-minute escape, we're here to help you find your perfect stay.
          </p>
          <p>
            With an easy-to-use interface, clear pricing, and smart recommendations, Booker puts the right hotel options at your fingertips.
          </p>
        </div>
         <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Our Vision</h2>
          <p className="mb-4">
            To become the most trusted and intuitive hotel booking platform, empowering travelers worldwide to discover and reserve accommodations effortlessly—anytime, anywhere.


          </p>
          <p>
            We envision a future where every traveler can book with confidence, knowing they have access to the best options tailored to their needs.     
          </p>
        </div>
      </div>

      {/* Why Choose Booker */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-900">Why Choose Booker?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold mb-2">Tailored Search</h3>
            <p>
              We personalize your hotel results using smart filters and travel data — making it easy to find the right fit for your needs.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold mb-2">Verified Listings</h3>
            <p>
              Only quality-checked hotels make it onto Booker. You can trust what you see — backed by real reviews and up-to-date details.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold mb-2">Effortless Booking</h3>
            <p>
              Booking your stay is fast, safe, and works smoothly across all your devices — just the way travel planning should be.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/explore"
          className="btn btn-primary btn-wide text-white bg-amber-900 hover:bg-amber-800 transition"
        >
          Start Your Journey
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
