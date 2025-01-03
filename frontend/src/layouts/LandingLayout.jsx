import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'

export default function LandingLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

