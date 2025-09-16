import React from 'react'

function LeftCard() {
    return (
        <>
            <div className='w-[70vw] px-10 py-3 border bg-[#1e293b]/80 border-gray-600 rounded-2xl mx-6 '>
                <div className='flex justify-between items-center '>
                    <p className='text-white font-semibold text-lg'>Recent Threat Activity</p>
                    <div>
                        <button className='text-white font-semibold text-sm px-3 py-2 bg-[#1e293b]/80 gap-5 mx-2 rounded-lg hover:bg-blue-500 duration-600 outline-1 outline-gray-600'>All</button>
                        <button className='text-white font-semibold text-sm px-3 py-2 bg-[#1e293b]/80 gap-5 mx-2 rounded-lg hover:bg-blue-500 duration-600 outline-1 outline-gray-600'>Critical</button>
                        <button className='text-white font-semibold text-sm px-3 py-2 bg-[#1e293b]/80 gap-5 mx-2 rounded-lg hover:bg-blue-500 duration-600 outline-1 outline-gray-600'>Today</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftCard