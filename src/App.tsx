/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Sparkles,
  ExternalLink,
  MessageCircle,
  FolderGit,
  Users,
  Compass,
  Server,
  BookOpen,
  Crown,
  Share2,
  PhoneCall
} from "lucide-react";
import { DeveloperInfo } from "./types";
import seoData from "../data/seo.json";
import logoImg from "./assets/images/logo_1783831327578.jpg";
import bgImage from "./assets/images/arazu_bg_1783961025832.jpg";

// Lazy-loaded subpages for high performance and code-splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ServerPage = lazy(() => import("./pages/Server"));
const Rules = lazy(() => import("./pages/Rules"));
const Owner = lazy(() => import("./pages/Owner"));
const Social = lazy(() => import("./pages/Social"));

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [developer, setDeveloper] = useState<DeveloperInfo | null>(null);
  const [devLoading, setDevLoading] = useState(true);

  // Dynamic SEO & Favicon Injection
  useEffect(() => {
    document.title = seoData.title;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMetaTag("description", seoData.description);
    updateMetaTag("keywords", seoData.keywords);
    updateMetaTag("author", seoData.author);
    updateMetaTag("robots", seoData.robots);
    updateMetaTag("theme-color", seoData.themeColor);

    // Open Graph
    updateMetaTag("og:title", seoData.ogTitle, true);
    updateMetaTag("og:description", seoData.ogDescription, true);
    updateMetaTag("og:image", seoData.ogImage, true);
    updateMetaTag("og:url", seoData.ogUrl, true);
    updateMetaTag("og:type", seoData.ogType, true);

    // Twitter Card
    updateMetaTag("twitter:card", seoData.twitterCard);
    updateMetaTag("twitter:title", seoData.ogTitle);
    updateMetaTag("twitter:description", seoData.ogDescription);
    updateMetaTag("twitter:image", seoData.ogImage);

    // Dynamic favicon
    let favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "shortcut icon";
      document.head.appendChild(favicon);
    }
    favicon.href = logoImg;
    favicon.type = "image/jpeg";
  }, []);

  // 1. Listen for page scroll to apply sticky header dynamics
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Client-side SPA Router Navigation handler
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    setIsDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 3. Fetch developer and community details dynamically from GitHub API (Zero hardcoded)
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load config.json");
        return res.json();
      })
      .then((data: DeveloperInfo) => {
        setDeveloper(data);
        setDevLoading(false);
      })
      .catch((err) => {
        console.error("API error: ", err);
        setDevLoading(false);
      });
  }, []);

  // 4. Match active route to component
  const renderActivePage = () => {
    // Standardize URL formatting to handle trailing slashes gracefully
    const path = currentPath.toLowerCase().replace(/\/$/, "") || "/";

    switch (path) {
      case "/":
      case "/home":
        return <Home onNavigate={navigateTo} />;
      case "/about":
        return <About />;
      case "/server":
        return <ServerPage />;
      case "/rules":
        return <Rules />;
      case "/owner":
        return <Owner />;
      case "/social":
        return <Social />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  // 5. Generate beautiful falling Sakura cherry blossom petals
  const renderSakuraPetals = () => {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 15 }).map((_, i) => {
          const left = `${(i * 7 + Math.random() * 5) % 100}%`;
          const size = `${Math.random() * 12 + 6}px`;
          const delay = `${Math.random() * 10}s`;
          const duration = `${Math.random() * 12 + 8}s`;
          const opacity = Math.random() * 0.5 + 0.2;
          return (
            <div
              key={i}
              className="sakura-petal"
              style={{
                left,
                width: size,
                height: size,
                animationDelay: delay,
                animationDuration: duration,
                opacity,
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-[#fdf2f8] text-[#2D1B4D] overflow-x-hidden flex flex-col selection:bg-pink-200 selection:text-pink-800">
      {/* Full Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none mix-blend-multiply" 
        style={{ backgroundImage: `url(${bgImage})` }} 
      />

      {/* Background cherry blossoms */}
      {renderSakuraPetals()}

      {/* Decorative backdrop gradients representing Sunset glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFB7C5] opacity-30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#fce7f3] opacity-40 blur-[120px] rounded-full pointer-events-none" />

      {/* STICKY HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/40 backdrop-blur-md shadow-lg py-3 border-b border-pink-100"
            : "bg-transparent py-5"
        }`}
        id="app-header"
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo brand */}
          <button
            onClick={() => navigateTo("/")}
            className="flex items-center gap-2.5 group text-left cursor-pointer"
            id="brand-logo-trigger"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-pink-400 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-300" />
              <img
                src={logoImg}
                alt="Arazu Logo"
                referrerPolicy="no-referrer"
                className={`rounded-lg object-cover border border-pink-200 transition-all duration-300 ${
                  isScrolled ? "w-8 h-8" : "w-10 h-10"
                }`}
              />
            </div>
            <div>
              <span className="font-extrabold font-display tracking-tight text-[#2D1B4D] block text-sm sm:text-base leading-none">
                ARAZU SMP
              </span>
            </div>
          </button>

          {/* Navigation links (Desktop only) */}
          <nav className="hidden md:flex items-center gap-1 bg-white/40 border border-pink-100 rounded-full px-1.5 py-1" id="desktop-navbar">
            {[
              { label: "Home", path: "/", icon: <Compass className="w-4 h-4" /> },
              { label: "Server", path: "/server/", icon: <Server className="w-4 h-4" /> },
              { label: "Rules", path: "/rules/", icon: <BookOpen className="w-4 h-4" /> },
              { label: "Social", path: "/social/", icon: <Share2 className="w-4 h-4" /> },
              { label: "Owner", path: "/owner/", icon: <Crown className="w-4 h-4" /> }
            ].map((navItem) => {
              const currentClean = currentPath.toLowerCase().replace(/\/$/, "") || "/";
              const targetClean = navItem.path.toLowerCase().replace(/\/$/, "") || "/";
              const isActive = currentClean === targetClean;

              return (
                <button
                  key={navItem.label}
                  onClick={() => navigateTo(navItem.path)}
                  className={`px-4 py-2 rounded-full font-semibold text-xs flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-pink-600 text-white shadow-md shadow-pink-200/50"
                      : "text-[#2D1B4D]/75 hover:text-pink-600 hover:bg-pink-50/50"
                  }`}
                >
                  {navItem.icon}
                  {navItem.label}
                </button>
              );
            })}
          </nav>

          {/* Developer Info (Desktop only) */}
          <div className="hidden md:flex items-center gap-3" id="desktop-dev-info">
            {devLoading ? (
              <div className="h-9 w-32 bg-white/40 border border-pink-100 rounded-full animate-pulse" />
            ) : developer ? (
              <a
                href={developer.website.portfolio || `https://wa.me/${developer.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 bg-white/45 border border-pink-100 rounded-full pl-2 pr-4 py-1.5 hover:bg-white/70 hover:border-pink-300 transition-all duration-300 shadow-sm group cursor-pointer"
                title="View Developer Portfolio"
              >
                <div className="w-6.5 h-6.5 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-extrabold text-[9px] shadow-sm">
                  {developer.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[9px] text-pink-600 font-bold uppercase tracking-wider mb-0.5">
                    Dev Info
                  </span>
                  <span className="text-xs font-extrabold text-[#2D1B4D] group-hover:text-pink-600 transition-colors">
                    {developer.name}
                  </span>
                </div>
                <ExternalLink className="w-3 h-3 text-[#2D1B4D]/40 group-hover:text-pink-600 transition-colors ml-1" />
              </a>
            ) : null}
          </div>

          {/* Menu Drawer Toggle Button (Mobile only) */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            id="mobile-drawer-toggle"
            className="md:hidden p-2.5 rounded-xl bg-white/50 hover:bg-white/80 border border-pink-100 text-[#2D1B4D] hover:text-pink-600 transition-all duration-200 cursor-pointer"
            aria-label="Open developer drawer menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* MOBILE & DEVELOPER HAMBURGER DRAWER */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-pink-950/20 backdrop-blur-sm z-50"
              id="drawer-backdrop"
            />

            {/* Side Drawer Body */}
            <motion.div
              initial={{ translateX: "100%" }}
              animate={{ translateX: 0 }}
              exit={{ translateX: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-[#fdf2f8]/95 backdrop-blur-xl border-l border-pink-100 z-50 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
              id="drawer-body"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between mb-8" id="drawer-header-controls">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-pink-600" />
                    <span className="font-extrabold font-display text-[#2D1B4D] text-base tracking-tight">
                      Arazu Menu
                    </span>
                  </div>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="p-1.5 rounded-lg bg-white/50 hover:bg-white/80 border border-pink-100 text-[#2D1B4D]/70 hover:text-pink-600 transition-colors cursor-pointer"
                    id="drawer-close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Mobile Navigation Routes */}
                <div className="flex flex-col gap-1.5 mb-8" id="drawer-nav">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-pink-600/70 block mb-2 px-2">
                    Menu Utama
                  </span>
                  {[
                    { label: "Home", path: "/", icon: <Compass className="w-4.5 h-4.5" /> },
                    { label: "Server", path: "/server/", icon: <Server className="w-4.5 h-4.5" /> },
                    { label: "Rules", path: "/rules/", icon: <BookOpen className="w-4.5 h-4.5" /> },
                    { label: "Social", path: "/social/", icon: <Share2 className="w-4.5 h-4.5" /> },
                    { label: "Owner", path: "/owner/", icon: <Crown className="w-4.5 h-4.5" /> }
                  ].map((navItem) => {
                    const currentClean = currentPath.toLowerCase().replace(/\/$/, "") || "/";
                    const targetClean = navItem.path.toLowerCase().replace(/\/$/, "") || "/";
                    const isActive = currentClean === targetClean;

                    return (
                      <button
                        key={navItem.label}
                        onClick={() => navigateTo(navItem.path)}
                        className={`w-full px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-3 transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-pink-600 text-white shadow-md shadow-pink-200/50"
                            : "text-[#2D1B4D]/80 hover:text-pink-600 hover:bg-pink-50/50 border border-transparent"
                        }`}
                      >
                        {navItem.icon}
                        {navItem.label}
                      </button>
                    );
                  })}
                </div>

                <div className="h-px bg-pink-100 mb-6" />

                {/* Developer Profile Section (All dynamic from API) */}
                <div className="flex flex-col gap-3" id="drawer-dev-details">
                  <div className="flex items-center gap-1.5 px-2 mb-1">
                    <FolderGit className="w-3.5 h-3.5 text-purple-600" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-purple-700/60">
                      Developer Information
                    </span>
                  </div>

                  {devLoading ? (
                    /* Dynamic Skeleton Loading */
                    <div className="flex flex-col gap-2 p-3 bg-white/60 border border-pink-100 rounded-xl animate-pulse">
                      <div className="h-4 bg-pink-100 rounded w-1/2" />
                      <div className="h-3 bg-pink-100 rounded w-3/4" />
                      <div className="h-3 bg-pink-100 rounded w-2/3" />
                    </div>
                  ) : developer ? (
                    <div className="flex flex-col gap-2" id="developer-dynamic-card">
                      {/* Name Card */}
                      <div className="p-3.5 bg-pink-100/40 border border-pink-100 rounded-xl">
                        <span className="text-[10px] text-pink-600 font-bold uppercase tracking-wider block mb-0.5">
                          Developer
                        </span>
                        <p className="font-extrabold text-sm text-[#2D1B4D] font-display">
                          {developer.name}
                        </p>
                      </div>

                      {/* WhatsApp Developer Link */}
                      <a
                        href={`https://wa.me/${developer.contact.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-white/70 hover:bg-white border border-pink-100 rounded-xl flex items-center justify-between text-[#2D1B4D]/85 hover:text-pink-600 transition-all group shadow-sm"
                      >
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4 text-emerald-600" />
                          <span className="text-xs font-bold">WhatsApp Developer</span>
                        </div>
                        <PhoneCall className="w-3.5 h-3.5 text-[#2D1B4D]/40 group-hover:text-emerald-600 transition-colors" />
                      </a>

                      {/* Portfolio Link */}
                      <a
                        href={developer.website.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-white/70 hover:bg-white border border-pink-100 rounded-xl flex items-center justify-between text-[#2D1B4D]/85 hover:text-pink-600 transition-all group shadow-sm"
                      >
                        <div className="flex items-center gap-2">
                          <Compass className="w-4 h-4 text-pink-600" />
                          <span className="text-xs font-bold">Portfolio</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-[#2D1B4D]/40 group-hover:text-pink-600 transition-colors" />
                      </a>

                      {/* Divider for community */}
                      <div className="flex items-center gap-1.5 px-2 mt-4 mb-1">
                        <Users className="w-3.5 h-3.5 text-purple-600" />
                        <span className="text-[10px] uppercase font-bold tracking-widest text-purple-700/60">
                          Community
                        </span>
                      </div>

                      {/* Community Name Badge */}
                      <div className="px-3 py-2 bg-purple-100/60 border border-purple-200 rounded-xl text-xs text-purple-700 font-bold mb-1">
                        {developer.community.name}
                      </div>

                      {/* Website Community Link */}
                      <a
                        href={developer.community.website}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-white/70 hover:bg-white border border-pink-100 rounded-xl flex items-center justify-between text-[#2D1B4D]/85 hover:text-pink-600 transition-all group shadow-sm"
                      >
                        <span className="text-xs font-bold">Website Community</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#2D1B4D]/40 group-hover:text-purple-600 transition-colors" />
                      </a>

                      {/* Discord Community Link */}
                      <a
                        href={developer.community.discord}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-white/70 hover:bg-white border border-pink-100 rounded-xl flex items-center justify-between text-[#2D1B4D]/85 hover:text-pink-600 transition-all group shadow-sm"
                      >
                        <span className="text-xs font-bold">Discord Community</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#2D1B4D]/40 group-hover:text-indigo-600 transition-colors" />
                      </a>
                    </div>
                  ) : (
                    <div className="text-xs text-[#2D1B4D]/60 px-2 italic">Gagal memuat developer info.</div>
                  )}
                </div>
              </div>

              {/* Drawer footer copyright link */}
              <div className="pt-6 border-t border-pink-100 text-[10px] text-pink-600/60 font-mono text-center">
                Built Dynamic with React
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MAIN RENDER VIEW AREA WITH ROUTER & PAGE ANIMATIONS */}
      <main className="flex-1 pt-24 pb-12 relative z-20 max-w-5xl w-full mx-auto" id="app-main">
        <AnimatePresence mode="wait">
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-[50vh]" id="page-suspense-loader">
                <div className="relative flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin" />
                  <div className="absolute w-6 h-6 border-4 border-purple-200 border-b-purple-600 rounded-full animate-spin [animation-direction:reverse]" />
                </div>
              </div>
            }
          >
            <motion.div
              key={currentPath}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full flex justify-center"
              id="active-page-wrapper"
            >
              {renderActivePage()}
            </motion.div>
          </Suspense>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="relative z-30 bg-white/40 border-t border-pink-100 py-8 px-4" id="app-footer">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <span className="font-extrabold font-display tracking-tight text-[#2D1B4D] text-base">
              ARAZU SMP
            </span>
            <p className="text-xs text-purple-900/60">
              Copyright © {new Date().getFullYear()} Arazu SMP. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-[#2D1B4D]/60 font-mono">
            <span>Powered by:</span>
            {devLoading ? (
              <span className="w-16 h-3 bg-pink-100 rounded animate-pulse" />
            ) : developer ? (
              <a
                href={developer.website.portfolio}
                target="_blank"
                rel="noreferrer"
                className="text-pink-600 hover:text-pink-700 font-bold underline decoration-dotted transition-colors"
                id="footer-developer-link"
              >
                {developer.name}
              </a>
            ) : (
              <span>Developer</span>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
