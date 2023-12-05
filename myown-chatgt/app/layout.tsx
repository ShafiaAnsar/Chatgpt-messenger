import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat Gpt',
  description: 'My own chatgpt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <div className='flex '>
          {/* {Sidebar} */}

          {/* clientprovider */}
          <div className='bg-[#343541] flex-1'>
          {children}
          </div>
        </div>
        </body>
    </html>
  )
}


// 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