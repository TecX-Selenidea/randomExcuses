import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginArt.css';

function Register() {
  const [form, setForm] = useState({ username: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    if (!form.username || !form.password) {
      setError('All fields required.');
    } else if (form.password !== form.confirm) {
      setError('Passwords do not match.');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="login-art-bg">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input name="username" placeholder="Username" value={form.username} onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <input name="confirm" type="password" placeholder="Confirm Password" value={form.confirm} onChange={handleChange} />
        {error && <div className="login-error">{error}</div>}
        <button type="submit">Register</button>
        <div className="login-register-link">
          Already have an account? <span onClick={() => navigate('/login')}>Login</span>
        </div>
      </form>
      <div className="login-art-shapes"></div>
    </div>
  );
}
export default Register;