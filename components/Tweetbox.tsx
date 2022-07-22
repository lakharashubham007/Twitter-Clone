import React, { useState } from 'react'
import { PhotographIcon } from '@heroicons/react/outline'
import { SearchCircleIcon } from '@heroicons/react/outline'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CalendarIcon } from '@heroicons/react/outline'
import { LocationMarkerIcon } from '@heroicons/react/outline'

function Tweetbox() {
    const [input, setInput] = useState('')
  return (
    <div className="flex space-x-2 p-5">
        <img  
        className="h-14 w-14 object-cover rounded-full mt-4"
        src="https://links.papareact.com/gll"
        alt="" />
        <div className='flex flex-1 items-center pl-2'>
            <form className='flex flex-1 flex-col'>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="What's Happning?'"
                className='h-24 w-full text-xl placeholder:text-xl outline-none'/>
                <div className='flex items-center'>
                    <div className='flex flex-1 space-x-2 text-twitter'>
                    <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />    
                    <SearchCircleIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                    <EmojiHappyIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                    <CalendarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                    <LocationMarkerIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                    </div>

                    <button 
                    disabled={!input}
                    className="bg-twitter text-white px-5 py-2 font-bold rounded-full disabled:opacity-40">Tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Tweetbox;