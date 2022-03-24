import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import NavBar from "./components/Navbar";
import Pay from "./components/Pay";
import Days from "./components/Days";


function App() {
  return (
  
  <div className='app'>
    <NavBar/>
    <main className='bg-gray-100'> 
    <Routes>
          <Route exact path="/" element={<Pay />}>
            
          </Route>
          <Route exact path="/days" element={<Days />}>
            
          </Route>
        </Routes>
    </main>
    </div>
  );
}

export default App;
