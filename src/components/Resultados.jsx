import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function CountUp({ end, duration = 2000, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return count.toLocaleString('es-ES');
}

export default function Resultados() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      number: 100000,
      label: 'Seguidores generados',
      subtitle: 'en solamente los últimos 3 meses'
    },
    {
      number: 110000000,
      label: 'Visitas generadas',
      subtitle: 'con una estrategia sólida y replicable'
    },
    {
      number: 2000000,
      label: 'Likes generados',
      subtitle: 'no solo viralidad, sino conexión'
    },
    {
      number: 700000,
      label: 'Promedio de visitas por mes',
      subtitle: 'consistentes mes a mes'
    }
  ];

  return (
    <section id="resultados" className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl top-0 right-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl bottom-0 left-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
        >
          Resultados Reales
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-white/60 mb-16 text-lg"
        >
          Los números hablan por sí solos
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative text-center">
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent"
                >
                  {isInView && <CountUp end={stat.number} isInView={isInView} />}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {stat.label}
                </h3>

                <p className="text-white/60 text-sm">
                  {stat.subtitle}
                </p>
              </div>

              {/* Decorative corner shine */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-50"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
            <p className="text-white/80 text-lg font-semibold">
              Esto no es suerte. Es estrategia, dedicación y conocimiento real de los algoritmos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}