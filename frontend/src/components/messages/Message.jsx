
const Message = () => {
  return (
    <div className="chat chat-end"> 
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img  src="https://avatar.iran.liara.run/public/boy?username=rohan" alt="chat bubble component profile"/>
        </div>
      </div>

      <div className={'chat-bubble text-white bg-[#0369a1]'}>Hi! whats up</div>
    </div>
  )
}

export default Message
