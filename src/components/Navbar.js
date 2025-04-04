import React from 'react';
import '../styles/Navbar.css'
import '../App.css'

function Navbar({itemCount, totalPrice, confirm}) {
  return (
        <div
        style={{
            backgroundColor: 'rgb(255, 69, 69)',
            width: '100vw',
            height: '50px',
            position: 'absolute',
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
            color: 'yellow',
            fontSize: '20px',
            fontWeight: 'bold',
        }}
        >
        <div class = "left"> Ticketo Films </div>
        <div class = "right">You have: {itemCount} tickets | ₹{totalPrice}</div>
        <button class = "confirm" 
        onClick={confirm}>Confirm</button>
        </div>
  );
}

export default Navbar;
