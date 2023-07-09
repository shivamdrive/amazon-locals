import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    
    <nav class=" bg-body-tertiary border-bottom">
    <div className='main'>
    <div class="container12 px-0 d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item"><a href="#" class="nav-link link-light px-2 active" aria-current="page">Amazon MiniTV</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-light px-2">Sell</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-light px-2">Best Sellers</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-light px-2">Today's Deals</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-light px-2">Mobiles</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-light px-2">Customer</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-light px-2">Prime</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-light px-2">Amazon Pay</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-light px-2">Coupons</a></li>
      </ul>
      <ul class="nav">
        <li class="nav-item"><a href="#" class="nav-link link-light px-2"></a></li>
        <li class="nav-item"><a href="#" class="nav-link link-light px-2"></a></li>
      </ul>
    </div>
    </div>
  </nav>
  
  );
}

export default Navbar;
