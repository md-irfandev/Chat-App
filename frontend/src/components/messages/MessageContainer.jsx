import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const {selectedConversation , setSelectedConversation}= useConversation();

  useEffect(()=>{

    //cleanup function (unmounts)
    return ()=>setSelectedConversation(null);
  },[setSelectedConversation])

  return (
    <div className="md:min-w-[600px] flex flex-col">
        {!selectedConversation ? <NoChatSelected/> :
        (<>
          {/* <Header/> */}
          <div className="flex gap-3 items-center bg-[#202c33] px-4 py-2 mb-2">
            <div className="w-9 rounded-full cursor-pointer">
                  <img src="https://avatar.iran.liara.run/public/boy?username=irfan" alt="User Avatar" />
            </div>
            <span className="text-[#e9edef] font-medium cursor-pointer" >{selectedConversation.fullName}</span>
          </div>
          
          <Messages/>
          <MessageInput/>
          </>)}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = ()=>{
  const {authUser} = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
        <div className="px-4 text-center sm:text-lg md:text-sl text-gray-200 font-semibold flex flex-col items-center gap-2">
          <p>Welcome 👋 {authUser.fullName} </p>
          <p>Select a friend to start messaging</p>
          <TiMessages className="text-3xl md:text-6xl text-center"/>
        </div>
    </div>
  )
}