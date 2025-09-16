import React from 'react'
import RightCard from './RightCard'
import LeftCard from './LeftCard'

function ThirdCard() {
  return (
    <>
        <div className='flex justify-between'>
            <LeftCard /><RightCard />
        </div>
    </>
  )
}

export default ThirdCard