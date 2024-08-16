import React from 'react'
import Messages from './Messages'
import MessagesInput from './MessagesInput'
import {TiMessages} from 'react-icons/ti'

function MessagesContainer() {
  const noChatSelected=true
  return (
      <div className='md:min-w-[450px] flex flex-col'>
          
      {noChatSelected ? <NoChatSelected /> : (
        <>
          <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text p-1'>To:</span>{''}
            <span className='text-gray-900 font-bold'>UserName</span>
          </div>
          <Messages />
          <MessagesInput />

        </>
         )}
          
    </div>
  )
}

export default MessagesContainer


const NoChatSelected = () => {
  return (
    // <div className='flex flex-col items-center justify-center h-screen'>
    //   <TiMessages size={100} color='gray' />
    //   <h2 className='text-gray-600 text-2xl'>No chat selected</h2>
    // </div>

    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 User Name ❄️</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center'/>
      </div>
    </div>
  )
}