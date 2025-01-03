import LandingLayout from '@/layouts/LandingLayout'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <LandingLayout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to<br />Pawscription
        </h1>
        <p className="text-gray-600 max-w-2xl mb-8">
          The ultimate platform for managing your pet's health and connecting with veterinarians.
        </p>
        <div className="flex gap-4">
          <Link
            href="/auth/register"
            className="bg-[#3B82F6] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Get started
          </Link>
          <Link
            href="/auth/login"
            className="text-[#3B82F6] hover:text-blue-700 px-6 py-3"
          >
            Log in
          </Link>
        </div>
      </div>
    </LandingLayout>
  )
}

