import React, { useState } from 'react';
import location from '../assets/Icon/Location.png';
import shipping from '../assets/Icon/Shipping.png';
import payment from '../assets/Icon/Payment.png';
import phone from '../assets/phone.png';
import headphone from '../assets/headphone.png';
import watch from '../assets/watch.png';
import card from '../assets/card.png';
import '../App.css';

function Hero() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardholderName: '',
    expDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({ cardNumber: '', cardholderName: '', expDate: '', cvv: '' }); // Clear the form
  };

  return (
    <div>
      <div className='h-[184px] flex items-center justify-start lg:flex'>
        <div className='h-full w-full flex justify-between items-center'>
          <div className='w-[160px] hidden md:flex justify-center items-center gap-2 hover:cursor-pointer'>
            <div className='hover:scale-95'> <img src={location} alt="" /></div>
            <div className='flex flex-col text-[#B2B2B2]'>
              <span className='text-sm hover:scale-90'>Step 1</span>
              <span className='text-xl -mt-1 hover:scale-110'>Address</span>
            </div>
          </div>
          <div className='w-[160px] flex justify-center items-center gap-2 hover:cursor-pointer'>
            <div className='hover:scale-90'> <img src={shipping} alt="" /></div>
            <div className='flex flex-col text-[#B2B2B2]'>
              <span className='hover:scale-90 text-sm'>Step 2</span>
              <span className='text-xl -mt-1 hover:scale-110'>Shipping</span>
            </div>
          </div>
          <div className=' w-[160px] mr-5 flex justify-center items-center gap-2 hover:cursor-pointer'>
            <div className='hover:scale-90'> <img src={payment} alt="" className='h-6 w-6'/></div>
            <div className='flex flex-col'>
              <span className='hover:scale-90 text-sm'>Step 3</span>
              <span className='text-xl -mt-1 hover:scale-110'>Payment</span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-6 lg:gap-24 justify-center'>
        <div className='hidden lg:flex w-[512px] h-[704px] border-2 border-gray-100 rounded-lg p-8 flex-col justify-center'>
          <div><span className='text-xl font-semibold'>Summary</span></div>
          <div className='h-[248px] my-6 flex flex-col gap-4'>
            <div className='px-6 h-1/3 bg-[#F6F6F6] rounded-xl flex justify-between items-center gap-4'>
              <div><img src={phone} alt="" /></div>
              <div className='flex justify-between w-full'>
                <span className='font-medium'>Apple iPhone 14 Pro Max 128Gb</span>
                <div className='font-bold'>$1399</div>
              </div>
            </div>
            <div className='px-6 h-1/3 bg-[#F6F6F6] rounded-xl flex justify-between items-center gap-4'>
              <div><img src={headphone} alt="" /></div>
              <div className='flex justify-between w-full'>
                <span className='font-medium'>AirPods Max Silver</span>
                <div className='font-bold'>$549</div>
              </div>
            </div>
            <div className='px-6 h-1/3 bg-[#F6F6F6] rounded-xl flex justify-between items-center gap-4'>
              <div><img src={watch} alt="" /></div>
              <div className='flex justify-between w-full'>
                <span className='font-medium'>Apple Watch Series 9 GPS 41mm</span>
                <div className='font-bold'>$399</div>
              </div>
            </div>
          </div>
          <div className='h-[328px] flex flex-col gap-6'>
            <div className='h-[136px] flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <span className='text-sm text-[#545454] font-medium'>Address</span>
                <span className='font-medium'>1131 Dusty Townline, Jacksonville, TX 40322</span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='text-sm text-[#545454] font-medium'>Shipment method</span>
                <span className='font-medium'>Free</span>
              </div>
            </div>
            <div className='h-[168px] flex flex-col gap-7'>
              <div className='flex justify-between font-medium'>
                <span>Subtotal</span>
                <span>$2347</span>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                  <span>Estimated Tax</span>
                  <span className='font-medium'>$50</span>
                </div>
                <div className='flex justify-between'>
                  <span>Estimated shipping & Handling</span>
                  <span className='font-medium'>$29</span>
                </div>
              </div>
              <div>
                <div className='flex justify-between'>
                  <span className='font-medium'>Total</span>
                  <span className='font-bold'>$2426</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-[512px] flex flex-col gap-10 justify-between'>
          <div className='flex flex-col gap-5'>
            <span className='font-bold text-xl'>Payment</span>
            <div>
              <ul className='flex gap-10 text-sm font-medium'>
                <li className='underline underline-offset-8 hover:cursor-pointer'><span>Credit Card</span></li>
                <li className='text-gray-400 hover:cursor-pointer'>PayPal</li>
                <li className='text-gray-400 hover:cursor-pointer'>PapPal Credit</li>
              </ul>
            </div>
          </div>
          <div>
            <img src={card} alt="" />
          </div>
          <div>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <input
                  type='text'
                  id='cardholderName'
                  name='cardholderName'
                  value={formData.cardholderName}
                  onChange={handleChange}
                  placeholder='Cardholder Name'
                  className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>

              <div>
                <input
                  type='text'
                  id='cardNumber'
                  name='cardNumber'
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder='Card Number'
                  className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>

              <div className='flex space-x-4'>
                <div className='flex-1'>
                  <input
                    type='text'
                    id='expDate'
                    name='expDate'
                    value={formData.expDate}
                    onChange={handleChange}
                    placeholder='Exp.Date'
                    className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    required
                  />
                </div>

                <div className='flex-1'>
                  <input
                    type='text'
                    id='cvv'
                    name='cvv'
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder='CVV'
                    className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    required
                  />
                </div>
              </div>

              <div className='py-10 flex items-center'>
                <input
                  type='checkbox'
                  id='sameAsBilling'
                  name='sameAsBilling'
                  checked={formData.sameAsBilling}
                  onChange={handleChange}
                  className='mr-2 h-5 w-5 border-black rounded focus:ring-0 checked:bg-black checked:border-black'
                />
                <label htmlFor='sameAsBilling' className='font-medium text-[15px]'>
                  Same as Billing Address
                </label>
              </div>
              <div className='flex gap-2 font-medium'>
                <button
                  type='button'
                  className='hover:scale-105 active:scale-90 w-full h-16 border-2 border-black py-2 rounded-md hover:bg-black hover:text-white'>
                  Back
                </button>
                <button
                  type='submit'
                  className='hover:scale-105 active:scale-90 w-full h-16 bg-black text-white py-2 rounded-md hover:bg-white hover:text-black hover:border-2 border-black'>
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
