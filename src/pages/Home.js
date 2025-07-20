import { useState } from 'react';
import Button from '../components/Button';

const EXCUSES = [
  "My dog ate my homework!",
  "I thought today was Saturday.",
  "The internet was down.",
  "I was abducted by aliens.",
  "My alarm didn't go off.",
  "I had a flat tire.",
  "I got stuck in traffic.",
  "I was helping a friend in need."
];

function Home() {
  const [excuse, setExcuse] = useState(null);
  const [showCard, setShowCard] = useState(false);

  const handleGetExcuse = () => {
    const randomExcuse = EXCUSES[Math.floor(Math.random() * EXCUSES.length)];
    setExcuse(randomExcuse);
    setShowCard(true);
  };

  const handleClose = () => setShowCard(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Random Excuses!</h1>
        <p className="mb-6">Get a random excuse for any situation. Perfect for fun, work, or just because!</p>
        <Button onClick={handleGetExcuse}>Get an Excuse</Button>
      </section>
      <section className="grid md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Fast & Easy</h2>
          <p>Generate excuses instantly with one click.</p>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Shareable</h2>
          <p>Send your excuses to friends or colleagues.</p>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Always Fresh</h2>
          <p>Our database is updated regularly for new excuses.</p>
        </div>
      </section>
      {showCard && (
        <div className="excuse-overlay" onClick={handleClose}>
          <div className="excuse-card animate-pop" onClick={e => e.stopPropagation()}>
            <span className="excuse-close" onClick={handleClose}>&times;</span>
            <div className="excuse-text">{excuse}</div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;