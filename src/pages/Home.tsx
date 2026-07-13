import { useState } from "react";
import { Copy, Check, Shield, Server, Compass, Sparkles, MessageCircle, Play } from "lucide-react";
import { motion } from "motion/react";
import serverData from "../../data/server.json";
import seoData from "../../data/seo.json";
import logoImg from "../assets/images/logo_1783831327578.jpg";
import heroImg from "../assets/images/arazu_hero_1783961010138.jpg";

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyIp = async () => {
    try {
      await navigator.clipboard.writeText(serverData.ip);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy IP: ", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-80px)] px-4 py-8"
      id="home-container"
    >
      {/* Decorative Warm Sunset / Cherry Blossom Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#FFB7C5] opacity-25 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-[#fce7f3] opacity-35 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Responsive Split Card */}
      <div
        className="w-full max-w-md md:max-w-4xl glass-card rounded-3xl overflow-hidden relative flex flex-col md:flex-row shadow-2xl border border-pink-100"
        id="home-hero-card"
      >
        {/* Animated Accent Top border */}
        <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-pink-400 via-purple-500 to-pink-300 z-10" />

        {/* Hero Image Section (Left Column on Desktop, Top on Mobile) */}
        <div className="relative w-full md:w-5/12 h-48 sm:h-64 md:h-auto overflow-hidden min-h-[220px]">
          <img
            src={heroImg}
            alt="Arazu Japanese Village"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
          {/* Elegant soft gradient overlay that blends into the background */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#fdf2f8]/40 to-transparent pointer-events-none" />
        </div>

        {/* Content Section (Right Column on Desktop, Bottom on Mobile) */}
        <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col items-center text-center relative justify-between gap-6">
          <div className="flex flex-col items-center w-full">
            {/* Hero Image / Logo */}
            <div className="relative group mb-5" id="logo-wrapper">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
              <img
                src={logoImg}
                alt={seoData.title}
                referrerPolicy="no-referrer"
                className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover shadow-xl transition-transform duration-500 group-hover:scale-105 border border-pink-100 bg-white"
                id="hero-logo-img"
              />
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-purple-950 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md border border-yellow-200">
                <Sparkles className="w-2.5 h-2.5 text-purple-950 animate-pulse" />
                Japanese
              </div>
            </div>

            {/* Hero Information */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-black font-display tracking-tight bg-gradient-to-r from-pink-700 via-purple-900 to-pink-800 bg-clip-text text-transparent mb-1"
              id="hero-title"
            >
              {seoData.title.split(" - ")[0]}
            </motion.h1>

            <p className="text-xs md:text-sm text-purple-900/70 max-w-sm mb-5 font-bold tracking-wide">
              Japanese Economy Minecraft Server
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-5" id="hero-badges">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-pink-100 border border-pink-200 text-pink-700 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                {serverData.edition}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 border border-purple-200 text-purple-700 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5" />
                v{serverData.version}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 border border-green-200 text-green-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                {serverData.status}
              </span>
            </div>

            {/* Server IP & Port Details Area */}
            <div className="w-full bg-white border border-pink-100 rounded-2xl p-4 mb-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-left shadow-sm">
              <div className="flex flex-col gap-0.5 w-full sm:w-auto text-center sm:text-left">
                <span className="text-[10px] text-purple-900/60 font-semibold tracking-wider uppercase">Server IP Address</span>
                <span className="text-sm font-mono font-bold text-[#2D1B4D] tracking-wide">{serverData.ip}</span>
                <span className="text-[10px] text-purple-800/80 font-mono font-medium">Port: {serverData.port}</span>
              </div>
              <button
                onClick={handleCopyIp}
                id="copy-ip-button"
                className="w-full sm:w-auto px-5 py-2 bg-[#FFB7C5] hover:bg-[#ffa7b8] active:scale-95 text-[#2D1B4D] font-bold text-[10px] rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all duration-300 border border-pink-200 cursor-pointer uppercase tracking-widest"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-700" />
                    Copied IP!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    Copy IP
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            {/* Button Actions */}
            <div className="grid grid-cols-2 gap-3 w-full" id="hero-actions">
              <a
                href="https://chat.whatsapp.com/DSnwE6BSCCc9rXvSysifT1"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-bold text-[11px] uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-pink-200/50 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                WhatsApp Group
              </a>
              <a
                href="https://www.tiktok.com/@arazusmp"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2.5 border-2 border-pink-200 text-pink-600 hover:bg-pink-50 rounded-xl bg-white font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <Play className="w-4 h-4 text-pink-600 fill-pink-600/20" />
                TikTok Channel
              </a>
            </div>

            {/* Interactive Explorer trigger */}
            <div className="pt-3 border-t border-pink-100 w-full flex justify-between items-center text-xs">
              <span className="text-purple-900/60 font-medium">Jelajahi Server Kami:</span>
              <button
                onClick={() => onNavigate("/about/")}
                className="text-pink-600 hover:text-pink-700 font-bold flex items-center gap-1 transition-colors cursor-pointer"
              >
                About Arazu
                <Compass className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
