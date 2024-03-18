import React from 'react'
import TrainerCard from '../layouts/TrainerCard'
import img1 from "../assests/img/img1.jpg"
import img2 from "../assests/img/img2.jpg"
import img3 from "../assests/img/img3.jpg"


const Trainers = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5">
        <h1 className='text-4xl font-semibold text-center mt-10'>Our Trainers</h1>
        <div className="flex flex-col md:flex-row justify-center mt-10 gap-8">
            <TrainerCard img={img1} name="Pritam" />
            <TrainerCard img={img2} name="Manoj" />
            <TrainerCard img={img3} name="Bijaya" />
        </div>
    </div>
  )
}

export default Trainers