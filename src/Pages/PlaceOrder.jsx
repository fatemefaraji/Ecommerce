import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../Components/Title';
import CartTotal from '../Components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../Context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();
  const { products } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!formData.firstName || !formData.email || !formData.street || !formData.phone) {
      alert("Please fill in all required fields!");
      return;
    }

    const orderData = {
      ...formData,
      paymentMethod: method,
      products,
      orderDate: new Date().toISOString()
    };

    console.log("Order Placed:", orderData);

    navigate('/orders');
  };

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Side */}
      <div className='flex flex-col gap-4 sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div className='flex gap-3'>
          <input name="firstName" value={formData.firstName} onChange={handleChange} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First Name' />
          <input name="lastName" value={formData.lastName} onChange={handleChange} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last Name' />
        </div>
        <input name="email" value={formData.email} onChange={handleChange} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email Address' />
        <input name="street" value={formData.street} onChange={handleChange} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street' />
        <div className='flex gap-3'>
          <input name="city" value={formData.city} onChange={handleChange} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City' />
          <input name="state" value={formData.state} onChange={handleChange} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input name="zip" value={formData.zip} onChange={handleChange} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Zip Code' />
          <input name="country" value={formData.country} onChange={handleChange} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country' />
        </div>
        <input name="phone" value={formData.phone} onChange={handleChange} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Phone Number' />
      </div>

      {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
          <div className='mt-12'>
            <Title text1="PAYMENT" text2="METHOD" />
            <div className='flex gap-3 flex-col lg:flex-row'>
              <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? 'bg-green-400' : ''}`}></p>
                <img className="h-5 mx-4" src={assets.stripe_logo} alt='Stripe' />
              </div>
              <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? 'bg-green-400' : ''}`}></p>
                <img className="h-5 mx-4" src={assets.razorpay_logo} alt='Razorpay' />
              </div>
              <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? 'bg-green-400' : ''}`}></p>
                <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
              </div>
            </div>
            <div className='w-full text-end mt-8'>
              <button onClick={handlePlaceOrder} className='bg-black text-white px-16 py-3 text-sm'>
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
