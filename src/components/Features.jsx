import React from 'react';
import { Rocket, Shield, Zap, Layers } from 'lucide-react';

const items = [
  {
    title: 'Blazing Performance',
    desc: 'Vite-powered React, optimized for speed with zero-config hot reloading.',
    Icon: Zap,
  },
  {
    title: 'Secure Foundations',
    desc: 'Hardened defaults and best practices baked into the stack.',
    Icon: Shield,
  },
  {
    title: 'Composable UI',
    desc: 'Tailwind + shadcn patterns for scalable, consistent design.',
    Icon: Layers,
  },
  {
    title: 'Launch-Ready',
    desc: 'Deploy instantly. Iterate faster. Ship with confidence.',
    Icon: Rocket,
  },
];

function Features() {
  return (
    <section id="features" className="relative isolate border-t border-white/10 bg-black py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-[0] bg-[radial-gradient(40%_50%_at_50%_0%,rgba(250,204,21,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to start fast</h2>
          <p className="mt-4 text-base text-white/70">
            Opinionated defaults, clean components, and a cinematic hero. Pair it with your API and go.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {items.map(({ title, desc, Icon }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-yellow-400/30 hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400 ring-1 ring-yellow-400/20">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
