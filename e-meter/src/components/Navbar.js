
import logod from '../assets/logo.png'

function NavBar() {
  return (
    <div className='grid grid-cols-3 row m-0 bg-white shadow-sm font-poppins'> 
      <div>
        <img src={logod} alt='logo' className='h-20 p-0' />
      </div>
      <div>
        <nav className='place-items-center  mt-2'> 
          <ul className='grid grid-cols-4 font-medium text-sm mt-5'>
            <li className='p-2 w-18 '>
              <a href='/'>Home</a>
            </li>
            <li className='p-2 w-18'>
              <a href='/'>About Us</a>
            </li>
            <li className='p-2 w-18'>
              <a href='/'>Buy</a>
            </li>
            <li className='p-2 w-18'>
              <a href='/'>Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
     
    </div>
  );
}

export default NavBar;