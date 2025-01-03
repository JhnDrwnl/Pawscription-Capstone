import LandingLayout from '@/layouts/LandingLayout'
import AuthForm from '@/components/auth/AuthForm'

export default function RegisterPage() {
  return (
    <LandingLayout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
        <h1 className="text-4xl font-bold mb-8">Create a Pawscription Account</h1>
        <AuthForm type="register" />
      </div>
    </LandingLayout>
  )
}

