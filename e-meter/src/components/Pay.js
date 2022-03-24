import React from 'react'
import {Link,Route} from "react-router-dom";
import Days from '../components/Days'

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
        {/* <a  className="text-sm text-red-500 hover:underline "> <Route exact path="/Review" component={Days} /> View Days </a> */}
       
                {/* <ul>
                    <li><Link to="/Days">View Your Days  </Link></li>
                </ul> */}
                <Link to="/days" className="text-sm text-red-500 hover:underline ">View Your Days</Link>
        </form>
        </div>
        <div></div>
    </div>
  )
}
