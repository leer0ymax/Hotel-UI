import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
// import CallToAction from './components/CallToAction'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'
import RegisterPage from './pages/Register'
import Login from './components/auth/Login'
import Verify from './components/auth/Verify'
import AdminDashboard from './dashboard/AdminDashboard/AdminDashboard'
import ManageUsers from './dashboard/AdminDashboard/users/ManageUsers'
import ManageBookings from './dashboard/AdminDashboard/bookings/ManageBookings'
import ManagePayment from './dashboard/AdminDashboard/payments/ManagePayment'
import ManageRooms from './dashboard/AdminDashboard/rooms/ManageRooms'
import ManageHotels from './dashboard/AdminDashboard/hotels/ManageHotels'
import ManageAnalytics from './dashboard/AdminDashboard/analytics/ManageAnalytics'
// import ManageSettings from './dashboard/AdminDashboard/settings/ManageSettings'
import HotelPage from './pages/HotelPage'
import UserDashboard from './dashboard/UserDashboard/UserDashboard'
import UserBooking from './dashboard/UserDashboard/userBooking/UserBooking'
import PaymentCallbackPage from './pages/PaymentCallbackPage'
import UserPayment from './dashboard/UserDashboard/payment/UserPayment'
import TicketManagement from './dashboard/AdminDashboard/complains/TicketManagement'
// import UserSettings from './dashboard/UserDashboard/settings/UserSettng'
// import TicketManagement from './dashboard/AdminDashboard/customer_support/TicketManagement'

// Landing Page Component
const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Features />
      {/* <PopularDestinations /> */}
      <Testimonials />
      {/* <CallToAction /> */}
    </div>
  );
};

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<LandingPage />} />
           <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                     <Route path="/register" element={<RegisterPage />} />
                        <Route path="/login" element={<Login />} />
                             <Route path="/verify" element={<Verify />} />
                             <Route path="/hotels" element={<HotelPage />} />
                             <Route path="/payment/callback" element={<PaymentCallbackPage />} />
                            <Route path="/admin-dashboard" element={<AdminDashboard />  }>
                  
                  
              <Route path="users" element={<ManageUsers />} />
                <Route path="bookings" element={<ManageBookings />} />
                   <Route path="payments" element={<ManagePayment />} />
                        <Route path="rooms" element={<ManageRooms />} />
                        <Route path="hotels" element={<ManageHotels />} />
                           <Route path="analytics" element={<ManageAnalytics />} />
                             <Route path="complains" element={<TicketManagement />} />
          
            </Route>
            


               <Route path="/user-dashboard" element={<UserDashboard />  }>
                  
                  
             
                           {/* <Route path="user_settings" element={<UserSettings />} /> */}
                           
                           <Route path="bookings" element={<UserBooking />} />
                            <Route path="payments" element={<UserPayment />} />
                           
          
            </Route>


      </Routes>
      <Footer/>


    </Router>
 </>
  )
}

export default App