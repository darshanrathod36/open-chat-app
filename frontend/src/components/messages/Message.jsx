import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../store/useConversation';
import { extractTime } from '../../utils/ExtractTime';

const Message = ({ message }) => {
  console.log(message);

  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  console.log("fromMe: " + fromMe);
  
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilepic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName} mt-3`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img alt='pofilepic' src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center m-1'>{formattedTime}</div>
    </div>
  );
};
export default Message;