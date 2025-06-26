import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav 
      className="fixed w-full z-50 border-b shadow-sm"
      style={{ backgroundColor: '#e3eaf2' }}
    >
      <div className="flex justify-between items-center px-8 py-3 gap-x-12 flex-wrap">
        <Link to="/" className="flex items-center gap-4 text-2xl font-bold min-w-fit">
          <img src={logo} alt="CiviChain Logo" className="h-8 w-auto" />
          <span style={{ color: '#212121' }}>
            CiviChain
          </span>
        </Link>
        <div className="flex items-center gap-10 flex-wrap min-w-0">
          <Link 
            to="/" 
            className={`transition-all relative ${
              location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'
            } group hover:text-blue-600`}
          >
            Home
            <span 
              className={`absolute -bottom-2 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform ${
                location.pathname === '/' ? 'scale-x-100' : ''
              }`}
              style={{ backgroundColor: '#FFFA03' }}
            ></span>
          </Link>
          <Link 
            to="/report" 
            className={`transition-all relative ${
              location.pathname === '/report' ? 'text-blue-600' : 'text-gray-600'
            } group hover:text-blue-600`}
          >
            Report Issue
            <span 
              className={`absolute -bottom-2 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform ${
                location.pathname === '/report' ? 'scale-x-100' : ''
              }`}
              style={{ backgroundColor: '#FFFA03' }}
            ></span>
          </Link>
          <Link 
            to="/feed" 
            className={`transition-all relative ${
              location.pathname === '/feed' ? 'text-blue-600' : 'text-gray-600'
            } group hover:text-blue-600`}
          >
            Public Feed
            <span 
              className={`absolute -bottom-2 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform ${
                location.pathname === '/feed' ? 'scale-x-100' : ''
              }`}
              style={{ backgroundColor: '#FFFA03' }}
            ></span>
          </Link>
          <Link 
            to="/about" 
            className={`transition-all relative ${
              location.pathname === '/about' ? 'text-blue-600' : 'text-gray-600'
            } group hover:text-blue-600`}
          >
            About
            <span 
              className={`absolute -bottom-2 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform ${
                location.pathname === '/about' ? 'scale-x-100' : ''
              }`}
              style={{ backgroundColor: '#FFFA03' }}
            ></span>
          </Link>
          <Link 
            to="/signin" 
            className="px-6 py-2 rounded-xl transition-all transform hover:scale-105 whitespace-nowrap"
            style={{ 
              backgroundColor: '#FFFA03', 
              color: '#212121',
              marginLeft: '0.5rem'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#CFDECA'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#FFFA03'}
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 