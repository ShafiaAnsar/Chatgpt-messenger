import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getServerSession } from 'next-auth/next'
import Sidebar from '@/components/Sidebar'
import { SessionProvider } from '@/components/SessionProvider'
import { authOptions } from './api/auth/[...nextauth]/route'
import Login from '@/components/Login'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat Gpt',
  description: 'My own chatgpt',
}

export default  async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <SessionProvider session={session}>
          {!session ? (<Login/>):(
            <div className='flex '>
          {/* {Sidebar} */}
          {/* <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]  ">
          <Sidebar/>
          </div> */}
          
          {/* clientprovider */}
          {/* <div className='bg-[#343541] flex-1'>
          {children}
          </div> */}
        {/* </div>)} */}
        
        {/* </SessionProvider> */} 
        <div className='flex '>
        {/* {Sidebar} */}
            <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]  ">
            <Sidebar/>
            </div>
        
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