import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, TrendingUp } from 'lucide-react';

export default function Equipo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    {
      name: 'Jorge Carmena',
      handle: '@jorge_carmena',
      specialty: 'Experto en Psicología',
      description: 'Jorge ha construido su presencia en redes sociales dominando el nicho de la psicología. Conoce cada detalle de cómo funcionan los algoritmos y ha desarrollado una técnica única para conectar emocionalmente con la audiencia. Su contenido no solo viraliza, transforma.',
      highlight: 'Psicología + Estrategia = Crecimiento'
    },
    {
      name: 'Pablo Cabrera',
      handle: '@mision_cabra',
      specialty: 'Maestro del Contenido Extremo',
      description: 'Pablo ha llevado sus redes sociales a otro nivel con contenido de aventuras extremas y viajes únicos. Su capacidad para capturar momentos auténticos y contar historias visuales lo ha convertido en un referente. Sabe exactamente qué busca la audiencia y cómo dárselo.',
      highlight: 'Aventura + Autenticidad = Viralidad'
    }
  ];

  return (
    <section id="equipo" className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
        >
          Nuestro Equipo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-white/60 mb-16 text-lg"
        >
          Expertos en redes sociales que conocen todos los algoritmos y tienen la tecla exacta para hacer crecer tu marca
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.handle}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <a
                      href={`https://instagram.com/${member.handle.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group/link"
                    >
                      <Instagram size={18} />
                      <span className="group-hover/link:underline">{member.handle}</span>
                    </a>
                  </div>
                  <TrendingUp className="text-white/40 group-hover:text-white/80 transition-colors" size={32} />
                </div>

                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm text-white/80 border border-white/20">
                    {member.specialty}
                  </span>
                </div>

                <p className="text-white/70 mb-4 leading-relaxed">
                  {member.description}
                </p>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white font-semibold text-sm">
                    {member.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}