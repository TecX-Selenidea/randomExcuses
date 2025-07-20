import { useState } from 'react';
import Button from '../components/Button';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Simulate sending data to a mock endpoint
    setTimeout(() => setSubmitted(true), 500);
  };

  if (submitted) {
    return <div className="p-8 max-w-xl mx-auto text-green-600">Thank you for contacting us!</div>;
  }

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="border rounded p-2"
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="border rounded p-2"
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="border rounded p-2"
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send</Button>
      </form>
    </main>
  );
}
export default Contact;