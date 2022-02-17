import NavBar from "./components/Navbar";
import Pay from "./components/Pay";
import Days from "./components/Days";
function App() {
  return (
  
  <div className='app'>
    <NavBar/>
    <main className='bg-gray-100'> 
        <Pay/> 
        <Days/>
    </main>
    </div>
  );
}

export default App;
