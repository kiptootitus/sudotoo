import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-center border-t dark:border-gray-700 mt-8">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Titus Kiptoo. Built with ❤️ using React & Tailwind CSS.
      </p>
      <p className="text-sm mt-1">
        <a
          href="https://github.com/kiptootitus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          GitHub @kiptootitus
        </a>
      </p>
    </footer>
  )
}

export default Footer
