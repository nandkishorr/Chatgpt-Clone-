
import Sidebar from './Components/Sidebar'
import './globals.css'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Login from './Components/Login';
import { Sessionprovider } from './Components/Sessionprovider';
import Clientprovider from './Components/Clientprovider';




export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
 console.log(session);
  return (
    <html lang="en">
      <head />
      <body>
        <Sessionprovider session ={session}>
          {!session ? (
          <Login/>
          ):( <div className='flex'>
          <div className=" bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem] "><Sidebar/></div>
          <div>

            {/* client provider-notification */}
             <Clientprovider/>
          </div>
          <div className="bg-[#343541] flex-1 ">{children}</div>
      
          
          
          </div>
        
          )}
          </Sessionprovider>
        </body>
    </html>
  )
}

