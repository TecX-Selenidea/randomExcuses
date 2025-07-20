import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function Header({ user, onLogout, theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const avatarRef = useRef(null);
  const navigate = useNavigate();
  const defaultAvatar =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="100%" height="100%" fill="%233b82f6"/><text x="50%" y="55%" font-size="20" fill="white" text-anchor="middle" alignment-baseline="middle">👤</text></svg>';

  useEffect(() => {
    function handleClickOutside(event) {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center relative">
      <div className="text-xl font-bold">Random Excuses</div>
      <nav className="space-x-4 flex items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        <button onClick={toggleTheme} style={{ marginLeft: 16 }}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </nav>
      {user && (
        <div
          ref={avatarRef}
          style={{
            position: 'absolute',
            top: 12,
            right: 24,
            display: 'flex',
            alignItems: 'center',
            zIndex: 10
          }}
        >
          <img
            src={defaultAvatar}
            alt="User Avatar"
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '2px solid white',
              background: '#3b82f6',
              objectFit: 'cover',
              display: 'inline-block',
              verticalAlign: 'middle',
              cursor: 'pointer',
            }}
            onClick={() => setMenuOpen((open) => !open)}
          />
          {menuOpen && (
            <div
              style={{
                position: 'absolute',
                top: 48,
                right: 0,
                background: 'white',
                color: '#222',
                borderRadius: 8,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                minWidth: 120,
                padding: '8px 0',
                zIndex: 20,
              }}
            >
              <div
                style={{ padding: '8px 16px', cursor: 'pointer' }}
                onClick={() => {
                  setMenuOpen(false);
                  navigate('/profile');
                }}
              >
                Profile
              </div>
              <div
                style={{ padding: '8px 16px', cursor: 'pointer', color: '#e53e3e' }}
                onClick={() => {
                  setMenuOpen(false);
                  onLogout();
                }}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
export default Header;