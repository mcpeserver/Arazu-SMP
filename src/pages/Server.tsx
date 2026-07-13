import { motion } from "motion/react";
import { Server, Globe, Hash, Shield, Layers, Power } from "lucide-react";
import serverData from "../../data/server.json";

export default function ServerPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-80px)] px-4 py-8"
      id="server-container"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FFB7C5] opacity-20 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md md:max-w-xl glass-card rounded-3xl p-6 md:p-8 relative overflow-hidden" id="server-details-card">
        {/* Border accent */}
        <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-pink-400 via-purple-500 to-pink-300" />

        <div className="flex items-center gap-2 mb-6" id="server-title-group">
          <div className="p-2 rounded-lg bg-purple-100 border border-purple-200 text-purple-600">
            <Server className="w-5 h-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black font-display bg-gradient-to-r from-pink-700 to-purple-900 bg-clip-text text-transparent">
            Server Informasi
          </h2>
        </div>

        {/* Dynamic fields listed beautifully */}
        <div className="flex flex-col gap-4" id="server-stats-grid">
          {/* IP Address Field */}
          <div className="p-4 bg-white border border-pink-100 shadow-sm rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-pink-100 text-pink-600 border border-pink-200">
                <Globe className="w-4.5 h-4.5" />
              </div>
              <span className="text-sm font-bold text-purple-900">IP Address</span>
            </div>
            <span className="text-sm md:text-base font-mono font-bold text-[#2D1B4D] bg-pink-100/40 px-3 py-1.5 rounded-xl border border-pink-200">
              {serverData.ip}
            </span>
          </div>

          {/* Port Field */}
          <div className="p-4 bg-white border border-pink-100 shadow-sm rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-100 text-purple-600 border border-purple-200">
                <Hash className="w-4.5 h-4.5" />
              </div>
              <span className="text-sm font-bold text-purple-900">Port</span>
            </div>
            <span className="text-sm md:text-base font-mono font-bold text-[#2D1B4D] bg-pink-100/40 px-3 py-1.5 rounded-xl border border-pink-200">
              {serverData.port}
            </span>
          </div>

          {/* Edition Field */}
          <div className="p-4 bg-white border border-pink-100 shadow-sm rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-pink-100 text-pink-600 border border-pink-200">
                <Shield className="w-4.5 h-4.5" />
              </div>
              <span className="text-sm font-bold text-purple-900">Edition</span>
            </div>
            <span className="text-sm md:text-base font-bold text-pink-700 bg-pink-100/40 px-3 py-1.5 rounded-xl border border-pink-200">
              {serverData.edition}
            </span>
          </div>

          {/* Version Field */}
          <div className="p-4 bg-white border border-pink-100 shadow-sm rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-100 text-purple-600 border border-purple-200">
                <Layers className="w-4.5 h-4.5" />
              </div>
              <span className="text-sm font-bold text-purple-900">Version</span>
            </div>
            <span className="text-sm md:text-base font-mono font-bold text-purple-700 bg-purple-100/40 px-3 py-1.5 rounded-xl border border-purple-200">
              {serverData.version}
            </span>
          </div>

          {/* Status Field */}
          <div className="p-4 bg-white border border-pink-100 shadow-sm rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-green-100 text-green-700 border border-green-200">
                <Power className="w-4.5 h-4.5" />
              </div>
              <span className="text-sm font-bold text-purple-900">Status</span>
            </div>
            <span className="text-sm md:text-base font-bold text-green-700 bg-green-100/40 px-3 py-1.5 rounded-xl border border-green-200 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {serverData.status}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
