import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="py-4 px-6">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Pawscription" 
            width={32} 
            height={32}
          />
          <span className="text-xl font-semibold">Pawscription</span>
        </Link>
        <div className="space-x-4">
          <Link
            href="/auth/login"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/auth/register"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}

