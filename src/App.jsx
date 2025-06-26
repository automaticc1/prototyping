import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-blue-500">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold">Vite + React + Tailwind</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* Tailwind Test Section */}
      <div className="mt-10 space-y-4">
        <div className="text-red-500">This should be red</div>
        <div className="text-green-500">This should be green</div>
        <div className="bg-yellow-200 p-2 text-black">Yellow background</div>
        <div className="border-2 border-blue-500 p-2">Blue border</div>
        <div className="text-2xl font-extrabold underline">Large, bold, underlined</div>
        <div className="rounded-full bg-purple-500 w-16 h-16 flex items-center justify-center text-white">Circle</div>
      </div>
    </div>
  )
}

export default App
