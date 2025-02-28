import React from 'react'
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={"CONTACT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col justify-centermd:flex-row gap-10 mb-28' >
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt='contact-image'/>
        <div className=' flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600]'>Our Store</p>
          <p className='text-gray-500'>54709 Williams Station <br/>Suite 350, Washingtone</p> 
          <p className='text-gray-500'>Tel: +1 (234) 567 8989<br/> Email: admin@forever-lenafaraji.com</p>
          <p className='font-semibold text-xl'>Careers at Forever </p>
          <p className='text-gray-500'> Learn more about our teams and job openings.</p>
          <button className='border border-pink-700 py-8 text-sm hover: pink-500 hover:text-white transition-all duration-500 '>Explore</button>

        </div>

      </div>
      <NewsLetterBox/>
      
    </div>
  )
}

export default Contact;
