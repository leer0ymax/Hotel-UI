import React, { useState, useMemo } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react'; // Keeping lucide-react for consistency
import { FaHeart,  } from "react-icons/fa6"; // For heart, share, map marker, and close icons
import { IoIosArrowDown } from "react-icons/io"; // For dropdown arrows
import { GoStarFill } from "react-icons/go"; // For star rating
import { useNavigate } from 'react-router-dom';
import { FaLocationArrow, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { roomsApi } from '../features/rooms/roomApi';
import { hotelApi } from '../features/hotels/hotelAPI';
import img1 from '../assets/images/room1.jpg';
import img2 from '../assets/images/homepage.jpg';
import img3 from '../assets/images/room3.jpg';
import img4 from '../assets/images/hero-main.jpg';
import img5 from '../assets/images/showroom.jpg';
// Assuming these APIs are correctly set up and provide data
// import { hotelApi } from '../features/hotels/hotelAPI';
// import { roomsApi } from '../features/rooms/roomApi';

// Mock data for hotels to match the screenshot content and structure
const mockHotels = [
  {
    image: img1, 
    name: "The Ole-Ken Hotel",
    stars: 4.5, // Assuming 3 stars for this hotel based on screenshot
    description: "Rooftop Restaurant with Skyline Views, Well-Equipped Gym facilities",
    distance: "Nakuru, 1.1 km to City center",
    ratingValue: "8.5",
    ratingText: "Excellent",
    reviews: "(1841 ratings)",
    totalImages: 50,
    isPopularChoice: false,
  },
  {
    image: img2, // Placeholder image
    name: "Sarova Woodlands Hotel and Spa",
    stars: 4, // Assuming 4 stars
    description: "Refreshing Outdoor Pool and Garden, Organized Excursions to Local Wonders",
    distance: "Nakuru, 2.9 km to The Ole-Ken Hotel",
    ratingValue: "8.6",
    ratingText: "Excellent",
    reviews: "(367 ratings)",
    totalImages: 20,
    isPopularChoice: true,
  },
  {
    image: img4, // Placeholder image
    name: "Malaika Apartment ", // From second screenshot
    stars: 3.5, // No star rating visible, assuming 0 or N/A
    description: "Entire House / Apartment", // From second screenshot
    distance: "Nakuru, 4.3 km to The Ole-Ken Hotel",
    ratingValue: "7",
    ratingText: "Good",
    reviews: "(40 ratings)",
    totalImages: 14,
    isPopularChoice: false,
  },
  {
    image: img3, // Placeholder image
    name: "Lake Elementaita Villas", // From second screenshot
    stars: 3, // No star rating visible
    description: "Hotel",
    distance: "Nakuru, 1.1 km to The Ole-Ken Hotel",
    ratingValue: "No rating available",
    ratingText: "Cool",
    reviews: "(20 ratings)",
    totalImages: 32,
    isPopularChoice: false,
  },
  {
    image: img5, // Placeholder image
    name: "Pilgrims Getaway", // From second screenshot
    stars: 4, // No star rating visible
    description: "Entire House / Apartment",
    distance: "Nakuru, 7.3 km to The Ole-Ken Hotel",
    ratingValue: "No rating available",
    ratingText: "Good",
    reviews: "(50 ratings)",
    totalImages: 36,
    isPopularChoice: false,
  }
];

const LandingPage = () => {
  const [location, setLocation] = useState('Nakuru'); // Pre-fill as per screenshot
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests, 1 Room'); // Pre-fill as per screenshot
  const navigate = useNavigate();

  // Uncomment and use these if you have real API integration
  const { data: hotelsData = [] } = hotelApi.useGetAllHotelsQuery();
  const { data: roomsData = [] } = roomsApi.useGetAllRoomsQuery();

  // Use mockHotels for display
  const hotelsToDisplay = mockHotels;

  const handleSearch = (e:any) => {
    e.preventDefault();
    // Logic to navigate or filter based on search parameters
    const searchParams = new URLSearchParams();
    if (location) searchParams.set('location', location);
    if (checkIn) searchParams.set('checkIn', checkIn);
    if (checkOut) searchParams.set('checkOut', checkOut);
    if (guests) searchParams.set('guests', guests);
    
    // Example navigation, adjust as per your routing
    // navigate(`/hotels?${searchParams.toString()}`);
    alert(`Searching for: ${location}, Check-in: ${checkIn}, Check-out: ${checkOut}, Guests: ${guests}`);
  };

  return (
    <div className="font-inter text-gray-800 bg-gray-50 min-h-screen">
      {/* Top Search Bar (Header) */}
      <header className="bg-white shadow-sm py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Brand Name */}
          <div className="text-2xl font-bold text-blue-600">
            BOOKER 
          </div>

          {/* Search Inputs with enhanced interactivity */}
          <div className="flex flex-col md:flex-row flex-grow items-center bg-gray-100 rounded-lg p-2 gap-2 w-full md:w-auto">
            <div className="flex items-center gap-2 bg-black rounded-md px-3 py-2 flex-1 w-full md:w-auto group hover:shadow-md transition-shadow duration-300">
              <Search className="text-gray-500 group-hover:text-blue-600 transition-colors" />
              <input
                type="text"
                placeholder="Destination"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="outline-none bg-transparent w-full"
              />
              <button className="text-gray-500 hover:text-gray-700" onClick={() => setLocation('')}><FaTimes /></button>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-md px-3 py-2 w-full md:w-auto group hover:shadow-md transition-shadow duration-300">
              <Calendar className="text-gray-500 group-hover:text-blue-600 transition-colors" />
              <input type="text" placeholder="Check in --/--/----" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="outline-none bg-transparent w-full" />
            </div>
            <div className="flex items-center gap-2 bg-white rounded-md px-3 py-2 w-full md:w-auto group hover:shadow-md transition-shadow duration-300">
              <Calendar className="text-gray-500 group-hover:text-blue-600 transition-colors" />
              <input type="text" placeholder="Check out --/--/----" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="outline-none bg-transparent w-full" />
            </div>
            <div className="flex items-center gap-2 bg-white rounded-md px-3 py-2 w-full md:w-auto group hover:shadow-md transition-shadow duration-300">
              <Users className="text-gray-500 group-hover:text-blue-600 transition-colors" />
              <input type="text" placeholder="2 Guests, 1 Room" value={guests} onChange={(e) => setGuests(e.target.value)} className="outline-none bg-transparent w-full" />
            </div>
            <button onClick={handleSearch} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
              Search
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        {/* Sort and Filter Bar */}
        <section className="bg-white shadow-sm rounded-lg p-4 mb-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-2 text-gray-700 font-medium">
            Sort by
            <select className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1">
              <option>Featured...</option>
              <option>Price</option>
              <option>Rating</option>
            </select>
            <IoIosArrowDown className="text-gray-500" />
          </div>

          <div className="flex items-center gap-2 text-gray-700 font-medium">
            Filters
            <select className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1">
              <option>Select</option>
            </select>
            <IoIosArrowDown className="text-gray-500" />
          </div>

          <div className="flex items-center gap-2 text-gray-700 font-medium">
            Price
            <select className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1">
              <option>Select</option>
            </select>
            <IoIosArrowDown className="text-gray-500" />
          </div>

          <div className="flex items-center gap-2 text-gray-700 font-medium">
            Location
            <select className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 py-1">
              <option>Select</option>
            </select>
            <IoIosArrowDown className="text-gray-500" />
          </div>

          {/* Buttons matching the screenshot */}
          <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition">Hotels</button>
          <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition">Rating: 8.0+</button>
          <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition">Near town</button>
          
        </section>

        {/* Results Count and View Map */}
        <section className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <p className="text-gray-700 text-lg">We found <span className="font-bold">50+ hotels</span> from 10 sites</p>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-md">
            <FaLocationArrow />  BOOK WITH US
          </button>
        </section>

        {/* Hotel Listing Cards */}
        <section className="space-y-6"> {/* Use space-y for vertical spacing between cards */}
          {hotelsToDisplay.map((hotel, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row transition-transform hover:scale-[1.01]">
              {/* Image Section */}
              <div className="relative w-full md:w-1/3 lg:w-1/4 flex-shrink-0"> {/* Adjusted width for image */}
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-[180px] object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none" // Adjusted height and rounded corners
                />
                {/* Popular Choice Label */}
                {hotel.isPopularChoice && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Popular choice</span>
                )}
                {/* Heart Icon */}
                <div className="absolute top-2 right-2 flex gap-2">
                  <button className="bg-white p-2 rounded-full shadow text-gray-600 hover:bg-gray-100"><FaHeart /></button>
                </div>
                {/* Image Counter */}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full">
                  1/{hotel.totalImages}
                </div>
              </div>

              {/* Description Section */}
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  {hotel.stars > 0 && (
                    <div className="text-yellow-500 text-sm mb-1">
                      {"★".repeat(hotel.stars)} Hotel
                    </div>
                  )}
                  <h3 className="text-lg font-semibold mb-1 text-blue-600">{hotel.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{hotel.description}</p>
                  <p className="text-sm text-gray-600 flex items-center mt-1">
                    <FaMapMarkerAlt className="mr-1 text-blue-500" /> {hotel.distance}
                  </p>
                  {hotel.ratingValue !== "No rating available" && (
                    <div className="flex items-center mt-2">
                      <span className="bg-green-700 text-white text-xs font-bold px-2 py-1 rounded-md">{hotel.ratingValue}</span>
                      <span className="text-sm font-semibold ml-2">{hotel.ratingText}</span>
                      <span className="text-sm text-gray-500 ml-1">{hotel.reviews}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Price/Availability Section */}
              <div className="p-4 md:w-1/4 lg:w-1/5 flex-shrink-0 flex flex-col justify-center items-center md:items-end">
                <div className="bg-blue-50 p-3 rounded-lg w-full text-center">
                  <p className="text-blue-800 text-sm font-medium mb-2">Select dates to see exact prices</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
