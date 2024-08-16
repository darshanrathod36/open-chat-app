import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessagesContainer from '../../components/messages/MessagesContainer'

function Home() {
  return (
    // bg - clip - padding backdrop - filter backdrop - blur - lg bg - opacity - 0 shadow - md
    <div className='flex  h-screen  sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-md '>

      <Sidebar />
      <MessagesContainer />


    </div>
  )
}

export default Home