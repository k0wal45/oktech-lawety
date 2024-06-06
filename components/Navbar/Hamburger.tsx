'use client';
import { useState } from 'react';
import './hamburger.css';

const Hamburger = () => {
  const [isOpen, SetIsOpen] = useState(false);

  function hamburgerChange() {
    SetIsOpen(!isOpen);
  }

  return (
    <div className="z-40 inline-block w-min cursor-pointer" onClick={hamburgerChange}>
      <div className={`bar1 ${isOpen ? 'change' : ''}`}></div>
      <div className={`bar2 ${isOpen ? 'change' : ''}`}></div>
      <div className={`bar3 ${isOpen ? 'change' : ''}`}></div>
    </div>
  );
};

export default Hamburger;
