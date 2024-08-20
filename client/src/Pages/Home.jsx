import React from 'react';
import { Link } from 'react-router-dom';

// Hero Section
const HeroSection = () => (
  <section className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: 'url(src/assets/images/background.jpg)' }}>
    <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
    <div className="relative z-10 flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-6xl font-bold font-serif">Water Delivery</h1>
        <p className="text-2xl mt-4 font-serif">Welcome to BlueWave Mineral Water, your trusted source for pure, fresh, and healthy water delivery right to your doorstep.</p>
        <div className="mt-6">
          <button className="bg-gradient-to-r from-[#4778F5] to-[#0056D2] text-white font-bold font-serif py-2 px-4 rounded-full mr-4 hover:from-[#0056D2] hover:to-[#003A99] hover:shadow-lg transition-all duration-300">
            Read More
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold font-serif py-2 px-4 rounded-full">Order Now</button>
        </div>
      </div>
    </div>
  </section>
);

// Services Section
const ServicesSection = () => (
  <section className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: 'url(src/assets/images/service.jpeg)' }}>
    <div className='flex items-center justify-center mb-8'>
      <img src="src/assets/images/image1.png" alt="Logo" className="h-32 w-36" />
      <h2 className="text-5xl font-semibold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-serif">
        Our Services
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[400px] pl-5 pr-5 pt-10">
      <div className="p-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-lg shadow-lg">
        <img src="src/assets/images/maintance.png" alt="Logo" className="h-36 w-40 mx-auto" />
        <h3 className="text-2xl font-bold pb-6 font-serif text-black">Maintenance</h3>
        <p className="text-lg font-serif">Enjoy great-tasting bottled water delivered direct to your home or office with no hassle. Save time with your requested order delivered to your door by our friendly and knowledgeable Route Sales Representative.</p>
        <button className="mt-4 font-semibold text-white">Read More &gt;</button>
      </div>
      <div className="p-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-lg shadow-lg">
        <img src="src/assets/images/Delivary.png" alt="Logo" className="h-36 w-40 mx-auto" />
        <h3 className="text-2xl font-bold mb-4 text-black font-serif">Water Delivery</h3>
        <p className="text-lg font-serif">Enjoy great-tasting bottled water delivered direct to your home or office with no hassle. Save time with your requested order delivered to your door by our friendly and knowledgeable Route Sales Representative.</p>
        <button className="mt-4 text-white font-semibold">Read More &gt;</button>
      </div>
      <div className="p-6 bg-gradient-to-r from-blue-300 to-blue-500 rounded-lg shadow-lg">
        <img src="src/assets/images/quality.png" alt="Logo" className="h-36 w-36 mx-auto" />
        <h3 className="text-2xl font-bold mb-4 text-black font-serif">Quality Check</h3>
        <p className="text-lg font-serif">Enjoy great-tasting bottled water delivered direct to your home or office with no hassle. Save time with your requested order delivered to your door by our friendly and knowledgeable Route Sales Representative.</p>
        <button className="mt-4 text-white font-semibold">Read More &gt;</button>
      </div>
    </div>
  </section>
);

// Delivery Service Section
const DeliverySection = () => (
  <section className="min-h-[750px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-center">
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="flex-1 flex justify-center mb-8 md:mb-0">
        <img src="/src/assets/images/deliveryGuy.png" alt="Delivery Service" className="rounded-full shadow-lg pt-12" />
      </div>
      <div className="flex-1 text-left">
        <h2 className="text-6xl font-semibold mb-8 font-serif pt-8 pl-12">Delivery Service</h2>
        <p className='text-lg font-serif mb-8 pr-5'>
          Our delivery service operates 365 days a year. We will deliver water to your home within 24 hours when you place your first order.
        </p>
        <ul className="text-lg list-disc list-inside font-serif mb-6">
          <li>Free Delivery</li>
          <li>7 Days a week</li>
          <li>8:00 - 22:00</li>
        </ul>
        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold py-2 px-4 rounded-full font-serif hover:from-blue-800 hover:to-blue-900">
            Read More
          </button>
          <button className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-2 px-4 rounded-full font-serif hover:from-red-700 hover:to-red-800">
            Order Now
          </button>
        </div>
      </div>
    </div>
  </section>
);

// How We Extract Water Section
const ExtractionSection = () => (
  <section className="min-h-[750px] bg-white text-center">
    <h2 className="text-xl font-semibold text-blue-300 pt-9 font-serif leading-tight">Technology</h2>
    <h2 className="text-4xl font-semibold mb-8 text-blue-600 pt-1 font-serif leading-tight">How We Extract Water</h2>
    <p className="text-lg mb-8 font-serif mr-9 ml-9">Location of our source of water in Padukka comes through a deep tube well 120 feet below the ground penetrating through 2 solid rock beds. This location has been identified as the ground water source in Sri Lanka. The extracted water goes through an extensive 7 filtration stages, careful lab tests, and quality checks before it's bottled and delivered to your hands.</p>
    <div className="flex justify-center">
      <video
        src="/src/assets/images/video.mp4"
        alt="Water Extraction"
        className="rounded-lg shadow-lg w-[800px] h-[450px]"
        controls
        autoPlay
        loop
      >
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
);

