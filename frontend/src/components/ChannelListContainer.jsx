import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie'

// import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'

import Edikted from '../assets/Edikted.webp'

const SideBar = () => {
 return (  
    <div className='fixed top-0 left-0 h-screen w-[30px] bg-[#f5c1f7] flex flex-col items-center shadow-lg'>
        <div className='bg-[#f5c1f7]'>
            <div className='bg-[#f5c1f7]'>
                <img className='bg-transparent w-[30px]' src={Edikted} alt="edikted" />
                
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon1__inner'>
                <img className='w-[30px]' src={Edikted} alt="edikted" />
            </div>
        </div>
    </div>
) }

function ChannelListContainer() {
    return (
        <>
            <SideBar/>
            
            
        </>
    )
}

export default ChannelListContainer