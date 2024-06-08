import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import image from '../../assets/profilePic.png'
import facebook from '../../assets/facebook_icon.png'
import whatsapp from '../../assets/whatsapp2.png'
import linkedin from '../../assets/linkedin_icon.png'
import twitter from '../../assets/twitter_icon.png'
import resume from '../../assets/ilyas cv.pdf'


const Hero = () => {
  return (
    <div className='flex h-auto justify-around items-center py-8 flex-wrap bg-gradient-to-r from-blue-300 to-blue-500  shadow-[0_5px_6px_8px_rgba(0,0,0,0.3)]' id='home'>
      <div className='rounded-full shadow-lg'>
        <img className='rounded-full w-[250px] h-[250px] bg-white' src={image} alt="porfile" />
      </div>
      <div className='social space-y-4 grow-1 text-center'>
        <ul className='flex space-x-3 items-center justify-center'>
          <li><img className='w-8 ' src={facebook} alt="facebook" /></li>
          <li><img className='w-8 ' src={whatsapp} alt="whatsapp" /></li>
          <li><img className='w-8 ' src={linkedin} alt="linkedin" /></li>
          <li><img className='w-8 ' src={twitter} alt="twitter" /></li>
        </ul>
        <h1 className='text-5xl bold'>Muhammad <span className='text-gray-300'>ilyas</span></h1>
        <TypeAnimation className='text-white underline'
      sequence={[
        'Frontend Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Design',
        1000,
        'MERN Stack',
        1000,
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />

    <div className="btn flex space-x-3 justify-center">
      <button className='bg-gradient-to-r from-blue-400 to-blue-500 py-4 px-8 text-white rounded-full'>Hire me</button>
      <button className='py-4 px-8 bg-white shadow-[white] text-black rounded-full'><a type='file' target='blank' href={resume}>  Get Resume</a> </button>
    </div>
      </div>
    </div>
  )
}

export default Hero
