import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { Approach } from './components/approach/Approach';
import { Pillars } from './components/pillars/Pillars';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Approach Section */}
      <Approach />

      {/* Pillars Section */}
      <Pillars />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
