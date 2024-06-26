import Header from '@/components/header'
import './globals.css'
import { Nunito } from 'next/font/google'
import Footer from '@/components/footer'
import ThemeContextProvider from '@/context/theme-context'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from "react-hot-toast";
import ThemeSwitch from '@/components/theme-switch'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Personal Portfolio | jignesh',
  description: 'Jignesh is a full-stack developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${nunito.className}bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
         <div className="bg-[#abefe4] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
         <div className="bg-[#bab2f5] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
         <ThemeContextProvider>
          <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
          <ThemeSwitch />
          </ActiveSectionContextProvider>
          </ThemeContextProvider>
      </body>
    </html>
  )
}
