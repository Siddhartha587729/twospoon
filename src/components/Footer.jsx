import React from 'react';
import location from "../assets/Icon/Location.png";
import shipping from "../assets/Icon/Shipping.png";
import payment from "../assets/Icon/Payment.png";

function Footer() {
  return (
    <div className='bg-black text-white px-6 py-10 md:px-10 lg:px-[160px] lg:py-[104px] flex flex-col gap-8'>
      <div className='flex flex-col lg:flex-row justify-between gap-8'>
        <div className='flex flex-col w-full lg:w-[380px] gap-5 items-center md:items-start'>
          <span className="text-xl font-bold">Cyber</span>
          <span className='text-center md:text-left'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</span>
        </div>
        
        <div>
          <ul className='flex flex-col items-center md:items-start gap-3'>
            <li className="font-semibold">Services</li>
            <li>Bonus program</li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
        </div>

        <div>
          <ul className='flex flex-col items-center md:items-start gap-3'>
            <li className="font-semibold">Assistance to the buyer</li>
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
        <img src={location} alt="Location" className="w-6 h-6" />
        <img src={shipping} alt="Shipping" className="w-6 h-6" />
        <img src={payment} alt="Payment" className="w-6 h-6" />
        <img src={payment} alt="Payment" className="w-6 h-6" />
      </div>
    </div>
  );
}

export default Footer;
