import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#F6F5FA' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{ minHeight: '420px', background: 'linear-gradient(135deg, #DBE7F0 0%, #C8D5E3 100%)' }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(219, 231, 240, 0.9), rgba(200, 213, 227, 0.85))' }} />
        </div>
        <div className="relative max-w-3xl mx-auto px-8 py-24 flex flex-col justify-center h-full">
          <div className="bg-white/95 rounded-3xl shadow-2xl p-12 text-left backdrop-blur-sm border border-white/20 transform hover:scale-[1.02] transition-all duration-300">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              About CiviChain
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-4 text-gray-700">
              CiviChain is building a future where every citizen's voice matters, and every civic issue gets the attention it deserves.
            </p>
            <p className="text-base md:text-lg text-gray-600">
              Through the power of blockchain and AI, we're making local governance more transparent, efficient, and accountable.
            </p>
            <div className="mt-6 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full w-24"></div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div 
              className="p-8 rounded-3xl shadow-xl border border-white/30 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #DBE7F0 0%, #C8D5E3 100%)' }}
            > 
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Our Mission</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  CiviChain is dedicated to revolutionizing how citizens interact with their local government. 
                  We believe in the power of technology to create transparency, accountability, and efficient 
                  problem-solving in civic matters.
                </p>
                <p>
                  By combining blockchain technology with artificial intelligence, 
                  we're building a platform that ensures every citizen's voice is heard and every issue is addressed.
                </p>
                <div className="mt-8 pt-6 border-t border-white/30">
                  <p className="font-semibold italic text-gray-800 text-xl">
                    "Empowering communities through transparent and efficient civic engagement."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { emoji: '🎯', title: 'Vision', desc: 'Empowering communities through transparent governance', bg: '#CFDECA' },
              { emoji: '💡', title: 'Innovation', desc: 'Leveraging cutting-edge technology for civic improvement', bg: '#DBE7F0' },
              { emoji: '🤝', title: 'Community', desc: 'Building stronger neighborhoods together', bg: '#CFDECA' },
              { emoji: '⚖️', title: 'Trust', desc: 'Ensuring accountability through blockchain', bg: '#DBE7F0' }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20"
                style={{ backgroundColor: item.bg }}
              >
                <div className="text-4xl mb-4 transform hover:scale-110 transition-transform duration-300">{item.emoji}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24" style={{ background: 'linear-gradient(135deg, #DBE7F0 0%, #C8D5E3 100%)' }}>
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Founder & CEO', desc: '10+ years experience in civic tech', image: 'photo-1438761681033-6461ffad8d80' },
              { name: 'Michael Chen', role: 'CTO', desc: 'Expert in AI and blockchain', image: 'photo-1472099645785-5658abf4ff4e' },
              { name: 'Emily Rodriguez', role: 'Head of Community', desc: 'Community relations expert', image: 'photo-1517841905240-472988babdf9' },
              { name: 'Alex Thompson', role: 'Lead Developer', desc: 'Full-stack blockchain dev', image: 'photo-1500648767791-00dcc994a43e' },
              { name: 'Lisa Wang', role: 'Product Manager', desc: 'UX and strategy expert', image: 'photo-1573497019940-1c28c88b4f3e' }
            ].map((member, index) => (
              <div 
                key={index}
                className="rounded-3xl p-8 text-center group transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl border border-white/30 backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(246, 245, 250, 0.9)' }}
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={`https://images.unsplash.com/${member.image}?q=80&w=200&h=200&auto=format&fit=crop`}
                    alt="Team member"
                    className="rounded-full w-full h-full object-cover shadow-lg group-hover:shadow-xl transition-all duration-300 border-4 border-white group-hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                <p className="mb-4 text-blue-600 font-medium">{member.role}</p>
                <p className="text-gray-600">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          What People Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className="p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-white/20"
            style={{ background: 'linear-gradient(135deg, #DBE7F0 0%, #C8D5E3 100%)' }}
          >
            <svg 
              className="w-12 h-12 mb-6 text-yellow-400 drop-shadow-lg" 
              fill="currentColor" 
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              "CiviChain has transformed how we handle resident complaints. The transparency and efficiency
              brought by blockchain technology have significantly improved our response times."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop"
                alt="Testimonial author"
                className="w-14 h-14 rounded-full mr-4 shadow-lg border-2 border-white"
              />
              <div>
                <h4 className="font-semibold text-gray-800">David Martinez</h4>
                <p className="text-gray-600">City Council Member</p>
              </div>
            </div>
          </div>
          <div 
            className="p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-white/20"
            style={{ background: 'linear-gradient(135deg, #CFDECA 0%, #B8D4B8 100%)' }}
          >
            <svg 
              className="w-12 h-12 mb-6 text-yellow-400 drop-shadow-lg" 
              fill="currentColor" 
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              "As a community organizer, I've seen firsthand how CiviChain empowers citizens to take
              action. The AI-powered verification system ensures that real issues get priority attention."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop"
                alt="Testimonial author"
                className="w-14 h-14 rounded-full mr-4 shadow-lg border-2 border-white"
              />
              <div>
                <h4 className="font-semibold text-gray-800">Rachel Kim</h4>
                <p className="text-gray-600">Community Organizer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 mt-16 shadow-2xl" style={{ backgroundColor: '#212121', borderTop: '3px solid #FFFA03' }}>
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-400 to-green-400 flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <span className="text-xl font-semibold text-white">CiviChain</span>
          </div>
          <div className="flex gap-8">
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a 
                key={link}
                href="#" 
                className="text-sm transition-all duration-300 text-gray-300 hover:text-yellow-400 hover:scale-105 transform font-medium"
              >
                {link}
              </a>
            ))}
          </div>
          <span className="text-xs mt-2 md:mt-0 text-gray-400">© 2024 CiviChain. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default About;