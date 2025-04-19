import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)
  const [message, setMessage] = useState<string | null>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(
        () => {
          setMessage('✅ Message sent successfully!')
          form.current?.reset()
        },
        (error) => {
          setMessage('❌ Failed to send message. Please try again later.')
          console.error(error)
        }
      )
  }

  return (
    <section className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="user_name" className="block text-left mb-1">Name</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="user_email" className="block text-left mb-1">Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-left mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full p-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      {message && (
        <p className="mt-4 text-sm text-green-500 dark:text-green-400">{message}</p>
      )}
    </section>
  )
}

export default Contact
