import React from 'react'

interface Project {
  title: string
  description: string
  url: string
}

const projects: Project[] = [
  {
    title: 'ISP Dashboard',
    description: 'ISP management dashboard built with modern web tech.',
    url: 'https://isp.nochwired.co.ke/',
  },
  {
    title: 'JustShoppinn Seller Portal',
    description: 'E-commerce seller dashboard for managing listings and orders.',
    url: 'https://seller.justshoppinn.com/signin',
  },
  {
    title: 'JustShoppinn Landing',
    description: 'Main landing page for the JustShoppinn e-commerce platform.',
    url: 'https://justshoppinn.com/',
  },
]

const Projects: React.FC = () => {
  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Live Projects</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(({ title, description, url }) => (
          <div key={title} className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm">{description}</p>
              <a href={url} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-blue-500 underline">
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
