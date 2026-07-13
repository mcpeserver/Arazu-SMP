import { motion } from "motion/react";
import { MessageSquare, MessageCircle, Play, Globe, Share2, HelpCircle } from "lucide-react";
import socialData from "../../data/social.json";

export default function Social() {
  const getSocialIcon = (key: string) => {
    switch (key) {
      case "tiktok":
        return <Play className="w-5 h-5 text-pink-600 fill-pink-100" />;
      case "whatsapp_channel":
        return <MessageCircle className="w-5 h-5 text-emerald-600" />;
      case "whatsapp_group":
        return <MessageCircle className="w-5 h-5 text-green-600" />;
      case "discord":
        return <MessageSquare className="w-5 h-5 text-indigo-600" />;
      case "website":
        return <Globe className="w-5 h-5 text-pink-600" />;
      default:
        return <HelpCircle className="w-5 h-5 text-purple-600" />;
    }
  };

  const getSocialLabel = (key: string) => {
    switch (key) {
      case "tiktok":
        return "TikTok Channel";
      case "whatsapp_channel":
        return "WhatsApp Channel";
      case "whatsapp_group":
        return "WhatsApp Group";
      case "discord":
        return "Discord Server";
      case "website":
        return "Website Resmi";
      default:
        return key;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-80px)] px-4 py-8"
      id="social-container"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FFB7C5] opacity-20 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md md:max-w-xl glass-card rounded-3xl p-6 md:p-8 relative overflow-hidden" id="social-card">
        {/* Border accent */}
        <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-pink-400 via-purple-500 to-pink-300" />

        <div className="flex items-center gap-2 mb-6" id="social-title-group">
          <div className="p-2 rounded-lg bg-pink-100 border border-pink-200 text-pink-600">
            <Share2 className="w-5 h-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black font-display bg-gradient-to-r from-pink-700 to-purple-900 bg-clip-text text-transparent">
            Sosial Media & Komunitas
          </h2>
        </div>

        <p className="text-sm text-purple-900/60 mb-6 font-bold">
          Bergabunglah dengan komunitas kami untuk mendapatkan berita terbaru, mendiskusikan ekonomi server, dan mengobrol bersama sesama player.
        </p>

        {/* Social items list */}
        <div className="flex flex-col gap-4" id="social-links-list">
          {Object.entries(socialData).map(([key, value]) => {
            const isAvailable = value !== "Belum tersedia";
            return (
              <div
                key={key}
                className="p-4 bg-white border border-pink-100 rounded-2xl flex items-center justify-between gap-4 hover:border-pink-300 transition-colors duration-300 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-pink-100/40 rounded-xl border border-pink-200">
                    {getSocialIcon(key)}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#2D1B4D]">{getSocialLabel(key)}</h3>
                    <span className="text-xs text-purple-900/60 font-mono select-all truncate max-w-[150px] sm:max-w-[280px] block mt-0.5">
                      {value}
                    </span>
                  </div>
                </div>

                {isAvailable ? (
                  <a
                    href={value}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border-2 border-pink-200 text-pink-600 hover:bg-pink-50 rounded-xl bg-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
                  >
                    Buka Link
                  </a>
                ) : (
                  <span className="px-3 py-1.5 bg-pink-50 text-pink-300 text-xs font-bold rounded-xl border border-pink-100">
                    Belum tersedia
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
