import { db } from 'src/firebase/firebase';
import { PlusIcon } from '@heroicons/react/24/outline'

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

function Newchat() {
  const router = useRouter();
  const{data:session}=useSession();
  const createNewchat = async() =>{
    const doc= await addDoc(
      collection(db,"Users",session?.user?.email!,"chats"),{
        Messages:[],
        userId:session?.user?.email!,
        createdAt:serverTimestamp(),
      });
      router.push(`/chat/${doc.id}`);
  };
  return (
    <div onClick={createNewchat} className='border-gray-700 border Chatrow '><PlusIcon className='h-4 w-4'/>
      <p>New Chat</p>
    </div>
  )
}

export default Newchat
