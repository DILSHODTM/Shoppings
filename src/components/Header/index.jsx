import {React, useContext, useState, useEffect, useRef} from 'react';
import { Navbar, Nav, Container , NavLink } from "react-bootstrap";
import { ThemeContext } from '../../globalComponents/ThemeProvider';

import {BiSun, BiMoon, BiCart} from 'react-icons/bi';
import "./style.scss";
const index = () => {

   const {theme , setThemeMode} =useContext(ThemeContext);
   const [darkMode, setDarkMode] = useState(theme);

useEffect(() => {
      setThemeMode(darkMode);
   }
   , [darkMode]);



   return (

      <>
      <Navbar  expand="md" 
      variant={darkMode ? 'dark' : 'light'}
      className={darkMode? 'bg-light-black border-bottom':'bg-light border-bottom'}
      style={{width:'100%' , position:'fixed' , zIndex:'10'}}
      >
      <Container>
      
        
        <Navbar.Brand  className={darkMode? 'text-dark-primary' : 'text-light-primary' }>
         <b>Online shopping</b>
        </Navbar.Brand>
       
        
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={darkMode? 'text-dark-primary' : 'text-light-primary'} 
            onClick={() => setDarkMode(!darkMode)}
            >
             {darkMode? <BiSun size="1.7rem"/> :  <BiMoon size="1.7rem"/> }
              </NavLink>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>

    

    
    </>
   );
};



export default index;