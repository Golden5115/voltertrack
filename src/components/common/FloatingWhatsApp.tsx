import React from 'react';
import { COMPANY_CONTACT } from '../../data/contactData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="WhatsApp live chat support" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center">
      <a
        href={`${COMPANY_CONTACT.whatsappUrl}?text=${encodeURIComponent(COMPANY_CONTACT.whatsappDefaultMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl shadow-emerald-950/30 hover:shadow-emerald-600/50 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/30 backdrop-blur-sm cursor-pointer min-h-[44px]"
        aria-label="Chat with VolterTrack on WhatsApp (Online 24/7)"
      >
        {/* WhatsApp Icon */}
        <div className="relative">
          <svg 
            className="w-5 h-5 sm:w-6 sm:h-6 fill-current" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8 2.52 1.09 2.52.73 2.97.69.45-.04 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28"/>
          </svg>
          
          {/* Live pulsing online green/white indicator */}
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-100 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-200"></span>
          </span>
        </div>

        {/* Text Details */}
        <div className="flex flex-col text-left pr-0.5 sm:pr-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold leading-tight hidden sm:inline">Chat on WhatsApp</span>
            <span className="text-xs font-bold leading-tight sm:hidden">WhatsApp</span>
            <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/20 uppercase font-mono font-extrabold tracking-wider leading-none">
              24/7
            </span>
          </div>
          <span className="hidden sm:block text-[10px] text-emerald-100 font-medium leading-none mt-1">
            Always online to respond
          </span>
        </div>
      </a>
    </aside>
  );
};

