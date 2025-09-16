import React from 'react'
import ProgressBar from './ProgressBar'

function TopCard() {
    return (
        <>
            <div className='bg-[#1e293b]/80 p-6 border border-gray-700 rounded-2xl mt-28 mb-8 mx-8 space-y-4  '>
                <div className=''>
                    <p className='text-xl text-white font-medium'><span className='text-sm mr-3'>🟢</span>System Protected</p>
                </div>
                <div>
                    {/* later on connect it with DB */}
                    {/* <ProgressBar value={progress}/> */}
                    <ProgressBar value={85} />
                </div>
                <div className='text-gray-400 text-sm'>
                    <p>Security Score: 85/100 | Last scan: 2 minutes ago</p>
                </div>
            </div>
        </>
    )
}

export default TopCard