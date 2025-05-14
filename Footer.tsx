import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container py-6">
        <p className="text-center text-base text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} DevSol. All rights reserved.
        </p>
      </div>
    </footer>
  )
} 