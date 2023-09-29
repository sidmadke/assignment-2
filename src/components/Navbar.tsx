import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row py-10 px-20 bg-zinc-950 border-b-2 border-gray-900 justify-between'>
        <ul className='flex flex-row rounded-3xl bg-zinc-800 transition-all font-semibold'>
            <li className='rounded-3xl hover:bg-white w-40 py-3 hover:text-black text-center'>Open</li>
            <li className='rounded-3xl hover:bg-white w-40 py-3 hover:text-black text-center'>Close</li>
            <li className='rounded-3xl hover:bg-white w-40 py-3 hover:text-black text-center'>Boost</li>
        </ul>
        <div className='bg-black w-96'></div>
    </div>
  )
}

export default Navbar