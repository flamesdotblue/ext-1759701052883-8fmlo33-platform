import React from 'react';
import { Rocket } from 'lucide-react';

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400 ring-1 ring-yellow-400/20">
                <Rocket size={18} />
              </span>
              <span className="text-sm font-semibold tracking-wide text-white">JJH</span>
            </a>
            <div className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
              <a href="#features" className="transition hover:text-white">Features</a>
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#get-started"
                className="rounded-lg bg-yellow-400 px-3.5 py-2 text-sm font-medium text-black shadow-sm transition hover:bg-yellow-300"
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
