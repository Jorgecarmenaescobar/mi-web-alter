import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Historia() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="historia" className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
          >
            Nuestra Historia
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-white/80 text-lg leading-relaxed"
          >
            <p>
              Éramos dos chicos que se conocían desde pequeños. Desde siempre compartimos el mismo objetivo: <span className="text-white font-semibold">ser libres</span>. No solo de horarios, sino de limitaciones, de lo predecible, de hacer lo que otros esperaban de nosotros.
            </p>

            <p>
              Un día, mientras hablábamos de cómo queríamos vivir, surgió una idea: <span className="text-white font-semibold">crear contenido en redes sociales</span>. No era solo "subir videos", era entender cómo funcionaba todo por dentro. Así que ambos nos pusimos manos a la obra.
            </p>

            <p>
              Hicimos cursos, estudiamos algoritmos, pasamos semanas y meses investigando cómo estaban estructuradas las plataformas, qué mueve al público, qué hace que un contenido se viralice y otro no. No fue suerte. Fue <span className="text-white font-semibold">método, prueba y error, y mucha dedicación</span>.
            </p>

            <p>
              El resultado habla por sí solo: <span className="text-white font-semibold">más de 100 millones de visitas</span> entre las dos cuentas. Y lo más interesante es que nuestro contenido es completamente distinto. Pablo se fue por el camino de los viajes, las aventuras extremas y experiencias que te dejan sin aliento. Jorge eligió la psicología, el crecimiento personal y la conexión profunda con la audiencia.
            </p>

            <p>
              Dos nichos diferentes, dos estrategias únicas, pero <span className="text-white font-semibold">un mismo resultado: éxito real y sostenible</span>. Eso nos demostró que lo que funciona no es el nicho, sino entender el juego. Y ahora, queremos enseñártelo a ti.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}