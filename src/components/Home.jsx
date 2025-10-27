import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Hero from './Hero';
import Historia from './Historia';
import Equipo from './Equipo';
import QueHacemos from './QueHacemos';
import Resultados from './Resultados';
import FAQ from './FAQ';

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Historia />
      <Equipo />
      <QueHacemos />
      <Resultados />
      <FAQ />
    </div>
  );
}