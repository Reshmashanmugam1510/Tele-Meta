import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
            <div className="footer-logo">
                <img src="https://th.bing.com/th?id=OIP.oB6LxM8vycBZQmJioMmSMAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="logo" />
                <p>NFT Crafters</p>
            </div>
            <ul className='footer-links'>
                <li>Home</li>
                <li>Explore</li>
                <li>Creators</li>
                <li>Collectors</li>
                <li>Product</li>
            </ul>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
  )
}

export default Footer;
