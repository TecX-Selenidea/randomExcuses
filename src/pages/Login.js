import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginArt.css';

function Login({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    if (form.username && form.password) {
      onLogin(form.username);
      navigate('/');
    } else {
      setError('Please enter both username and password.');
    }
  };

  return (
    <div className="login-art-bg">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input name="username" placeholder="Username" value={form.username} onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        {error && <div className="login-error">{error}</div>}
        <button type="submit">Login</button>
        <div className="login-register-link">
          No account? <span onClick={() => navigate('/register')}>Register</span>
        </div>
      </form>
      <div className="login-art-shapes"></div>
    </div>
  );
}
export default Login;