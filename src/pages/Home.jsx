import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        
        <div className="container mx-auto px-8 relative">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Empowering Cities
              </span>
              <br />
              <span className="text-white">
                Through Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl">
              Join thousands of citizens making their communities better through blockchain-powered civic engagement.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="http://localhost:5173/report" target="_self" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg text-white font-semibold hover:from-purple-500 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Start Reporting Issues
              </a>
              <button className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm rounded-lg text-white font-semibold hover:bg-gray-800/70 transition-all border border-purple-500/20">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>

      {/* Stats Section */}
      <div className="py-24 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <p className="text-gray-400">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
                100+
              </div>
              <p className="text-gray-400">Cities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
                25K+
              </div>
              <p className="text-gray-400">Issues Resolved</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <p className="text-gray-400">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-16">
            Why Choose CiviChain?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all group">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Blockchain Security</h3>
              <p className="text-gray-300">
                Every issue reported is securely stored on the blockchain, ensuring transparency and immutability. Track the status of your reports in real-time.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all group">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Triage</h3>
              <p className="text-gray-300">
                Our AI system automatically categorizes and prioritizes issues, ensuring faster response times and more efficient resource allocation.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all group">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Community Driven</h3>
              <p className="text-gray-300">
                Connect with other citizens, follow issues that matter to you, and collaborate with local authorities for better solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-gray-900/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of active citizens who are already making their communities better through CiviChain.
            </p>
            <a href="http://localhost:5173/report" target="_self" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg text-white font-semibold hover:from-purple-500 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Start Reporting Issues
            </a>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">© 2024 CiviChain. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 