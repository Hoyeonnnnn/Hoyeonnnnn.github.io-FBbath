import logo from './logo.png';
import './App.css';
import Slideshow from './Sildeshow';
import Main from './Main'
import Company from './Company'
import Project from './Project';
import {  useNavigate } from 'react-router-dom';
import { Route, Link, Routes, Outlet, json } from 'react-router-dom'

function App() {
  let Navigate = useNavigate();
  return (
    <div className="App">
      <div className="Nav-bar">
        <img src={logo} alt="Company Logo" className="Logo" 
        onClick={() => {Navigate('/')}}/>
        <div className="Nav-items">
         <p onClick={() => {Navigate('/ProjectFBbath')}}> 시공 사례</p>
          <p>견적 문의</p>
         
          <p onClick={() => {Navigate('/CompanyFBbath')}}>회사 정보</p>
        </div>
      </div>
      <Routes>
        <Route path='/' element={
          <Main />
        }>
        </Route>
        <Route path='/CompanyFBbath' element= { <Company/>}> 
        </Route>
        <Route path='/ProjectFBbath' element={<Project/>}> 

        </Route>
      </Routes>

    </div>


  );
}

export default App;
