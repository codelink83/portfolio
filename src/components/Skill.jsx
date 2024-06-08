import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import bootstrap from '../assets/bootstrap.png'
import react from '../assets/react.png'
import express from '../assets/express.png'
import mongodb from '../assets/mongodb.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import jquery from '../assets/jquer.png'
import nextjs from '../assets/nextjs.png'
import gethub from '../assets/gethub.png'
import redux from '../assets/redux.png'

const Skill = () => {
  return (
    <div className='mt-16' id='skill'>
      <h1 className="text-5xl text-blue-500 text-center mt-5">TECH SKILL</h1>
      <hr className="w-[150px] bg-blue-500 border-none h-1 mx-auto mt-5" />
      <section className='flex justify-around items-center flex-wrap px-10 gap-y-10 my-16 gap-x-3 '>
        <div className='flex justify-between items-center hover:translate-2 duration-300 w-[320px] p-4  bg-white rounded-xl'>
            <img className='w-16' src={html} alt="" />
            <h1 className='text-2xl text-blue-900'>HTML</h1>
        </div>
        <div className='flex justify-between items-center hover:translate-2 duration-300 w-[320px] p-4  bg-white rounded-xl'>
            <img className='w-16' src={css} alt="" />
            <h1 className='text-2xl text-blue-900'>CSS</h1>
        </div>
        <div className='flex justify-between items-center hover:translate-2 duration-300 w-[320px] p-4  bg-white rounded-xl'>
            <img className='w-16' src={bootstrap} alt="" />
            <h1 className='text-2xl text-blue-900'>BOOTSTRAP</h1>
        </div>
        <div className='flex justify-between items-center hover:translate-2 duration-300 w-[320px] p-4  bg-white rounded-xl'>
            <img className='w-16' src={tailwind} alt="" />
            <h1 className='text-2xl text-blue-900'>TAILWIND CSS</h1>
        </div>
        <div className='flex justify-between items-center hover:translate-2 duration-300 w-[320px] p-4  bg-white rounded-xl'>
            <img className='w-16' src={react} alt="" />
            <h1 className='text-2xl text-blue-900'>REACT JS</h1>
        </div>
        <div className='flex justify-between items-center hover:translate-2 duration-300 w-[320px] p-4  bg-white rounded-xl'>
            <img className='w-16' src={express} alt="" />
            <h1 className='text-2xl text-blue-900'>EXPRESS JS</h1>
        </div>
        <div className='flex justify-between items-center hover:translate-2 duration-300 w-[320px] p-4  bg-white rounded-xl'>
            <img className='w-16' src={mongodb} alt="" />
            <h1 className='text-2xl text-blue-900'>MONGO DB</h1>
        </div>
        <div className='flex justify-between items-center hover:translate-2 duration-300 w-[320px] p-4  bg-white rounded-xl'>
            <img className='w-16' src={javascript} alt="" />
            <h1 className='text-2xl text-blue-900'>JAVASCRIPT</h1>
        </div>
        <div className='flex justify-between items-center hover:translate-2 duration-300 w-[320px] p-4  bg-white rounded-xl'>
            <img className='w-16' src={redux} alt="" />
            <h1 className='text-2xl text-blue-900'>REDUX</h1>
        </div>
        <div className='flex justify-between items-center hover:translate-2 duration-300 w-[320px] p-4  bg-white rounded-xl'>
            <img className='w-16' src={jquery} alt="" />
            <h1 className='text-2xl text-blue-900'>JQUERY</h1>
        </div>
        <div className='flex justify-between items-center hover:translate-2 duration-300 w-[320px] p-4  bg-white rounded-xl'>
            <img className='w-16' src={gethub} alt="" />
            <h1 className='text-2xl text-blue-900'>GET HUB</h1>
        </div>
        <div className='flex justify-between items-center hover:translate-2 duration-300 w-[320px] p-4  bg-white rounded-xl'>
            <img className='w-16' src={nextjs} alt="" />
            <h1 className='text-2xl text-blue-900'>NEXT JS</h1>
        </div>
      </section>
    </div>
  )
}

export default Skill
