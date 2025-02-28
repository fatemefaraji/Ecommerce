import React from 'react'
import Title from '../Components/Title';
import {assets} from '../assets/assets';
import NewsletterBox from '../Components/NewsLetterBox';
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='about-image'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
        <p>Blah blah bla about this clothing factory for men and wemon and kids</p>
        <p>about the wuality of products....</p>
        <b className='text-gray-800'>our mission </b>
        <p>our mission is.......</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 '>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex0-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>
we meticulously select and vet product.....
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex0-col gap-5'>
          <b >Convinience</b>
          <p className='text-gray-600' >
we meticulously select and vet product.....
          </p>
        </div>   
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex0-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>
we meticulously select and vet product.....
          </p>
        </div>

      </div>
      <NewsletterBox/>
      
    </div>
  )
}

export default About;
