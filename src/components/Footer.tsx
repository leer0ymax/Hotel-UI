import React from 'react';
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Clock,
  Shield, // Keep if needed for other sections, but not directly in this footer
  Award, // Keep if needed for other sections, but not directly in this footer
  ArrowRight, // Keep if needed for other sections, but not directly in this footer
  Youtube, // For YouTube icon
  Linkedin, // For LinkedIn icon
  Search // For search icon in header if needed
} from 'lucide-react'; // Using lucide-react for icons
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray text-gray-300 relative overflow-hidden"> {/* Changed to black background */}
      {/* Top Bar with Social Icons */}
      <div className="bg-black py-3 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-black hover:text-blue-500 transition-colors"><FaFacebook size={20} /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-black hover:text-blue-400 transition-colors"><FaTwitter size={20} /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-black hover:text-pink-500 transition-colors"><FaInstagram size={20} /></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-black hover:text-red-600 transition-colors"><FaYoutube size={20} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-black hover:text-blue-700 transition-colors"><FaLinkedin size={20} /></a>
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12"> {/* Adjusted padding */}
          {/* Using flex for main columns to ensure horizontal layout on desktop */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8"> 
            {/*  Logo and Country Selector */}
            <div className="flex-shrink-0 w-full md:w-auto"> {/* Ensure it doesn't shrink unnecessarily */}
              <div className="flex items-center space-x-1 mb-4">
                <span className="text-3xl font-bold text-yellow">BOOKER</span> {/*  logo text */}
              </div>
              <div className="relative w-full max-w-[200px]"> {/* Country selector */}
                <select className="appearance-none bg-black-900 text-black p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full pr-10"> {/* Adjusted background */}
                  <option> Nairobi</option>
                  <option>Nakuru</option>
                  <option> Mombasa</option>
                  <option>Kisumu</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <h3 className="font-bold text-black mb-4 text-lg">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-black-400 hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#" className="text-black-400 hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-black-400 hover:text-blue-400 transition-colors">Services </a></li>
              </ul>
            </div>

            {/* Help Links */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <h3 className="font-bold text-black mb-4 text-lg">Help</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Learn how BOOKER works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms and conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"> Nearby hotels</a></li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="flex-grow"> {/* Allow newsletter to take remaining space */}
              <h3 className="font-bold text-black mb-4 text-lg">Get exclusive inspiration for your next stay – subscribe to our newsletter.</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-4 py-3 bg-gray-900 border-b-2 border-gray-700 text-black placeholder-gray-500 focus:outline-none focus:border-blue-500" // Adjusted background and border
                />
                <button className="bg-blue-600 text-red px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6"> {/* Adjusted border color for better contrast on black */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-gray-500 text-sm"> {/* Copyright text color */}
                © {new Date().getFullYear()} BOOKER. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm ">
                <a href="/terms" className="text-gray-500 hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
