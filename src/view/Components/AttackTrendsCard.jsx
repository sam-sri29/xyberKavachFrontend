import React from 'react'

function AttackTrendsCard() {
  return (
    <>
    <div className='flex justify-between items-center border border-gray-600 rounded-2xl px-10 py-10 bg-[#1e293b]/80 m-6'>
        <p className='text-white font-semibold text-lg'>Attack Trends (Last 7 Days)</p>
        <div className='flex '>
            <p className='text-white text-sm '><span className='text-xs ml-4'>🔴</span>DDoS</p>
            <p className='text-white text-sm '><span className='text-xs ml-4'>🟡</span>SQLi</p>
        </div>
    </div>
    </>
  )
}

export default AttackTrendsCard