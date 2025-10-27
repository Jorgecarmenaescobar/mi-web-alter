import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿Qué incluye el servicio de creación de contenido desde cero?',
      answer: 'Incluye literalmente todo el proceso creativo. Nos encargamos de investigar tu nicho, sacar ideas originales, guionizar, grabar (si el plan lo permite), editar con cariño y precisión, y publicar en el momento estratégico. Pero no termina ahí: también analizamos las métricas para optimizar lo que funciona y ajustar lo que no. Tú te centras en tu negocio, nosotros en que brilles en redes.'
    },
    {
      question: '¿Qué incluye el servicio de creación de contenido formato mentoría?',
      answer: 'Piensa en esto como un "modo entrenador personal de contenido". Te damos un sistema claro y organizado para que crear contenido no sea una tortura, sino una inversión rentable de tiempo. Cada semana tienes una llamada con nosotros para resolver dudas y ajustar la estrategia, revisamos tu contenido y te damos correcciones concretas (sin rodeos) para que cada publicación sume. Además, cada mes revisamos tu perfil de arriba abajo para que tu marca no se quede estancada. También recibirás análisis de mercado para detectar oportunidades y consejos para viralizar tus publicaciones. En resumen: aprenderás a crear contenido con resultados y con cabeza, no solo a "probar suerte".'
    },
    {
      question: '¿En cuánto tiempo veré resultados reales en mi cuenta?',
      answer: 'No tenemos varita mágica (ojalá 😅), pero sí tenemos experiencia. Normalmente, si publicas con la frecuencia que recomendamos, empezarás a notar mejoras en alcance e interacción en 2 a 3 meses. Algunos lo ven antes, otros un poco después… lo importante es que los resultados no sean "un pico", sino un crecimiento real y sostenible.'
    },
    {
      question: '¿Trabajan con cualquier tipo de empresa o nicho de mercado?',
      answer: 'Sí. Desde abogados hasta entrenadores de crossfit, pasando por artistas, psicólogos o negocios locales. Adaptamos la estrategia a tu sector y a tu público objetivo con un análisis de mercado previo. Lo que cambia es la forma y el tono, pero la metodología funciona para todos los que quieran crecer en digital.'
    },
    {
      question: '¿La grabación de contenido la hacen ustedes o debo grabar yo?',
      answer: 'Depende del plan que elijas. Si la ubicación y logística lo permiten, podemos encargarnos nosotros de la grabación. Pero si no, no te preocupes: te guiamos paso a paso para que grabes con tu propio equipo y se vea totalmente profesional (nada de vídeos caseros con mala luz y sonido de micro del portátil). Queremos que el proceso sea práctico y se adapte a tu realidad.'
    }
  ];

  return (
    <section id="faq" className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
        >
          Preguntas Frecuentes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-white/60 mb-16 text-lg"
        >
          Todo lo que necesitas saber antes de empezar
        </motion.p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-semibold text-lg pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="text-white/60" size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-white/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-white/80 text-lg mb-8">
            ¿Listo para transformar tu presencia digital?
          </p>
          <motion.a
            href="https://onup9bvnag3.typeform.com/to/gtQ62tVr#first_name=xxxxx&last_name=xxxxx&email=xxxxx&phone_number=xxxxx"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-10 py-4 text-base font-bold text-black bg-white rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white animate-shimmer-slow"></div>
            <span className="relative flex items-center gap-3">
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Comienza tu transformación
              <Sparkles className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
            </span>
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer-slow {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer-slow {
          background-size: 200% auto;
          animation: shimmer-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
}