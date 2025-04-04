import React, { useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import Item from './components/Item';
import Navbar from './components/Navbar';
import movie1Order from './images/movie1Ticket.jpg';
import movie2Order from './images/movie2Ticket.jpg';
import movie3Order from './images/movie3Ticket.jpg';

const data = [
  {
    title: "Bombardino Crocodilo VS Tralalero Tralala",
    path: movie1Order,
    description: "Watch the Greatest Fight of our generation on a big screen near you.",
    price: "₹500",
  },
  {
    title: "Tung Tung Tung Sahur",
    path: movie2Order,
    description: "It has/is a Bat and It thinks your head is suspiciously baseball shaped.",
    price: "₹250",
  },
  {
    title: "The Batman",
    path: movie3Order,
    description: "This movie is in no way shape or form out of place in comparison to the other movies on this.",
    price: "₹150",
  },
];

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const handleAddToCart = (price) => {
    setTotalPrice(prev => prev + price);
    setItemCount(prev => prev + 1);
  };

  const confirmOrder = () => {
    setTotalPrice(0);
    setItemCount(0);
    alert("Order Confirmed!")
  }

  return (
    <div style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}>
      <Navbar itemCount={itemCount} totalPrice={totalPrice} confirm = {confirmOrder}/>
      <Movie />
      <div style = {{display: 'flex'}}>
      <div style={{ color: 'red', paddingTop: '20px', margin:"auto", fontSize: '20px', fontWeight: 'bold' }}>CURRENTLY IN THEATRES</div>
      </div>
      <div style={{ display: 'flex', gap: '30px', padding: '30px' }}>
        {data.map((item, index) => (
          <Item
            key={index}
            path={item.path}
            title={item.title}
            description={item.description}
            price={item.price}
            onAddToCart={() => handleAddToCart(parseInt(item.price.replace('₹', ''), 10))}
          />
        ))}
      </div>
      <div
        style={{
            backgroundColor: 'rgb(255, 224, 69)',
            width: '100vw',
            height: '50px',
            position: 'relative',
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
          <h3 style = {{margin: 'auto', color:"black"}}>Bhavya Khatri 23BAI0137</h3>
        </div>
    </div>
  );
}

export default App;
