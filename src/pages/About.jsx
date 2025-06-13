const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900 to-gray-900" />
        </div>

        <div className="relative container mx-auto px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-6">
              Transforming Civic Engagement
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're building a future where every citizen's voice matters, and every civic issue gets the attention it deserves.
              Through the power of blockchain and AI, we're making local governance more transparent, efficient, and accountable.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl opacity-20 blur-lg"></div>
            <div className="relative bg-gray-800 p-8 rounded-2xl">
              <h2 className="text-4xl font-bold text-purple-400 mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  CiviChain is dedicated to revolutionizing how citizens interact with their local government. 
                  We believe in the power of technology to create transparency, accountability, and efficient 
                  problem-solving in civic matters.
                </p>
                <p>
                  By combining blockchain technology with artificial intelligence, 
                  we're building a platform that ensures every citizen's voice is heard and every issue is addressed.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-purple-400 font-semibold italic">
                    "Empowering communities through transparent and efficient civic engagement."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Vision</h3>
              <p className="text-gray-300">Empowering communities through transparent governance</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Innovation</h3>
              <p className="text-gray-300">Leveraging cutting-edge technology for civic improvement</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Community</h3>
              <p className="text-gray-300">Building stronger neighborhoods together</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Trust</h3>
              <p className="text-gray-300">Ensuring accountability through blockchain</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900 py-24">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-16">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-gray-800/70 transition-all">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full opacity-50 group-hover:opacity-100 blur transition-opacity"></div>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                  alt="Team member"
                  className="relative rounded-full w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sarah Johnson</h3>
              <p className="text-purple-400 mb-4">Founder & CEO</p>
              <p className="text-gray-300">10+ years experience in civic tech</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-gray-800/70 transition-all">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full opacity-50 group-hover:opacity-100 blur transition-opacity"></div>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
                  alt="Team member"
                  className="relative rounded-full w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Michael Chen</h3>
              <p className="text-purple-400 mb-4">CTO</p>
              <p className="text-gray-300">Expert in AI and blockchain</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-gray-800/70 transition-all">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full opacity-50 group-hover:opacity-100 blur transition-opacity"></div>
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&h=200&auto=format&fit=crop"
                  alt="Team member"
                  className="relative rounded-full w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Emily Rodriguez</h3>
              <p className="text-purple-400 mb-4">Head of Community</p>
              <p className="text-gray-300">Community relations expert</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-gray-800/70 transition-all">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full opacity-50 group-hover:opacity-100 blur transition-opacity"></div>
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
                  alt="Team member"
                  className="relative rounded-full w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Alex Thompson</h3>
              <p className="text-purple-400 mb-4">Lead Developer</p>
              <p className="text-gray-300">Full-stack blockchain dev</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-gray-800/70 transition-all">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full opacity-50 group-hover:opacity-100 blur transition-opacity"></div>
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&auto=format&fit=crop"
                  alt="Team member"
                  className="relative rounded-full w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lisa Wang</h3>
              <p className="text-purple-400 mb-4">Product Manager</p>
              <p className="text-gray-300">UX and strategy expert</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-16">
          What People Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl opacity-20 blur"></div>
            <div className="relative">
              <svg className="w-12 h-12 text-purple-500 mb-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-gray-300 text-lg mb-6">
                "CiviChain has transformed how we handle resident complaints. The transparency and efficiency
                brought by blockchain technology have significantly improved our response times."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop"
                  alt="Testimonial author"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">David Martinez</h4>
                  <p className="text-purple-400">City Council Member</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl opacity-20 blur"></div>
            <div className="relative">
              <svg className="w-12 h-12 text-purple-500 mb-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-gray-300 text-lg mb-6">
                "As a community organizer, I've seen firsthand how CiviChain empowers citizens to take
                action. The AI-powered verification system ensures that real issues get priority attention."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop"
                  alt="Testimonial author"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">Rachel Kim</h4>
                  <p className="text-purple-400">Community Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 border-t border-purple-500/20">
        <div className="container mx-auto px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
            <div className="w-full max-w-[200px]">
              <h3 className="text-xl font-semibold text-purple-400 mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  About Us
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Careers
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Press
                </a></li>
              </ul>
            </div>
            <div className="w-full max-w-[200px]">
              <h3 className="text-xl font-semibold text-purple-400 mb-6">Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Documentation
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Help Center
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Privacy Policy
                </a></li>
              </ul>
            </div>
            <div className="w-full max-w-[200px]">
              <h3 className="text-xl font-semibold text-purple-400 mb-6">Community</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  GitHub
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Discord
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Twitter
                </a></li>
              </ul>
            </div>
            <div className="w-full max-w-[200px]">
              <h3 className="text-xl font-semibold text-purple-400 mb-6">Contact</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Support
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Sales
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Partners
                </a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-5xl mx-auto">
              <p className="text-gray-400">
                © 2024 CiviChain. All rights reserved.
              </p>
              <div className="flex gap-8">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms</a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About; 