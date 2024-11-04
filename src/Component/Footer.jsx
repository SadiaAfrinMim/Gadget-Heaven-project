import React from 'react';

const Footer = () => {
    return (
        <div className='w-11/12 mx-auto'>
             <div className='text-center text-black'>
                    <h1 className='text-3xl font-bold'>Gadget Heaven</h1>
                    <p className='text-gray-800'>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className="divider"></div>
            <footer className="footer  text-black p-10">
               
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;