import classes from './style.module.css';
import { useState } from 'react';

export  function ButtonArray({ children, ...props }) {
  const [activeTab, setActiveTab] = useState('');

  return (
    <>
      {children.map((item) => (
        <button
          key={item}
          className={item === activeTab ? classes.active : classes.button}
          onClick={() => setActiveTab(item)}
          {...props}
        >
          {item}
        </button>
      ))}
    </>
  );
}

export  function Button({ children, isActive, ...props }) {
  return (
    <button 
      {...props}
      className={isActive ? classes.active : classes.button}
    >
      {children}
    </button>
  );
}

