
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans">
        <nav className="flex justify-center gap-8 py-6 bg-gradient-to-r from-black via-blue-800 to-black shadow-lg">
          <Link className="text-lg font-bold hover:text-blue-400 transition" to="/">Home</Link>
          <Link className="text-lg font-bold hover:text-blue-400 transition" to="/services">Our Services</Link>
          <Link className="text-lg font-bold hover:text-blue-400 transition" to="/portfolio">Portfolio</Link>
          <Link className="text-lg font-bold hover:text-blue-400 transition" to="/staff">Staff Directory</Link>
          <Link className="text-lg font-bold hover:text-blue-400 transition" to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="p-12 text-center space-y-6 bg-black">
      <h1 className="text-5xl font-extrabold text-white">Ignite Your Brand</h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Our agency helps you captivate audiences, build loyal communities, and turn ideas into viral success stories.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-800 text-white font-semibold rounded-full hover:bg-blue-900 transition">
        Let’s Connect
      </button>
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-gray-900 p-6 rounded-lg shadow-lg text-white">
            <div className="h-48 bg-gray-700 rounded mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Feature Title {i}</h3>
            <p className="text-gray-400">Add a short description of your service or highlight here.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <div className="p-12 space-y-6 bg-black">
      <h2 className="text-4xl font-bold text-blue-400">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-8 text-gray-300">
        {[
          "Social Media Strategy",
          "Content Creation",
          "Influencer Marketing",
          "Analytics & Ads"
        ].map((title, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <div className="h-32 bg-gray-700 rounded mb-4"></div>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p>Add your description for this service here. Keep it engaging and client-focused.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="p-12 bg-black">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition text-center">
            <div className="h-40 bg-gray-700 rounded mb-4"></div>
            <p className="text-gray-300">Add project image and description here (Project {i + 1}).</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Staff() {
  const staff = ['Alex', 'Jamie', 'Taylor', 'Jordan', 'Morgan', 'Riley'];
  return (
    <div className="p-12 bg-black">
      <h2 className="text-4xl font-bold text-blue-400 mb-8 text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {staff.map((name, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition">
            <div className="h-32 w-32 mx-auto bg-gray-700 rounded-full mb-4"></div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-gray-400">Job Title — Add custom roles here</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-12 bg-black text-center">
      <h2 className="text-4xl font-bold text-white mb-6">Let’s Get in Touch</h2>
      <p className="text-gray-300 mb-2">Email: <span className="text-blue-400">info@socialagency.com</span></p>
      <p className="text-gray-300 mb-2">Phone: <span className="text-blue-400">+1 (123) 456-7890</span></p>
      <p className="text-gray-300">Location: <span className="text-blue-400">New York, NY</span></p>
    </div>
  );
}
