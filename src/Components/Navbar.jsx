import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../context/UserContext';
import defaultProfile from '../assets/img/defaultProfile.png';

const Navbar = () => {
  const { currentUser, logout } = useCurrentUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const popupRef = useRef(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 py-3 bg-white bg-opacity-90 shadow-md font-poppins relative">
      <div className="text-2xl font-bold text-slate-800">SparkNest</div>

      {/* Desktop nav */}
      <ul className="hidden lg:flex gap-6 text-slate-700 font-medium text-base">
        <li className="hover:scale-110 transition-transform duration-300">
          <Link to="/" className="hover:text-blue-700">Home</Link>
        </li>
        <li className="hover:scale-110 transition-transform duration-300">
          <Link to="/profile" className="hover:text-blue-700">Profile</Link>
        </li>
        <li className="hover:scale-110 transition-transform duration-300">
          <Link to="/create-post" className="hover:text-blue-700">Create</Link>
        </li>
        <li className="hover:scale-110 transition-transform duration-300">
          <Link to="/terms" className="hover:text-blue-700">Terms</Link>
        </li>
      </ul>

      {
        currentUser ? (
          <div className="hidden lg:block relative">
            <div
              className='w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer hover:border-blue-700'
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-modal="true"
              aria-label="Toggle menu"
            >
              <img src={currentUser.profileImageUrl ? currentUser.profileImageUrl : defaultProfile} alt="profile image" className='w-full h-full object-cover' />
            </div>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-4 z-50" ref={popupRef}>
                <p className='font-semibold text-slate-800 mb-2'>{currentUser.name}</p>
                <hr />
                <button
                  className="w-full mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 cursor-pointer font-semibold"
                  title='Logout'
                  onClick={() => {
                    logout()
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden lg:block">
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 font-semibold cursor-pointer">
              <Link to="/register">Get Started</Link>
            </button>
          </div>
        )
      }

      {/* Mobile: hamburger */}
      <button
        className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-gray-100 cursor-pointer"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((s) => !s)}
      >
        {menuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
          </svg>
        )}
      </button>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={closeMenu}
          aria-hidden
        />
      )}

      {/* Mobile panel */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-64 sm:w-72 bg-white shadow-xl p-6 transform transition-transform duration-300 lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-slate-800">SparkNest</div>
          <button
            className="p-2 rounded-md text-slate-700 hover:bg-gray-100 cursor-pointer"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
            </svg>
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-4">
          <Link to="/" onClick={closeMenu} className="text-slate-700 font-medium hover:text-blue-700">Home</Link>
          <Link to="/profile" onClick={closeMenu} className="text-slate-700 font-medium hover:text-blue-700">Profile</Link>
          <Link to="/create-post" onClick={closeMenu} className="text-slate-700 font-medium hover:text-blue-700">Create</Link>
          <Link to="/terms" onClick={closeMenu} className="text-slate-700 font-medium hover:text-blue-700">Terms</Link>
        </nav>
        {
          currentUser ? (
            <div className="flex items-center space-x-2 mt-6 bg-gray-200 px-2 py-1 rounded-md">
              <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer'>
                <img src={currentUser.profileImageUrl ? currentUser.profileImageUrl : defaultProfile} alt="profile image" className='w-full h-full object-cover' />
              </div>
              <div>
                <p className='font-semibold'>{currentUser.name}</p>
              </div>
            </div>
          ) : (
            <div className="mt-6">
              <button className="bg-black text-white px-4 py-2 rounded-md w-full font-semibold" onClick={closeMenu}>
                <Link to="/register">Get Started</Link>
              </button>
            </div>
          )
        }
        <div className='mt-80'>
          <button className='bg-red-500 text-white px-4 py-2 rounded-md w-full font-semibold cursor-pointer' title='Logout' onClick={logout}>LogOut</button>
        </div>
      </aside>
    </nav>
  )
}

export default Navbar;