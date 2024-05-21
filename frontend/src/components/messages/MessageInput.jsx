import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
        <div className="w-full relative">
            <input type="text" 
            className="border text-sm rounded-lg w-full p-2.5 bg-[#2a3942] border-gray-800 text-white focus:outline-none focus:border-transparent "
            placeholder ="Send a message "/>

            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                <BsSend/>
            </button>
        </div>
    </form>
  )
}

export default MessageInput
