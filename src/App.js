import './App.css';
import { Home } from './Home';
import { Department } from './Department';

import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
     <div className="App container">
      <h3 className='d-flex justify-content-conter m-3'>Hospital Management System</h3>

      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <u1 className="navbar-nav">
          <li className="nav-it em- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/department">
              Department
            </NavLink>
          </li> 
                  
        </u1>
      </nav>

      

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/department' element={<Department/>}/>
       
      </Routes>
      
     </div>
    </BrowserRouter>
  );
}

export default App;