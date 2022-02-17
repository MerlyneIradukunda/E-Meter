import React from 'react'

export default function Pay() {
  return (
    <div className=''>
      
        <div className='flex  items-center justify justify-center min-h-screen w-2/3 bg-white  '>
       
        <form action="" className='w-3/4'> 
        <h3 className='font-bold text-center'>Buy E-Power</h3>
        <div className="mt-4"></div>
        <div>
           <label className="block" for="Meter number">Meter number</label>
           <input type="text" placeholder="Meter number"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"></input>
        </div>
        <div>
           <label className="block" for="Amount ">Amount</label>
           <input type="text" placeholder="Amount"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"></input>
        </div>
        <div className='flex items-baseline justify-between'>
            <button className='px-6 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-900 w-full'>Pay</button>
           
        </div>
         <a  href="#" className="text-sm text-red-500 hover:underline ">View Your Days</a>
        </form>
        {/*
                </div>
                <div className="mt-4">
                    <label className="block">Password<label>
                            <input type="password" placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500">
                </div>
                
            </div>
        </form> */}
        </div>
    </div>
  )
}
