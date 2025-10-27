import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12 leading-tight"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
<div className="text-2xl md:text-3xl lg:text-4xl font-medium bg-gradient-to-b from-white/80 via-white/70 to-white/50 bg-clip-text text-transparent mb-2">
            crecimiento orgánico en
          </div>
          <div className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
            REDES SOCIALES
          </div>
        </motion.h1>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-2">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 animate-shimmer"></div>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/Ot7WtpCqbm8"
                title="VSL Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.a
            href="https://onup9bvnag3.typeform.com/to/gtQ62tVr#first_name=xxxxx&last_name=xxxxx&email=xxxxx&phone_number=xxxxx"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-12 py-5 text-lg font-bold text-white bg-white/20 backdrop-blur-md rounded-full shadow-2xl border border-white/30 hover:bg-white/30 hover:shadow-white/50 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 animate-shimmer-slow"></div>
            <span className="relative">
              Empieza ahora
            </span>
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shimmer-slow {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .animate-shimmer-slow {
          background-size: 200% auto;
          animation: shimmer-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
}