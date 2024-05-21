import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import MessageContainer from '../../components/messages/MessageContainer'
const Home = () => {
  return (
    <div className=' flex sm:h-[450px] md:h-[550px] rounded-lg bg-white-900  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 '>
      <SideBar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
