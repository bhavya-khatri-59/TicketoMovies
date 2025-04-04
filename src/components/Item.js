import React from 'react';

function Item({ path, title, price, description, onAddToCart }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      height: '250px',
      width: '95vw',
      paddingLeft: '15px',
      paddingRight: '15px',
      paddingTop: '5px',
      paddingBottom: '5px',
      backgroundColor: '#333',
      borderRadius: '10px',
      boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
      color: 'yellow',
      border: "3px solid red",
      transition: 'transform 0.3s ease-in-out',
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} 
    >
      <div 
        style={{
          backgroundImage: `url(${path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '225px',
          width: '225px',
          borderRadius: '10px',
          marginRight: '15px',
          border: "3px solid yellow",
          flexShrink: "0",
        }}
      ></div>

      <div>
        <h3 style={{ margin: '5px 0', fontSize: '17px', position: 'relative', top: '10px', color: 'yellow'}}>{title}</h3>
        <p style={{ fontSize: '12px', color: 'white' ,position: 'relative', top: '5px'}}>{description}</p>
        <p style={{ fontWeight: 'bold', color: 'lime', fontSize: '25px' ,position: 'relative', top: '-20px'}}>{price}</p>

        <button 
          onClick={onAddToCart} 
          style={{
            backgroundColor: 'red',
            color: 'white',
            fontSize: '16px',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '5px',
            position: 'relative',
            top: '-40px'
          }}
        >
          Book Tickets
        </button>
      </div>
    </div>
  );
}

export default Item;
