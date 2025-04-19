import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="p-6 text-center border-b dark:border-gray-700">
      <h1 className="text-3xl font-bold">Titus Kiptoo - Software Engineer</h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        @kiptootitus | Data Analyst | Full-Stack Dev | Docker | ML |{' '}
        <a href="https://sudoto.com" className="underline text-blue-500">sudoto.com</a>
      </p>
    </header>
  )
}

export default Header
