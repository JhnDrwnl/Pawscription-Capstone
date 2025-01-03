export default function Footer() {
    const footerSections = {
      ABOUT: {
        links: [
          { name: 'Company', href: '/company' },
          { name: 'Team', href: '/team' },
        ]
      },
      SERVICES: {
        links: [
          { name: 'Pet Care', href: '/services/pet-care' },
          { name: 'Veterinary', href: '/services/veterinary' },
        ]
      },
      LEGAL: {
        links: [
          { name: 'Privacy', href: '/legal/privacy' },
          { name: 'Terms', href: '/legal/terms' },
        ]
      },
      CONTACT: {
        links: [
          { name: 'Support', href: '/contact/support' },
        ]
      }
    }
  
    return (
      <footer className="bg-[#1F2937] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {Object.entries(footerSections).map(([section, { links }]) => (
            <div key={section}>
              <h3 className="text-gray-400 font-medium mb-4">{section}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="md:col-span-1">
            <h3 className="text-gray-400 font-medium mb-4">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <p className="text-gray-300 text-sm mb-4">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-white text-gray-900 rounded-lg"
              />
              <button
                type="submit"
                className="bg-[#3B82F6] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>© 2023 Pawscription, Inc. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  
  