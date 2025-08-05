import React from 'react'

export default function SearchBar() {
  return (
    <div className='bg-white flex justify-center items-center py-5 '>
        <input
            type="text"
            placeholder="Search..."
            className="w-3/5 p-2 border border-gray-300 rounded-xl text-gray-500"
        />

    </div>
  )
}
