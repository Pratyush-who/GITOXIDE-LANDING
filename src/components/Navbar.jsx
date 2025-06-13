import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white p-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <img src={logo} alt="CiviChain Logo" className="h-8 w-auto" />
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent hover:from-purple-300 hover:to-purple-500 transition-all">
            CiviChain
          </span>
        </Link>
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className={`hover:text-purple-400 transition-all relative ${
              location.pathname === '/' ? 'text-purple-400' : 'text-gray-300'
            } group`}
          >
            Home
            <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform ${
              location.pathname === '/' ? 'scale-x-100' : ''
            }`}></span>
          </Link>
          <Link 
            to="/report" 
            className={`hover:text-purple-400 transition-all relative ${
              location.pathname === '/report' ? 'text-purple-400' : 'text-gray-300'
            } group`}
          >
            Report Issue
            <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform ${
              location.pathname === '/report' ? 'scale-x-100' : ''
            }`}></span>
          </Link>
          <Link 
            to="/feed" 
            className={`hover:text-purple-400 transition-all relative ${
              location.pathname === '/feed' ? 'text-purple-400' : 'text-gray-300'
            } group`}
          >
            Public Feed
            <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform ${
              location.pathname === '/feed' ? 'scale-x-100' : ''
            }`}></span>
          </Link>
          <Link 
            to="/about" 
            className={`hover:text-purple-400 transition-all relative ${
              location.pathname === '/about' ? 'text-purple-400' : 'text-gray-300'
            } group`}
          >
            About
            <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform ${
              location.pathname === '/about' ? 'scale-x-100' : ''
            }`}></span>
          </Link>
          <Link 
            to="/signin" 
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg text-white hover:from-purple-500 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 