import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../store/useConversation';
import {extractTime} from '../../utils/ExtractTime';

function Message({ message }) {
  console.log(message);
 
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  // const bubbleClassName = fromMe ? "chat-bubble-start" : "chat-bubble-end";
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  return (
    <div className={`chat ${chatClassName} mt-5`}>
      
          <div className='chat-image avatar'>
              <div className='w-10 rounded-full'>
                  <img src={profilePic}  alt='profilepic'/>
                  
        </div>
        
      </div>
      <div className={`chat-bubble  text-white ${bubbleBgColor} pb-3`}>
       {message.message}
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center m-1'>{ formattedTime}</div>
      
    </div>
    
  )
}

export default Message
