import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <img src="https://th.bing.com/th?id=OIP.oB6LxM8vycBZQmJioMmSMAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
        <h1>NFT-Crafters</h1>
      </div>
       <ul className="menu">
        <li>Home</li>
        <li>Explore</li>
        <li>Creators</li>
        <li>Collectors</li>
        <li>Product</li>
       </ul>
         <div className='search'>
           <img src="https://static.vecteezy.com/system/resources/previews/000/439/746/original/vector-find-icon.jpg" className="find"  alt="" />
           <input type="text" />
         </div>
       <div className='profile'>
          <img src="https://tse3.mm.bing.net/th?id=OIP.1mSyfMp-r01kxBYitbubbAHaHa&pid=Api&P=0&h=220" alt="" />
       </div>
    </div>
    
  )
}

export default Navbar
