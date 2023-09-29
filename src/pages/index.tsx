import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('ETH')
  const [dropDown, setDropdown] = useState(false)
  const [inputValue, setInputValue] = useState()

  return (
    <>
      <div className='grid grid-flow-col grid-cols-6 grid-rows-6 p-14 h-screen gap-5'>
        <div className='col-span-3 row-span-6 border-2 border-gray-900 rounded-xl gap-10 py-20 pl-20 bg-zinc-950'>
          <div>
            <label htmlFor="asset">Select Asset</label>
            <p id='asset' onClick={() => { setDropdown(!dropDown) }} className='w-5/6 p-2 rounded-md border-2 border-gray-900 flex flex-row justify-between items-center mt-3'><span>{selectedOption}</span> <span>{dropDown ? <AiOutlineUp /> : <AiOutlineDown />}</span></p>
            {dropDown &&
              <select value={selectedOption} onChange={(e) => { setSelectedOption(e.target.value) }} className='text-white w-5/6 bg-transparent p-2 z-50'>
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
                <option value="SHIB">SHIB</option>
              </select>
            }
          </div>
          <div className='mt-8'>
            <div className='flex flex-row items-center justify-between w-5/6'>
              <label htmlFor="amount">Borrow Amount</label> <p className='p-2 bg-zinc-900 w-36 rounded-md text-xs border-2 border-zinc-800 text-center'>Max Held Amount: 200</p>
            </div>
            <input id='amount' type="number" placeholder='Enter supply amount' min={1} max={200} inputMode='decimal' className='w-5/6 p-2 rounded-md border-2 border-gray-900 bg-transparent mt-3' 
            onChange={(e) => {
              const valueCheck = Number(e.target.value)
              if(valueCheck <= 200 && valueCheck > 0){
                setTimeout((value=e.target.value) => {
                  setInputValue(value)
                }, 1500);
              }else if (e.target.value === "") {
                
              }else{
                alert("Invalid Input")
              }
            }} />
          </div>
          <div className='h-28 w-5/6 bg-black mt-5'>
            {/* empty */}
          </div>
          <button className='p-3 bg-white text-black rounded-md mt-5 font-semibold' style={{ marginLeft: 422 }}>Execute</button>
        </div>
        <div className='col-span-3 row-span-4 border-2 border-gray-900 rounded-xl gap-10 p-10'>{inputValue! > 200 ? <p>Invalid Input</p> : <p>{inputValue}</p>} </div>
        <div className='col-span-3 row-span-2 border-2 border-gray-900 rounded-xl gap-10'></div>
      </div>
    </>
  )
}
