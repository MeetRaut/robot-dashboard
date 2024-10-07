import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const isLoggedIn = localStorage.getItem('token') !== null;

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-400 mb-4">Robot Dashboard</h1>
          <p className="text-xl text-gray-300">Keep track of multiple robots with ease</p>
        </header>

        <div className="bg-gray-700 rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
          {isLoggedIn ? (
            <div className="text-center">
              <p className="text-2xl font-semibold text-green-400 mb-4">Welcome to your Robot Control Center!</p>
              <p className="text-gray-300 mb-6">Monitor and manage your robot fleet from one central location.</p>
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  window.location.reload();
                }}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-2xl font-semibold text-blue-400 mb-4">Access Your Robot Fleet</p>
              <p className="text-gray-300 mb-6">Sign in or create an account to start managing your robots.</p>
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Log In / Sign Up
              </Link>
            </div>
          )}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Real-time Monitoring</h2>
            <p className="text-gray-300">Track your robots' status, location, and performance in real-time.</p>
          </div>
          <div className="bg-gray-700 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Task Management</h2>
            <p className="text-gray-300">Assign and schedule tasks for your robots with our intuitive interface.</p>
          </div>
          <div className="bg-gray-700 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Analytics & Reporting</h2>
            <p className="text-gray-300">Generate insights and reports on your robot fleet's performance and efficiency.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">Download our Progressive Web App for easy access on any device</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Install App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;