import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';
import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = username => setUser(username);
  const handleLogout = () => setUser(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header user={user} onLogout={handleLogout} />
        <div className="flex-grow">
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={user ? <Home /> : <Login onLogin={handleLogin} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
