import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Target, LineChart, Zap } from 'lucide-react';

export default function QueHacemos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Lightbulb,
      title: 'Estrategia de Contenido',
      description: 'Creamos estrategias personalizadas basadas en análisis profundo de tu nicho, audiencia y competencia. Cada decisión está respaldada por datos y experiencia real.'
    },
    {
      icon: Target,
      title: 'Creación desde Cero',
      description: 'Nos encargamos de todo el proceso: investigación, guionización, grabación, edición y publicación estratégica. Tú te enfocas en tu negocio, nosotros en hacerte brillar.'
    },
    {
      icon: LineChart,
      title: 'Optimización de Algoritmos',
      description: 'Conocemos cada algoritmo por dentro. Sabemos qué buscan, cómo reaccionan y cómo hacer que tu contenido llegue exactamente a quien necesita verlo.'
    },
    {
      icon: Zap,
      title: 'Mentoría Personalizada',
      description: 'Te enseñamos todo lo que sabemos. Llamadas semanales, revisión de contenido, análisis de mercado y correcciones concretas para que domines las redes por ti mismo.'
    }
  ];

  return (
    <section id="que-hacemos" className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
        >
          ¿Qué Hacemos?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-white/60 mb-16 text-lg max-w-3xl mx-auto"
        >
          Transformamos tu presencia digital con estrategias probadas y resultados reales. No vendemos humo, entregamos crecimiento sostenible.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors border border-white/20">
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/80 text-lg mb-6">
            Trabajamos con cualquier tipo de empresa o nicho, adaptando la estrategia a tu público objetivo
          </p>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 rounded-full border border-white/20">
            <p className="text-white font-semibold">
              + 100M de visitas generadas • + 2M de likes • Crecimiento constante mes a mes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}