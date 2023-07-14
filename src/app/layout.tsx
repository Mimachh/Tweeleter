import './globals.css'
import type { Metadata } from 'next'
import Providers from './providers'
import ThemeSwitcher from './components/ThemeSwitcher'
import Navbar from './components/Navbar'
import { Poppins } from 'next/font/google'
import Background from './components/Background'
import Title from './components/Texts/Title'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 

      <body className={`${poppins.className} dark:bg-dark bg-light`}>
        <Navbar />
        <Background />
        <Providers> 
          <Title text="Tweeleter" className='mb-16
                lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl lg:gap-8 md:gap-y-16'/>
          <ThemeSwitcher />
          
          {children}
        </Providers>
      </body>
    </html>
  )
}