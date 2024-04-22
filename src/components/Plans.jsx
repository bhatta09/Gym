import React from 'react'
import PlansCard from '../layouts/PlansCard'

const Plans = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center md:px-32 px-5'>
        <h1 className='text-4xl font-semibold text-center'>Gym <span className='text-brightRed'>membership</span></h1>

        <div className='flex flex-col md:flex-row justify-center mt-10 gap-8'>
            <PlansCard title="Trail Plan" price="Rs0" />
            <PlansCard title="Plus Plan" price="Rs2000" />
            <PlansCard title="ProMax Plan" price="Rs4000" />
        </div>
    </div>
  )
}

export default Plans