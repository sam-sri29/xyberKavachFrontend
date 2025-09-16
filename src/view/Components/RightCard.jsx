import React from 'react'
import ToggleSwitch from './Toggle'

function RightCard() {
    return (
        <div className='w-[30vw] px-6 py-3 border bg-[#1e293b]/80 border-gray-600 rounded-2xl mx-6 '>
            <div className='py-2 '>
                <p className='text-white font-semibold text-lg'>Alert Channels</p>
            </div>
            <div className='py-2'>
                <div className='flex justify-between items-center'>
                    <p className='text-white font-semibold text-sm'>📧 Email Alerts</p>
                    <ToggleSwitch />
                </div>
                <input type="email" className='bg-gray-700 mt-3 border rounded-lg outline-1 outline-gray-600 border-none px-3 py-2 text-white  placeholder:text-sm' placeholder='admin@company.com' />
            </div>
            <div className='py-2'>
                <div className='flex justify-between items-center'>
                    <p className='text-white font-semibold text-sm'>📱 SMS Alerts</p>
                    <ToggleSwitch />
                </div>
                <input type="email" className='bg-gray-700 mt-3 border rounded-lg outline-1 outline-gray-600 border-none px-3 py-2 text-white  placeholder:text-sm' placeholder='+1 (555) 123-4567' />
            </div >
            <div className='py-2'>
                <div className='flex justify-between items-center'>
                    <p className='text-white font-semibold text-sm'>🔔 Push Notifications</p>
                    <ToggleSwitch />
                </div>
                <input type="email" className='bg-gray-700 mt-3 border rounded-lg outline-1 outline-gray-600 border-none px-3 py-2 text-white  placeholder:text-sm' placeholder='Desktop & Mobile' />
            </div>
            <div className='py-2'>
                <div className='flex justify-between items-center'>
                    <p className='text-white font-semibold text-sm'>💬 Slack Integration</p>
                    <ToggleSwitch />
                </div>
                <input type="email" className='bg-gray-700 mt-3 border rounded-lg outline-1 outline-gray-600 border-none px-3 py-2 text-white  placeholder:text-sm' placeholder='#security-alerts' />
            </div>
        </div>
    )
}

export default RightCard