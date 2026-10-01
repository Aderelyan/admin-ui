import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-12 text-slate-100">
      {/* Latar belakang dekoratif */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-fuchsia-600/25 blur-3xl" />

      <section className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12">
        <div className="mb-8 flex items-center justify-center gap-6">
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img
              src={viteLogo}
              alt="Vite logo"
              className="h-16 w-16 transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_1.5rem_#646cffaa]"
            />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img
              src={reactLogo}
              alt="React logo"
              className="h-16 w-16 animate-[spin_20s_linear_infinite] transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_1.5rem_#61dafbaa]"
            />
          </a>
        </div>

        <p className="text-sm font-medium tracking-[0.3em] text-indigo-300 uppercase">
          Selamat datang
        </p>
        <h1 className="mt-3 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Aderelyan
        </h1>
        <p className="mt-4 text-slate-400">Admin UI · Vite + React + Tailwind</p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:shadow-fuchsia-500/40 active:translate-y-0 focus:ring-2 focus:ring-fuchsia-400 focus:outline-none"
          >
            Count is {count}
          </button>
          <p className="mt-4 text-sm text-slate-400">
            Edit <code className="rounded bg-white/10 px-1.5 py-0.5 text-slate-200">src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          Klik logo Vite dan React untuk mempelajari lebih lanjut
        </p>
      </section>
    </main>
  )
}

export default App
