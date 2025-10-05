import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
      </div>

      <div className="relative z-10 mx-auto mt-24 grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-7">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Build with light-speed precision
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            JJH is a modern, abstract canvas for tech-forward products. Experience a live circle drawn by a yellow ray—an ambient, dark-mode hero powered by real-time 3D.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#get-started"
              className="rounded-lg bg-yellow-400 px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-yellow-300"
            >
              Launch Studio
            </a>
            <a
              href="#features"
              className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              Explore Features
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur">
            <dl className="grid grid-cols-2 gap-6 text-center">
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/50">Mode</dt>
                <dd className="mt-1 text-xl font-semibold">Dark</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/50">Engine</dt>
                <dd className="mt-1 text-xl font-semibold">Spline 3D</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/50">Focus</dt>
                <dd className="mt-1 text-xl font-semibold">Abstract</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/50">Vibe</dt>
                <dd className="mt-1 text-xl font-semibold">Modern</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
