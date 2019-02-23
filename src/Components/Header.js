import React from "react";
import img from '../assets/header.png'

const Header = () => {
  return (
    <div className='Header'>
      <img src={img} alt="Flash Tests" />
    </div>
  );
};

export default Header;