// About Section
const AboutSection = () => (
  <section className="min-h-[750px] bg-blue-100 text-center">
    <h2 className="text-4xl font-semibold mb-8 text-blue-600 pt-9 font-serif">About Us</h2>
    <div className="flex flex-col md:flex-row items-center justify-center mb-8">
      <div className="flex-1 text-left px-8">
        <h3 className="text-3xl font-semibold mb-4 font-serif">Our Mission</h3>
        <p className="text-lg font-serif mb-8">At BlueWave, our mission is to provide the highest quality mineral water while ensuring exceptional service. We strive to be the most reliable and trusted water delivery service in the region.</p>
        <h3 className="text-3xl font-semibold mb-4 font-serif">Our Values</h3>
        <p className="text-lg font-serif mb-8">We are committed to purity, sustainability, and customer satisfaction. Our values drive us to continuously improve and innovate in our water extraction and delivery processes.</p>
        <Link to="/about">
        <button className="bg-gradient-to-r from-[#4778F5] to-[#0056D2] text-white font-bold font-serif py-2 px-4 rounded-full mr-4 hover:from-[#0056D2] hover:to-[#003A99] hover:shadow-lg transition-all duration-300">
            Read More
          </button>
        </Link>
      </div>
      <div className="flex-1 pr-8 pt-16">
        <img src="/src/assets/images/about.jpg" alt="About Us" className="rounded-lg shadow-lg w-full h-[400px] object-cover" />
      </div>
    </div>
  </section>
);


// Recent Posts Section
const RecentPostsSection = () => (
  <section className="min-h-[750px] bg-blue-200 text-center">
    <h2 className="text-4xl font-semibold mb-8 text-blue-600 pt-9 font-serif">Recent Posts</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pr-8 pl-8">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <img
          src="/src/assets/images/post1.jpg"
          alt="Post 1"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-2xl font-bold mt-5 font-serif pb-5">Why drink bottled water?</h3>
        <p className="text-lg font-serif">Drinking water - tap, filtered, or bottled is important for healthy hydration and plays a vital role in people's lives....</p>
        <button className="mt-4 text-blue-600 font-semibold pt-4">Read More &gt;</button>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <img
          src="/src/assets/images/post2.jpg"
          alt="Post 2"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-2xl font-bold mt-5 font-serif pb-5">How much water a day?</h3>
        <p className="text-lg font-serif">How much water should you drink a day? You probably know that it's important to drink plenty of fluids when the temperatures soar outside...</p>
        <button className="mt-4 text-blue-600 font-semibold pt-4">Read More &gt;</button>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <img
          src="/src/assets/images/post3.webp"
          alt="Post 3"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-2xl font-bold mt-5 font-serif pb-5">Water’s role inside your body?</h3>
        <p className="text-lg font-serif">Water helps nearly every part of the human body function efficiently. Considering that our bodies are almost two-thirds water, it's important to understand...</p>
        <button className="mt-4 text-blue-600 font-semibold ">Read More &gt;</button>
      </div>
    </div>
  </section>
);

// Footer Section
const Footer = () => (
  <footer className="bg-blue-900 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Logo and Info */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-3xl font-bold mb-2 font-serif ">BlueWave</h1>
          <p className="text-lg">Delivering pure and refreshing water right to your doorsteps.</p>
        </div>
        {/* Navigation Links */}
        <div className="mb-6 md:mb-0 pl-64">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <Link to="/">
            <li><a href="#services" className="hover:underline">Services</a></li>
            </Link>
            <li><a href="#delivery" className="hover:underline">Delivery</a></li>
            <li><a href="#extraction" className="hover:underline">Extraction</a></li>
            <li><a href="#posts" className="hover:underline">Recent Posts</a></li>
          </ul>
        </div>
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">123 Water Street, City, Country</p>
          <p className="mb-2">Email: contact@bluewave.com</p>
          <p className="mb-2">Phone: +123-456-7890</p>
        </div>
      </div>
      {/* Social Media Links */}
      <div className="mt-8 text-center">
        <a href="https://facebook.com" className="mx-2 text-white hover:text-blue-400">Facebook</a>
        <a href="https://twitter.com" className="mx-2 text-white hover:text-blue-400">Twitter</a>
        <a href="https://instagram.com" className="mx-2 text-white hover:text-blue-400">Instagram</a>
        <a href="https://linkedin.com" className="mx-2 text-white hover:text-blue-400">LinkedIn</a>
      </div>
      {/* Copyright */}
      <div className="mt-8 text-center">
        <p className="text-sm">&copy; 2024 BlueWave. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Main Home component
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <DeliverySection />
      <ExtractionSection />
      <RecentPostsSection />
      <AboutSection/>
      <Footer />
    </div>
  );
}
