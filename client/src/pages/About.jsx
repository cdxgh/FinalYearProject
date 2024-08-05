// Desc: About page
import React from 'react';

const About = () => {
  return (
    <div className="py-20 px-6 lg:px-12 max-w-5xl mx-auto text-center lg:text-left">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to RentEstate</h1>
      <div className="space-y-6 text-gray-700">
        <p className="leading-relaxed">
          At RentEstate, we believe that finding your dream home should be an exciting and enjoyable journey. Whether you're looking to buy, sell, or rent, our mission is to make the process as seamless and stress-free as possible. With a deep understanding of the real estate market and a passion for matching people with the perfect property, we are here to guide you every step of the way.
        </p>
        <p className="leading-relaxed">
          Our team of seasoned professionals is dedicated to providing personalized service tailored to your unique needs. We take pride in our local expertise, extensive market knowledge, and unwavering commitment to our clients. From luxury estates to cozy apartments, we cover it all with integrity and a customer-first approach.
        </p>
        <p className="leading-relaxed">
          At RentEstate, we see ourselves not just as real estate agents, but as partners in your journey. Our goal is to help you make informed decisions, navigate the complexities of the market, and achieve your real estate dreams with confidence and peace of mind.
        </p>
      </div>
      <div className="mt-12">
        <img
          src="/path/to/real-estate-image.jpg" // Replace with actual image path
          alt="RentEstate Team"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-12 flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="mb-6 lg:mb-0">
          <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>🏠 Expert local market knowledge</li>
            <li>🔍 Comprehensive property search tools</li>
            <li>🤝 Personalized customer service</li>
            <li>🌟 Trusted by clients for years</li>
          </ul>
        </div>
        <div>
          <button
            className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg uppercase tracking-wide hover:bg-blue-700 transition-all"
            onClick={() => window.location.href = '/contact'}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
