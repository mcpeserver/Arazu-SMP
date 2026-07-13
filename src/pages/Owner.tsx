import { motion } from "motion/react";
import { Shield, MessageCircle, Crown, UserCheck } from "lucide-react";
import ownersData from "../../data/owners.json";

// Helper to format phone number to clean wa.me format
const formatWhatsAppLink = (phone: string) => {
  const cleanNum = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNum}`;
};

export default function Owner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-80px)] px-4 py-8"
      id="owner-container"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FFB7C5] opacity-20 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md md:max-w-xl glass-card rounded-3xl p-6 md:p-8 relative overflow-hidden" id="owner-card">
        {/* Border accent */}
        <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-pink-400 via-purple-500 to-pink-300" />

        <div className="flex items-center gap-2 mb-6" id="owner-title-group">
          <div className="p-2 rounded-lg bg-pink-100 border border-pink-200 text-pink-600">
            <Crown className="w-5 h-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black font-display bg-gradient-to-r from-pink-700 to-purple-900 bg-clip-text text-transparent">
            Owner & Staf Server
          </h2>
        </div>

        {/* Owner Card (Highlighted) */}
        <div className="mb-6" id="owner-primary-section">
          <span className="text-[10px] uppercase font-bold tracking-widest text-pink-600 block mb-2 flex items-center gap-1">
            <Crown className="w-3.5 h-3.5 fill-pink-600/20 text-pink-600" />
            Server Owner
          </span>
          <div className="p-5 bg-gradient-to-br from-pink-100/40 to-transparent border border-pink-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold font-display text-xl shadow-lg">
                {ownersData.owner.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-[#2D1B4D] leading-tight font-display">{ownersData.owner.name}</h3>
                <span className="text-xs text-pink-600 font-semibold tracking-wide block mt-0.5">Primary Contact</span>
              </div>
            </div>
            <a
              href={formatWhatsAppLink(ownersData.owner.whatsapp)}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-pink-600 text-white hover:bg-pink-700 active:scale-95 font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-pink-200/50 transition-all self-start sm:self-auto cursor-pointer uppercase tracking-widest"
            >
              <MessageCircle className="w-4 h-4 fill-white text-pink-600" />
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Admins Section */}
        <div id="admins-section">
          <span className="text-[10px] uppercase font-bold tracking-widest text-purple-600 block mb-3 flex items-center gap-1">
            <UserCheck className="w-3.5 h-3.5 text-purple-600" />
            Server Administrators
          </span>
          <div className="flex flex-col gap-3" id="admins-list">
            {ownersData.admins.map((admin, idx) => (
              <div
                key={idx}
                className="p-4 bg-white border border-pink-100 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-pink-300 transition-colors duration-300 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-md">
                    {admin.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#2D1B4D]">{admin.name}</h4>
                    <span className="text-[11px] text-purple-800/80 font-medium tracking-wide">Administrator</span>
                  </div>
                </div>
                <a
                  href={formatWhatsAppLink(admin.whatsapp)}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border-2 border-pink-200 text-pink-600 hover:bg-pink-50 rounded-xl bg-white active:scale-95 text-xs font-bold flex items-center justify-center gap-1.5 transition-all self-start sm:self-auto uppercase tracking-wider"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-pink-600" />
                  Hubungi Admin
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
