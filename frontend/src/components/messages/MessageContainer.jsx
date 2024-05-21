import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className="md:min-w-[600px] flex flex-col">
        {noChatSelected ? <NoChatSelected/> :
        (<>
          {/* <Header/> */}
          <div className="flex gap-3 items-center bg-[#202c33] px-4 py-2 mb-2">
            <div className="w-9 rounded-full cursor-pointer">
                  <img src="https://avatar.iran.liara.run/public/boy?username=irfan" alt="User Avatar" />
            </div>
            <span className="text-[#e9edef] font-medium cursor-pointer" > Md Irfan</span>
          </div>
          
          <Messages/>
          <MessageInput/>
          </>)}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = ()=>{
  return (
    <div className="flex items-center justify-center w-full h-full">
        <div className="px-4 text-center sm:text-lg md:text-sl text-gray-200 font-semibold flex flex-col items-center gap-2">
          <p>Welcome 👋 Irfan </p>
          <p>Select a friend to start messaging</p>
          <TiMessages className="text-3xl md:text-6xl text-center"/>
        </div>
    </div>
  )
}