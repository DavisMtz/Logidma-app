import { motion, useScroll, useTransform } from 'motion/react';
import { Network, TerminalSquare, Mail, Phone, MessageCircle, Code, Cpu, Database, Blocks, Zap } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    // Inject LinkedIn script dynamic parsing
    // @ts-ignore
    if (window.IN && window.IN.parse) {
      // @ts-ignore
      window.IN.parse();
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const codeString = `const Logidma = {
  core: "engineering",
  focus: "metacognition",
  architecture: "flawless",
  
  sysDeploy(entropy) {
    let order = analyze(entropy);
    return flexRender(order);
  }
};

Logidma.sysDeploy(world);
// System operational... _`;
    
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedText(codeString.substring(0, i));
      i++;
      if (i > codeString.length) clearInterval(typingInterval);
    }, 40);

    return () => clearInterval(typingInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-neutral-200 font-sans relative overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-100">
      
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Dynamic Mouse Spotlight */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.07), transparent 40%)`
        }}
      />

      {/* Mathematical Grid & Static Glows */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0 pointer-events-none opacity-[0.05]">
        <div style={{ 
               backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
               backgroundSize: '4rem 4rem',
               maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)',
               WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)',
               width: '100%', height: '150%'
             }} />
      </motion.div>
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900/20 blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[150px] pointer-events-none z-0" />

      {/* Header/Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="https://github.com/DavisMtz/logidma-assets/blob/main/Logidma%20logo.png?raw=true" alt="Logidma Logo" className="h-8 w-auto object-contain drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]" />
            <span className="hidden sm:inline-flex text-[10px] font-mono tracking-[0.2em] text-emerald-400/80 uppercase px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5">
              Antes DavarCore
            </span>
          </div>
          <a href="#contacto" className="text-sm font-medium text-white hover:text-black bg-white/10 hover:bg-emerald-400 px-6 py-2.5 rounded-full transition-all duration-300 border border-white/10 shadow-[0_0_20px_rgba(52,211,153,0)] hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]">
            Conectar
          </a>
        </div>
      </nav>

      {/* Main Content using Bento Grid Architecture */}
      <main className="relative z-10 pt-36 pb-24 px-6 max-w-7xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* HERO BLOCK - 8 cols */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-12 lg:col-span-8 flex flex-col justify-center bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 rounded-[2rem] p-10 md:p-16 overflow-hidden relative group transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="inline-flex flex-wrap items-center gap-2 mb-8">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  INIT_SYSTEM
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs font-medium">
                  v2.0 Architecture
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-bold text-white mb-8 tracking-tight leading-[1.05]">
                La lógica,<br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">sistematizada.</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-light">
                Nuestra evolución hacia Logidma marca el paso definitivo hacia la <strong className="text-emerald-400 font-medium tracking-wide">ingeniería de sistemas y metacognición pura</strong>. Diseñamos la arquitectura invisible que sostiene tu eficiencia corporativa.
              </p>
            </div>
          </motion.div>

          {/* LOGO & VISUAL IDENTITY - 4 cols */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-6 lg:col-span-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 rounded-[2rem] p-10 flex items-center justify-center relative overflow-hidden group transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -inset-[100%] animate-[spin_20s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,rgba(52,211,153,0.05)_50%,#000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <img 
              src="https://github.com/DavisMtz/logidma-assets/blob/main/Logidma%20logo.png?raw=true" 
              alt="Logidma" 
              className="w-56 h-auto relative z-10 drop-shadow-[0_0_40px_rgba(52,211,153,0.3)] transition-transform duration-700 group-hover:scale-110" 
            />
          </motion.div>

          {/* EXPERTISE/SERVICES BLOCK (NEW) - 4 cols */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-6 lg:col-span-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group">
             <div className="flex flex-col h-full justify-between relative z-10">
               <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-6">Arquitectura e Ingeniería</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-neutral-300 hover:text-emerald-400 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5"><Zap className="w-4 h-4" /></div>
                      <div>
                        <p className="font-medium text-sm">Automatización de Flujos</p>
                        <p className="text-xs text-neutral-500">Reducción de fricción humana</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-neutral-300 hover:text-cyan-400 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5"><Code className="w-4 h-4" /></div>
                      <div>
                        <p className="font-medium text-sm">Desarrollo Frontend / UI</p>
                        <p className="text-xs text-neutral-500">Interfaces estéticas y fluidas</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-neutral-300 hover:text-blue-400 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5"><Database className="w-4 h-4" /></div>
                      <div>
                        <p className="font-medium text-sm">Sistematización de Datos</p>
                        <p className="text-xs text-neutral-500">Estructuras relacionales sólidas</p>
                      </div>
                    </div>
                  </div>
               </div>
             </div>
          </motion.div>

          {/* PHILOSOPHY BLOCK - 8 cols */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-12 lg:col-span-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-[2rem] p-10 md:p-12 relative overflow-hidden group">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6 leading-tight">
                  Más allá de la superficie visual<span className="text-emerald-400">.</span>
                </h2>
                <div className="space-y-6 text-neutral-400 text-[1.05rem] leading-relaxed font-light">
                  <p>
                    El trabajo diario de automatizar flujos requiere ver el <strong className="text-white font-medium">engranaje oculto</strong>. Mientras los procesos manuales son susceptibles al desgaste humano, nosotros imponemos un orden estético y matemático.
                  </p>
                  <p>
                    Logidma no es solo código; es el diseño de la cuadrícula invisible que sostiene la eficiencia corporativa y técnica de cada proyecto que tocamos.
                  </p>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                {/* Interactive Terminal */}
                <div className="w-full rounded-2xl border border-white/10 bg-[#0A0A0B] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-600">logidma-core.ts</span>
                  </div>
                  <div className="p-6 font-mono text-xs md:text-sm text-emerald-400/90 h-[220px]">
                    <pre className="whitespace-pre-wrap leading-relaxed">
                      {typedText}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ETYMOLOGY: LOGI - 4 cols */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-6 lg:col-span-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 rounded-[2rem] p-10 relative group transition-colors duration-300">
            <Network className="w-10 h-10 text-emerald-400 mb-8 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-3xl font-heading font-bold text-white mb-2">LO<span className="text-emerald-400">GI</span></h3>
            <p className="text-xs text-neutral-500 mb-6 font-mono uppercase tracking-widest">De Logos y Lógica</p>
            <p className="text-neutral-400 leading-relaxed text-sm font-light">
              En la filosofía clásica, el <em>Logos</em> rige el universo. En computación, la lógica es el lenguaje absoluto. Es nuestra capacidad analítica para traducir el caos en secuencias que operan impecablemente.
            </p>
          </motion.div>

          {/* ETYMOLOGY: DMA - 4 cols */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-6 lg:col-span-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 rounded-[2rem] p-10 relative overflow-hidden group transition-colors duration-300">
             <TerminalSquare className="w-10 h-10 text-cyan-400 mb-8 bg-cyan-500/10 p-2.5 rounded-xl border border-cyan-500/20 group-hover:scale-110 transition-transform duration-500" />
             <h3 className="text-3xl font-heading font-bold text-white mb-2">D<span className="text-cyan-400">MA</span></h3>
             <p className="text-xs text-neutral-500 mb-6 font-mono uppercase tracking-widest">Núcleo y Firma</p>
             <p className="text-neutral-400 leading-relaxed text-sm font-light">
                La arquitectura lleva un sello indiscutible. La firma personal inscrita directamente en el código garantiza que la solución sea impulsada por un diseño de autor.
             </p>
          </motion.div>

          {/* CREATOR/LINKEDIN BADGE - 4 cols */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-12 lg:col-span-4 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 rounded-[2rem] p-8 relative overflow-hidden group transition-colors duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <img src="https://lh3.googleusercontent.com/a/ACg8ocKb8u9IY4BT01_d_9d8g6fEW7PIz2cxRAcivCeGuPw1h2_eAlFa" alt="David Mtz" className="w-20 h-20 rounded-full border border-blue-500/30 object-cover mb-4 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-500"/>
            <p className="text-white font-heading font-bold text-lg mb-1">David Martínez A.</p>
            <p className="text-neutral-500 text-xs uppercase tracking-widest mb-6 border-b border-white/10 pb-4 w-full text-center">Fundador</p>
            
            <div className="relative z-10 w-full flex justify-center scale-95 origin-center pt-2">
              <div className="badge-base LI-profile-badge" data-locale="es_ES" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="david-martinez-arredondo-86b4182bb" data-version="v1">
                <a className="badge-base__link LI-simple-link text-center text-sm text-neutral-400" href="https://mx.linkedin.com/in/david-martinez-arredondo-86b4182bb?trk=profile-badge">
                  David Martinez Arredondo
                </a>
              </div>
            </div>
          </motion.div>

          {/* CONTACT SECTION HEADER */}
          <motion.div variants={itemVariants} id="contacto" className="col-span-1 md:col-span-12 mt-20 md:mt-32 text-center pb-8 border-b border-white/5">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mb-8 border border-emerald-500/20">
              <Cpu className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 tracking-tight">Inicia tu próxima <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">arquitectura</span></h2>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Sistematizamos procesos, construimos código y optimizamos flujos. Contáctanos directamente para agendar una sesión analítica.
            </p>
          </motion.div>

          {/* CONTACT CARDS */}
          {/* WHATSAPP */}
          <motion.a 
            href="https://wa.me/524431014385"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants} 
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="col-span-1 md:col-span-4 bg-gradient-to-b from-[#25D366]/5 to-transparent border border-[#25D366]/20 rounded-[2rem] p-10 flex flex-col items-center justify-center text-center transition-all duration-300 group hover:border-[#25D366]/50 hover:bg-[#25D366]/[0.02] cursor-pointer"
          >
            <div className="w-16 h-16 rounded-[1.25rem] bg-[#25D366]/10 flex items-center justify-center mb-6 text-[#25D366] group-hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] group-hover:scale-110 group-hover:bg-[#25D366]/20 transition-all duration-500">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-3">WhatsApp</h3>
            <p className="text-[#25D366] font-mono text-sm tracking-wide">+52 443 101 4385</p>
          </motion.a>

          {/* EMAIL */}
          <motion.a 
            href="mailto:contacto@logidma.com"
            variants={itemVariants} 
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="col-span-1 md:col-span-4 bg-gradient-to-b from-blue-500/5 to-transparent border border-blue-500/20 rounded-[2rem] p-10 flex flex-col items-center justify-center text-center transition-all duration-300 group hover:border-blue-500/50 hover:bg-blue-500/[0.02] cursor-pointer"
          >
            <div className="w-16 h-16 rounded-[1.25rem] bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-3">Email</h3>
            <p className="text-blue-400 font-mono text-sm tracking-wide">contacto@logidma.com</p>
          </motion.a>

          {/* PHONE */}
          <motion.a 
            href="tel:+524431014385"
            variants={itemVariants} 
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="col-span-1 md:col-span-4 bg-gradient-to-b from-purple-500/5 to-transparent border border-purple-500/20 rounded-[2rem] p-10 flex flex-col items-center justify-center text-center transition-all duration-300 group hover:border-purple-500/50 hover:bg-purple-500/[0.02] cursor-pointer"
          >
            <div className="w-16 h-16 rounded-[1.25rem] bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-500">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-3">Teléfono</h3>
            <p className="text-purple-400 font-mono text-sm tracking-wide">443 101 4385</p>
          </motion.a>

        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 text-center bg-black/80 backdrop-blur-xl mt-12">
        <div className="flex items-center justify-center mb-6">
           <img src="https://github.com/DavisMtz/logidma-assets/blob/main/Logidma%20logo.png?raw=true" alt="Logidma Logo" className="h-6 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
        </div>
        <p className="text-neutral-500 text-sm font-medium tracking-wide">© {new Date().getFullYear()} Logidma. La lógica, sistematizada.</p>
        <p className="text-neutral-700 text-xs mt-2 uppercase tracking-widest">Arquitectura de Sistemas</p>
      </footer>
    </div>
  );
}

