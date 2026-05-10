"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, DollarSign, Mail, Menu, Phone, Sparkles, Truck, X } from "lucide-react";

const pages = {
  home: {
    label: "Home",
    title: "Broke College Boys. Serious Hauling.",
    eyebrow: "Danville, KY • Junk Removal • Pickups • Cleanouts",
    body:
      "BCB Hauling is Christian, Ezra, and Eddie — three college-age guys working fast, pricing fair, and making the annoying jobs disappear.",
  },
  services: {
    label: "Services",
    title: "Pick the job. We bring the muscle.",
    eyebrow: "Fast local hauling",
    body:
      "Junk removal, garage cleanouts, lawn cleanup, delivery runs, furniture pickups, and small moving jobs around Danville and surrounding areas.",
  },
  pricing: {
    label: "Pricing",
    title: "Simple quotes. No weird fees.",
    eyebrow: "Text photos for fastest pricing",
    body:
      "Most jobs are priced by load size, time, distance, disposal fees, and how heavy or awkward the items are. Send pictures and we’ll give a fast estimate.",
  },
  contact: {
    label: "Contact",
    title: "Open the door. Book the haul.",
    eyebrow: "Free quote request",
    body:
      "Call, text, or submit a request. Include your name, phone number, service type, and a short description of what needs moved or removed.",
  },
};

const services = [
  "Junk Removal",
  "Garage Cleanouts",
  "Lawn Cleanup",
  "Furniture Pickup",
  "Local Delivery",
  "Small Moving Help",
];

