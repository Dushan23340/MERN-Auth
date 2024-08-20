import React from 'react';
import { Link } from 'react-router-dom';

// Footer Component
const Footer = () => (
  <footer className="bg-blue-900 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Logo and Info */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-3xl font-bold mb-2 font-serif">BlueWave</h1>
          <p className="text-lg">Delivering pure and refreshing water right to your doorsteps.</p>
        </div>
        {/* Navigation Links */}
        <div className="mb-6 md:mb-0 pl-64">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
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

// About Page Component
const About = () => (
  <>
    <section className="min-h-screen bg-blue-100 text-center">
      <div className="py-12">
        <h2 className="text-4xl font-semibold mb-8 text-blue-600 font-serif">About Us</h2>
        <div className="px-4 md:px-16">
          <h3 className="text-3xl font-semibold mb-6 text-blue-700 font-serif">Our Mission</h3>
          <p className="text-lg mb-8 font-serif">
            At BlueWave, our mission is to deliver pure, refreshing, and high-quality water to our customers. We are dedicated to ensuring the best water delivery service with a commitment to excellence and customer satisfaction.
          </p>

          <h3 className="text-3xl font-semibold mb-6 text-blue-700 font-serif">Our Story</h3>
          <p className="text-lg mb-8 font-serif">
            Founded in 2024, BlueWave emerged from a passion for providing clean and healthy water to our community. What started as a small venture has grown into a trusted brand, known for our reliability and quality.
          </p>

          <h3 className="text-3xl font-semibold mb-6 text-blue-700 font-serif">Our Values</h3>
          <p className="text-lg mb-8 font-serif">
            We value integrity, sustainability, and innovation. Our commitment to quality drives us to continually improve our processes, from water extraction to delivery. We believe in being transparent and maintaining the highest standards of service.
          </p>

          <h3 className="text-3xl font-semibold mb-6 text-blue-700 font-serif">Meet the Team</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
              <img src="/src/assets/images/team1.jpg" alt="Team Member 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2 font-serif">John Doe</h4>
              <p className="text-lg font-serif">CEO & Founder</p>
              <p className="text-sm text-gray-600">John leads our team with passion and vision, driving our mission forward with a commitment to excellence.</p>
            </div>
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
              <img src="/src/assets/images/team2.jpg" alt="Team Member 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2 font-serif">Jane Smith</h4>
              <p className="text-lg font-serif">Operations Manager</p>
              <p className="text-sm text-gray-600">Jane oversees our day-to-day operations, ensuring that every delivery meets our high standards of quality.</p>
            </div>
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
              <img src="/src/assets/images/team3.jpg" alt="Team Member 3" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2 font-serif">Emily Johnson</h4>
              <p className="text-lg font-serif">Customer Service</p>
              <p className="text-sm text-gray-600">Emily ensures our customers receive top-notch service and support, addressing inquiries and feedback with care.</p>
            </div>
          </div>

          <h3 className="text-3xl font-semibold mb-6 text-blue-700 font-serif">Our Commitment to Sustainability</h3>
          <p className="text-lg mb-8 font-serif">
            We are committed to reducing our environmental footprint by using eco-friendly packaging and promoting sustainable practices throughout our operations.
          </p>
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default About;
