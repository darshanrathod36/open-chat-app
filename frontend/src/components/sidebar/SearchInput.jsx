import React from 'react'
import { FaSearch } from "react-icons/fa";

function SearchInput() {
    return (
        <div>
            <form action="" className='flex items-center gap-2 '>
                <input type="text" placeholder='Search..' className='mt-1 p-4 border border-gray-400 focus:outline-none focus:ring-blue-500 bg-zinc-900 input input-bordered rounded-full' />
                <button type='submit' className='btn btn-circle bg-blue-500 text-white'><FaSearch className='outline-none w-4 h-4' /></button>
            </form>
        </div>
    )
}

export default SearchInput