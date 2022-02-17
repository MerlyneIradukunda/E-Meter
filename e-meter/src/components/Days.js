import React from 'react'

export default function Days() {
  return (
    <div className='flex '>
    <div className='flex items-center justify justify-center min-h-screen w-1/3 bg-white  '>
  
    <form action="" className='w-3/4'> 
    <h3 className='font-bold text-center'>View Days</h3>
    <div className="mt-4"></div>
    <div>
       <label className="block" for="Meter number">Meter number</label>
       <input type="text" placeholder="Meter number"
        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"></input>
    </div>
   
    <div className='flex items-baseline justify-between'>
        <button className='px-6 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-900 w-full'>View</button>
       
    </div>
    </form>
   
    </div>
    <div className='flex w-2/3 bg-gray justify justify-center '> 
        <div className=' flex items-center justify justify-center'>
            <h3>Remaining are <span className='text-red-500'> 23 Days </span></h3> 
        </div>

    </div>
    </div>
  )
}
