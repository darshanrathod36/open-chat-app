import React from 'react'

function Message() {
  return (
      <div className='chat chat-end mt-5'>
          <div className='chat-image avatar'>
              <div className='w-10 rounded-full'>
                  <img src='https://avatar.iran.liara.run/public/boy' alt='User avatar' />
                  
        </div>
        
      </div>
      <div className={'chat-bubble  text-white bg-blue-500'}>
        hi hello world
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center m-1'>12:12</div>
      
    </div>
    
  )
}

export default Message