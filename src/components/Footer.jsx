import React from 'react';
import facebook from "../assets/Icon/Facebook.png";
import twitter from "../assets/Icon/Twitter.png";
import tiktok from "../assets/Icon/Tiktok.png";
import instagram from "../assets/Icon/Instagram.png";
import logow from "../assets/logow.png";

function Footer() {
  return (
    <div className='bg-black text-white px-6 py-10 md:px-10 lg:px-[160px] lg:py-[104px] flex flex-col gap-8'>
      <div className='flex flex-col lg:flex-row justify-between gap-8'>
        <div className='flex flex-col w-full lg:w-[380px] gap-5 items-center md:items-start'>
          <span className="text-xl font-bold"><img src={logow} alt="" /></span>
          <span className='text-center md:text-left text-[#CFCFCF] font-medium'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</span>
        </div>
        
        <div>
          <ul className='flex flex-col items-center md:items-start gap-4 text-[#CFCFCF] text-sm'>
            <li className="font-semibold text-white text-base">Services</li>
            <li>Bonus program</li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
        </div>

        <div>
          <ul className='flex flex-col items-center md:items-start gap-4 text-[#CFCFCF] text-sm'>
            <li className="font-semibold text-white text-base">Assistance to the buyer</li>
            <li>Find an order</li>
            <li>Terms of delivery</li>
            <li>Exchange and return of goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
        </div>
      </div>

      <div className='flex gap-6 justify-center lg:justify-start'>
        <img src={twitter} alt="Location" className="w-5 h-5" />
        <img src={facebook} alt="Shipping" className="w-5 h-5" />
        <img src={tiktok} alt="Payment" className="w-5 h-5" />
        <img src={instagram} alt="Payment" className="w-5 h-5" />
      </div>
    </div>
  );
}

export default Footer;
