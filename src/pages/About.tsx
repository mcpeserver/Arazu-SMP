import { motion } from "motion/react";
import { Compass, Sparkles, Milestone, Users, Flame } from "lucide-react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-80px)] px-4 py-8"
      id="about-container"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FFB7C5] opacity-20 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md md:max-w-xl glass-card rounded-3xl p-6 md:p-8 relative overflow-hidden" id="about-card">
        {/* Border accent */}
        <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-pink-400 via-purple-500 to-pink-300" />

        <div className="flex items-center gap-2 mb-4" id="about-title-group">
          <div className="p-2 rounded-lg bg-pink-100 border border-pink-200 text-pink-600">
            <Compass className="w-5 h-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black font-display bg-gradient-to-r from-pink-700 to-purple-900 bg-clip-text text-transparent">
            Tentang Arazu SMP
          </h2>
        </div>

        {/* Large blockquote style for description */}
        <div className="relative pl-4 border-l-4 border-pink-500 my-6 bg-pink-100/40 py-3 pr-2 rounded-r-xl" id="about-description-block">
          <p className="text-sm md:text-base leading-relaxed text-[#2D1B4D] font-bold">
            Arazu SMP merupakan server Minecraft Bedrock Edition bertema Japanese Economy yang menghadirkan pengalaman bermain dengan konsep ekonomi serta berbagai aktivitas menarik untuk dinikmati bersama komunitas.
          </p>
        </div>

        {/* Feature grid detailing the gameplay highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6" id="about-highlights">
          <div className="p-4 bg-white border border-pink-100 shadow-sm rounded-2xl flex gap-3 items-start">
            <div className="p-1.5 rounded-lg bg-yellow-100 text-yellow-700 mt-0.5 border border-yellow-200">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
            </div>
            <div>
              <h3 className="font-bold text-xs text-[#2D1B4D] uppercase tracking-wider mb-1">Japanese Theme</h3>
              <p className="text-xs text-purple-900/70 font-medium leading-relaxed">
                Nikmati suasana desa tradisional Jepang, kuil pagoda, dan pohon Sakura pink yang menenangkan.
              </p>
            </div>
          </div>

          <div className="p-4 bg-white border border-pink-100 shadow-sm rounded-2xl flex gap-3 items-start">
            <div className="p-1.5 rounded-lg bg-purple-100 text-purple-700 mt-0.5 border border-purple-200">
              <Milestone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-xs text-[#2D1B4D] uppercase tracking-wider mb-1">Modern Economy</h3>
              <p className="text-xs text-purple-900/70 font-medium leading-relaxed">
                Konsep ekonomi terstruktur, perdagangan antar player, sistem toko, dan koin virtual yang menantang.
              </p>
            </div>
          </div>

          <div className="p-4 bg-white border border-pink-100 shadow-sm rounded-2xl flex gap-3 items-start">
            <div className="p-1.5 rounded-lg bg-pink-100 text-pink-600 mt-0.5 border border-pink-200">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-xs text-[#2D1B4D] uppercase tracking-wider mb-1">Warm Community</h3>
              <p className="text-xs text-purple-900/70 font-medium leading-relaxed">
                Didesain untuk kebersamaan komunitas, event berkala, dan tempat mengobrol santai.
              </p>
            </div>
          </div>

          <div className="p-4 bg-white border border-pink-100 shadow-sm rounded-2xl flex gap-3 items-start">
            <div className="p-1.5 rounded-lg bg-rose-100 text-rose-600 mt-0.5 border border-rose-200">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-xs text-[#2D1B4D] uppercase tracking-wider mb-1">Bedrock Edition</h3>
              <p className="text-xs text-purple-900/70 font-medium leading-relaxed">
                Kemudahan bermain kapan saja, di mana saja dengan dukungan Bedrock Edition yang stabil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
