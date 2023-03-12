'use client'
import { signOut, useSession } from 'next-auth/react'

import Newchat from './Newchat'
import {useCollection} from "react-firebase-hooks/firestore"
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import Chatrow from './Chatrow';
import ModelSelection from './ModelSelection';
function Sidebar() {
  const{data:session} = useSession();
  const [chats,loading,error]= useCollection(session && query(collection(db,'Users',session.user?.email!,'chats'),orderBy('createdAt','asc')));
  return(
    <div className='p-2 flex flex-col h-screen'>
            <div className='flex-1'>
                 <div>
                    {/* new chat */}
                    <Newchat/>
                    <div className='hidden sm:inline'>
                        {/* module selection */}
                          <ModelSelection/>
                    </div>
                    <div className='flex flex-col space-y-2 my-2'>
                    {loading && (
                      <div className="animate-pulse text-center text-black-100">
                        <p>Loading Chats...</p>
                      </div>
                    )}
                    {/* Map through the rows */}
                    {chats?.docs.map((chat)=>(
                      <Chatrow key={chat.id} id={chat.id}/>
                    ))}
                    </div>
                 </div>
            </div>
            {session && (<img onClick={()=>signOut()} src={session.user?.image!} alt="profile pic" className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'/>)}
    </div>)
}

export default Sidebar