function PageDisplayBox({
  activePage,
  onNavigate,
}: {
  activePage: keyof typeof pages;
  onNavigate: (key: string) => void;
}) {
  const page = pages[activePage as keyof typeof pages];

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="absolute -inset-12 rounded-full bg-[#B79A57]/20 blur-3xl" />

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative"
      >
        <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-8 shadow-2xl md:h-[440px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(183,154,87,.25),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,.08),transparent_30%)]" />
          <div className="absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-[#B79A57] to-transparent" />

          <div className="relative flex h-full flex-col justify-between">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[.35em] text-[#B79A57]">
                Current Section
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activePage}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.45 }}
                >
                  <h2 className="text-6xl font-black tracking-tight text-white md:text-8xl">
                    {page.label}
                  </h2>

                  <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                    {page.body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap gap-3">
              {Object.entries(pages).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => onNavigate(key)}
                  className={`rounded-full border px-5 py-3 text-sm font-bold transition ${
                    activePage === key
                      ? "border-[#B79A57] bg-[#B79A57] text-black"
                      : "border-white/10 bg-white/5 text-white hover:border-[#B79A57]/70"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function PagePanel({ activePage }: { activePage: keyof typeof pages }) {
  const page = pages[activePage];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activePage}
        initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
        transition={{ duration: 0.45 }}
        className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur-xl md:p-10"
      >
        <p className="mb-3 text-sm uppercase tracking-[.3em] text-[#B79A57]">
          {page.eyebrow}
        </p>
        <h2 className="mb-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          {page.title}
        </h2>
        <p className="max-w-3xl text-lg leading-8 text-zinc-300">{page.body}</p>

        {activePage === "home" && (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Fast replies", "Fair pricing", "Hard workers"].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-black/30 p-5">
                <Sparkles className="mb-3 text-[#B79A57]" />
                <p className="font-bold">{item}</p>
              </div>
            ))}
          </div>
        )}

        {activePage === "services" && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="group rounded-3xl border border-white/10 bg-black/35 p-5 transition hover:-translate-y-1 hover:border-[#B79A57]/70"
              >
                <Truck className="mb-4 text-[#B79A57]" />
                <p className="text-lg font-black">{service}</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Text a photo and we’ll quote it fast.
                </p>
              </div>
            ))}
          </div>
        )}

        {activePage === "pricing" && (
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Small Pickup", "Single items, light loads, quick runs"],
              ["Half Load", "Garage junk, furniture, yard debris"],
              ["Full Load", "Bigger cleanouts and heavy hauling"],
            ].map(([name, desc]) => (
              <div key={name} className="rounded-3xl border border-[#B79A57]/25 bg-black/40 p-6">
                <DollarSign className="mb-4 text-[#B79A57]" />
                <h3 className="text-2xl font-black">{name}</h3>
                <p className="mt-3 text-zinc-400">{desc}</p>
                <p className="mt-5 text-sm text-[#B79A57]">Custom quote after photos</p>
              </div>
            ))}
          </div>
        )}

        {activePage === "contact" && (
          <div className="mt-8 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
            <div className="space-y-4">
              <a
                href="tel:8595839811"
                className="flex items-center gap-3 rounded-3xl border border-white/10 bg-black/35 p-5 font-bold hover:border-[#B79A57]"
              >
                <Phone className="text-[#B79A57]" /> 859-583-9811
              </a>
              <a
                href="mailto:ezragreybrandt@gmail.com"
                className="flex items-center gap-3 rounded-3xl border border-white/10 bg-black/35 p-5 font-bold hover:border-[#B79A57]"
              >
                <Mail className="text-[#B79A57]" /> ezragreybrandt@gmail.com
              </a>
            </div>

            <form
              action="https://formsubmit.co/ezragreybrandt@gmail.com"
              method="POST"
              className="grid gap-4 rounded-3xl border border-white/10 bg-black/35 p-5"
            >
              <input type="hidden" name="_subject" value="New BCB Hauling Quote Request" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                name="name"
                required
                placeholder="Your name"
                className="rounded-2xl border border-white/10 bg-black px-4 py-4 outline-none focus:border-[#B79A57]"
              />
              <input
                name="phone"
                required
                placeholder="Phone number"
                className="rounded-2xl border border-white/10 bg-black px-4 py-4 outline-none focus:border-[#B79A57]"
              />
              <select
                name="service"
                className="rounded-2xl border border-white/10 bg-black px-4 py-4 outline-none focus:border-[#B79A57]"
              >
                {services.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
              <textarea
                name="description"
                required
                rows={5}
                placeholder="Describe the job"
                className="rounded-2xl border border-white/10 bg-black px-4 py-4 outline-none focus:border-[#B79A57]"
              />
              <button className="rounded-2xl bg-[#B79A57] px-6 py-4 font-black text-black transition hover:scale-[1.02]">
                Send Quote Request
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default function BCBHaulingWebsite() {
  const [activePage, setActivePage] = useState<keyof typeof pages>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [nextPageLabel, setNextPageLabel] = useState("Home");

  const stats = useMemo(
    () => [
      ["4", "Core services"],
      ["3", "Hard workers"],
      ["1", "Call away"],
    ],
    []
  );

  function navigatePage(key: string) {
    const pageKey = key as keyof typeof pages;
    if (pageKey === activePage || transitioning) return;

    setNextPageLabel(pages[pageKey].label);
    setTransitioning(true);
    setMenuOpen(false);

    setTimeout(() => {
      setActivePage(pageKey);
    }, 650);

    setTimeout(() => {
      setTransitioning(false);
    }, 1450);
  }

  return (
    <>
      <AnimatePresence>
  {transitioning && (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[200] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.25)), url("/transition-door.jpg")',
      }}
    />
  )}
</AnimatePresence>


      <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-[#B79A57] selection:text-black">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.055)_1px,transparent_1px)] bg-[size:72px_72px]" />
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#B79A57]/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-white/10 blur-[140px]" />
        </div>

        <nav className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-black/55 px-4 py-3 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <button onClick={() => navigatePage("home")} className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#B79A57] font-black text-black">
                BCB
              </div>
              <div className="hidden text-left sm:block">
                <p className="font-black leading-4">BCB Hauling</p>
                <p className="text-xs text-zinc-400">Broke College Boys</p>
              </div>
            </button>

            <div className="hidden items-center gap-2 md:flex">
              {Object.entries(pages).map(([key, page]) => (
                <button
                  key={key}
                  onClick={() => navigatePage(key)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    activePage === key
                      ? "bg-white text-black"
                      : "text-zinc-300 hover:bg-white/10"
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>

            <a
              href="tel:8595839811"
              className="hidden rounded-full bg-[#B79A57] px-5 py-3 font-black text-black md:block"
            >
              Call Now
            </a>

            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {menuOpen && (
              <div className="mt-4 grid max-h-[70vh] gap-3 overflow-y-auto rounded-[1.5rem] border border-white/10 bg-black/95 p-3 shadow-2xl md:hidden">
              {Object.entries(pages).map(([key, page]) => (
                <button
                  key={key}
                  onClick={() => navigatePage(key)}
                  className="rounded-xl border border-white/10 bg-white/10 px-5 py-5 text-left text-xl font-black"
                >
                  {page.label}
                </button>
              ))}
            </div>
          )}
        </nav>

        <section className="relative px-5 pb-16 pt-32 md:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B79A57]/30 bg-[#B79A57]/10 px-4 py-2 text-sm font-bold text-[#B79A57]">
                <Sparkles size={16} /> New black + Centre gold brand
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[.95] tracking-tight md:text-7xl">
                Hauling that feels less sketchy and more locked in.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                Junk removal, garage cleanup, lawn cleanup, furniture pickup, and delivery from
                Christian, Ezra, and Eddie.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => navigatePage("contact")}
                  className="group rounded-full bg-[#B79A57] px-6 py-4 font-black text-black transition hover:scale-105"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 inline transition group-hover:translate-x-1" size={18} />
                </button>
                <button
                  onClick={() => navigatePage("pricing")}
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-4 font-black text-white transition hover:border-[#B79A57]"
                >
                  See Pricing
                </button>
              </div>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
                {stats.map(([number, label]) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur"
                  >
                    <p className="text-3xl font-black text-[#B79A57]">{number}</p>
                    <p className="text-xs text-zinc-400">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <PageDisplayBox activePage={activePage} onNavigate={navigatePage} />
          </div>
        </section>

        <section className="px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <PagePanel activePage={activePage} />
          </div>
        </section>

        <section className="px-5 py-20">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-black/45 p-8 backdrop-blur-xl md:p-12">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[.3em] text-[#B79A57]">
                  How it works
                </p>
                <h2 className="text-4xl font-black md:text-5xl">
                  Door transition. Clean pages. Fast booking.
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ["1", "Send photos", "Show us the pile, item, garage, or yard."],
                  ["2", "Get quoted", "We price based on load, time, distance, and disposal."],
                  ["3", "We haul it", "We show up ready and get it out of your way."],
                ].map(([step, title, desc]) => (
                  <motion.div
                    key={step}
                    whileHover={{ y: -8, rotate: -1 }}
                    className="rounded-3xl border border-white/10 bg-white/[0.045] p-6"
                  >
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#B79A57] font-black text-black">
                      {step}
                    </div>
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="px-5 pb-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
            <p>© 2026 BCB Hauling — Broke College Boys.</p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:8595839811" className="hover:text-[#B79A57]">
                859-583-9811
              </a>
              <a href="mailto:ezragreybrandt@gmail.com" className="hover:text-[#B79A57]">
                ezragreybrandt@gmail.com
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}


