import React, { useRef, useState } from 'react';
import underline from '../../assets/nav_underline.svg'; 
import logo from '../../assets/logo.png';
import './NavBar.css';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const NavBar = () => {
  const [menu, setMenu] = useState("home"); // State for active menu item
  const menuRef = useRef();
  const openMenu = ()=>{
    menuRef.current.style.right = "0";
  }
  const closenMenu = ()=>{
    menuRef.current.style.right = "-350px";
  }
  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" /> 
      <img src={menu_open} onClick={openMenu} alt="Logo" className='nav-mob-open'/> 
      <ul  ref = {menuRef}className='nav-menu'>
      <img src={menu_close} onClick={closenMenu}alt="" className="nav-mob-close" />
        <li>
          <a href="#home" onClick={() => setMenu("home")}>Home</a>
          {menu === 'home' ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <a href="#about" onClick={() => setMenu("about")}>About Me</a>
          {menu === 'about' ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <a href="#projects" onClick={() => setMenu("services")}>Projects</a>
          {menu === 'services' ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <a href="#portfolio" onClick={() => setMenu("work")}>Portfolio</a>
          {menu === 'work' ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <a href="#contact" onClick={() => setMenu("contact")}>Contact</a>
          {menu === 'contact' ? <img src={underline} alt='' /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
}

export default NavBar;
