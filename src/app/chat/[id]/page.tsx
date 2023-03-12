import Chat from "@/app/Components/Chat"
import Chatinput from "@/app/Components/Chatinput"
type Props={
  params:{
  id:string
}
};
function Chatpage({params:{id}} :Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Chat */}
      <Chat chatId={id}/>
      {/* ChatInput */}
    <Chatinput chatId={id}/>
    </div>
  )
}

export default Chatpage
