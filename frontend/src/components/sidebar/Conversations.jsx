import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojies';

function Conversations() {
  const { loading, conversations } = useGetConversations();
  return (
    <div className='w-full h-full py-2 flex flex-col overflow-auto gap-2'>
      {/* {conversations.map((conversation,idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))} */}

      {conversations.length > 0 ? (
        conversations.map((conversation, idx) => (
          <div
            key={conversation._id}
            className='p-2 bg-slate-700 rounded-lg'
          >
            <Conversation
              conversation={conversation}
              emoji={getRandomEmoji()}
              lastIdx={idx === conversations.length - 1}
            />
          </div>
        ))
      ) : (
        <div className='text-center text-white'>
          No Conversations Found
        </div>
      )}

      {loading ? <span className='loading loading-spinner mx-auto
         '></span> : null}

    </div>
  )
}

export default Conversations