import React from 'react'
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import toast from 'react-hot-toast';
import useConversation from '../../store/useConversation.js';
import useGetConversation from '../../hooks/useGetConversations.js';

function SearchInput() {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversation();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error("Search term must be at least 3 characters long");
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else toast.error("No such user found!");
    };
    return (
        <div className=''>
            <form onSubmit={handleSubmit} className='flex items-center gap-2 '>
                <input type="text" placeholder='Search..' className='w-full mt-1 p-4 border border-gray-400 focus:outline-none focus:ring-blue-500 bg-zinc-900 input input-bordered rounded-full '
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <button type='submit' className='btn btn-circle bg-blue-500 text-white'><FaSearch className='outline-none w-4 h-4' /></button>
            </form>
        </div>
    )
}

export default SearchInput