import {React, useContext, useState, useEffect, useRef} from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { ThemeContext } from '../../globalComponents/ThemeProvider';
import{Link , NavLink} from 'react-router-dom';
import {useCart} from "react-use-cart"
import {BiSun, BiMoon, BiCart} from 'react-icons/bi';
import "./style.scss";
const index = () => {

   const {theme , setThemeMode} =useContext(ThemeContext);
   const [darkMode, setDarkMode] = useState(theme);

useEffect(() => {
      setThemeMode(darkMode);
   }
   , [darkMode]);






const {
isEmpty,
totalItems,
}=useCart()
 





   return (

      <>
      <Navbar  expand="md" 
      variant={darkMode ? 'dark' : 'light'}
      className={darkMode? 'bg-light-black border-bottom':'bg-light border-bottom'}
      style={{width:'100%' , position:'fixed' , zIndex:'10'}}
      >
      <Container>
      
        
        <Navbar.Brand href="#home" className={darkMode? 'text-dark-primary' : 'text-light-primary' }>
         <b>Online shopping</b>
        </Navbar.Brand>
       
        
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className={darkMode? 'text-dark-primary' : 'text-light-primary'} 
            onClick={() => setDarkMode(!darkMode)}
            >
             {darkMode? <BiSun size="1.7rem"/> :  <BiMoon size="1.7rem"/> }
              </Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>

    

    
    </>
   );
};



export default index;