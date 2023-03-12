
import query from '../../lib/queryApi';
import type { NextApiRequest, NextApiResponse } from 'next'
import admin from "firebase-admin";
import { adminDb } from '@/firebase/firebaseAdmin';
type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const{prompt,chatId,model,session}=req.body;

    if(!prompt){
      res.status(400).json({answer:"please provide a prompt"});
      return;
    }
    if(!chatId){
      res.status(400).json({answer:"please provide a valid chatId"});
      return;
    }
    // Chat GPT query
   

    const response = await query(prompt,chatId,model);

    const message:Message ={
      text : response || "ChatGPT was unabl to find answer for that!",
      createdAt:admin.firestore.Timestamp.now(),
      user:{
            _id:'ChatGPT',
            name:'ChatGPT',
            avatar:'https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png',
      },
     
    }

    await adminDb
    .collection('Users').doc(session?.user.email)
    .collection('chats').doc(chatId)
    .collection('messages').add(message);
    res.status(200).json({ answer: message.text })
  }

