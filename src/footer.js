import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className='Maincont'>
        <div class="container">
         <footer class="py-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Get to Know us</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">About Us</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Careers</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Press Releases</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Amazon Science</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Make Money with Us</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Sell on Amazon</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Sell under Amazon Accelerator</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Become an Affiliate</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Fulfilment by Amazon</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Advertise Your Products</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Let Us Help You</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">COVID-19 and Amazon</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Your Account</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Amazon App Download</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">100% Purchase Protection</a></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Any Queries ?</h5>
          <p>We will get back to you on this.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
            <button class="btn btn-primary" type="button">Send</button>
          </div>
        </form>
      </div>
    </div>
    
    </footer>

</div>
</div>
  );
};

export default Footer;