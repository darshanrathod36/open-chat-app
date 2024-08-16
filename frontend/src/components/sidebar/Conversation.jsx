import React from 'react'

const Conversation = () => {
    return (
      <>
        <div className='flex gap-2 items-center hover:bg-blue-500 rounded p-2 py-1 cursor-pointer '>
            
            <div className='avatar '>
                <div className='w-12 rounded-full'>
                    <img src='https://avatar.iran.liara.run/public/boy' alt='User avatar' />
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-medium text-gray-200'>UserName</p>
                    <span className='text-xl'>😊</span>
                </div>
            </div>
            </div>
            <div className='divider my-1 py-1 h-1'></div>
        </>

  )
}

export default Conversation