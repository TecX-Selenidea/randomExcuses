import { Link } from 'react-router-dom';

function Header({ user, onLogout }) {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Random Excuses</div>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        {user ? (
          <span style={{ cursor: 'pointer', marginLeft: 16 }} onClick={onLogout}>Logout ({user})</span>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
export default Header;