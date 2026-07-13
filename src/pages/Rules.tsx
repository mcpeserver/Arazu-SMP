import { motion } from "motion/react";
import {
  ShieldAlert,
  Ban,
  MessageSquareOff,
  Users,
  Bug,
  Flame,
  EyeOff,
  ShieldCheck,
  Megaphone,
  Skull
} from "lucide-react";
import rulesData from "../../data/rules.json";

// Map beautiful icons to the rules based on keywords or index
const icons = [
  <Megaphone className="w-5 h-5 text-pink-600" key="0" />,
  <MessageSquareOff className="w-5 h-5 text-purple-600" key="1" />,
  <ShieldAlert className="w-5 h-5 text-rose-600" key="2" />,
  <Ban className="w-5 h-5 text-amber-600" key="3" />,
  <Users className="w-5 h-5 text-indigo-600" key="4" />,
  <Bug className="w-5 h-5 text-emerald-600" key="5" />,
  <Flame className="w-5 h-5 text-orange-600" key="6" />,
  <Skull className="w-5 h-5 text-red-600" key="7" />,
  <EyeOff className="w-5 h-5 text-cyan-600" key="8" />,
  <ShieldCheck className="w-5 h-5 text-teal-600" key="9" />
];

export default function Rules() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-80px)] px-4 py-8"
      id="rules-container"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FFB7C5] opacity-20 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-2xl glass-card rounded-3xl p-6 md:p-8 relative overflow-hidden" id="rules-card">
        {/* Border accent */}
        <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-pink-400 via-purple-500 to-pink-300" />

        <div className="flex items-center gap-2 mb-6" id="rules-title-group">
          <div className="p-2 rounded-lg bg-pink-100 border border-pink-200 text-pink-600">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black font-display bg-gradient-to-r from-pink-700 to-purple-900 bg-clip-text text-transparent">
            Peraturan Server
          </h2>
        </div>

        <p className="text-sm text-purple-900/60 mb-6 font-bold">
          Harap patuhi semua peraturan di bawah ini untuk menjaga kenyamanan bermain bersama di Arazu SMP.
        </p>

        {/* Responsive Rules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="rules-grid">
          {rulesData.map((rule, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              key={idx}
              className="p-4 bg-white border border-pink-100 rounded-2xl flex items-start gap-3 hover:border-pink-300 transition-all duration-300 group shadow-sm"
            >
              <div className="p-2 bg-pink-100/40 rounded-xl border border-pink-200 group-hover:scale-105 transition-transform">
                {icons[idx] || <ShieldCheck className="w-5 h-5 text-pink-600" />}
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-pink-600 block mb-0.5">
                  Rule #{idx + 1}
                </span>
                <p className="text-sm font-bold text-[#2D1B4D] leading-snug">{rule}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
