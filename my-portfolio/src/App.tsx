import React, { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors min-h-screen w-full">
        {/* HEADER always full width */}
        <Header />

        {/* CONTENT inside responsive container */}
        <main className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-[1440px] mx-auto">
          <div className="text-center my-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Toggle {darkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>

          <About />
          <Projects />
          <Contact />
        </main>

        {/* FOOTER always full width */}
        <Footer />
      </div>
    </div>
  )
}

export default App
