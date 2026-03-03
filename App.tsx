import React from 'react';
import { Navbar } from './components/Navbar';
import { QuickInfo } from './components/QuickInfo';
import { Hero } from './components/Hero';
import { ConceptHighlights } from './components/ConceptHighlights';
import { MenuTeaser } from './components/MenuTeaser';
import { ReservationWidget } from './components/ReservationWidget';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { PrivateEvents } from './components/PrivateEvents';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-primary font-sans">
      <QuickInfo />
      <Navbar />
      <main>
        <Hero />
        <ConceptHighlights />
        <MenuTeaser />
        <ReservationWidget />
        <About />
        <Gallery />
        <Testimonials />
        <PrivateEvents />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;