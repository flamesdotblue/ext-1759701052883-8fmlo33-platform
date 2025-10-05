import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} JJH. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-white/70 transition hover:text-white">Privacy</a>
            <span className="text-white/20">•</span>
            <a href="#" className="text-white/70 transition hover:text-white">Terms</a>
            <span className="text-white/20">•</span>
            <a href="mailto:hello@jjh.dev" className="text-white/70 transition hover:text-white">hello@jjh.dev</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
