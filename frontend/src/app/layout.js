//src/app/layout.js
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google';
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Pawscription',
  description: 'The ultimate platform for managing your pet\'s health and connecting with veterinarians',
  keywords: 'pet health, veterinary, pet care, prescriptions, appointments',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white font-sans min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

