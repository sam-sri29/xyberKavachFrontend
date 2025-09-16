import React from 'react'
import { IoShieldHalfOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";



function DashboardNavbar() {
    return (
        <>
            <div className='fixed top-0 left-0 right-0 z-50 bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] flex shadow-lg border-b border-gray-700'>

                <div className='flex items-center p-4'>
                    <IoShieldHalfOutline className='text-3xl text-blue-300 drop-shadow-lg' />
                    <p className='bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent text-2xl font-semibold ml-3 typing-text'>
                        Xyber Kavach
                    </p>
                </div>

                <div className='flex items-center ml-auto space-x-6 mr-20'>
                    <a className='text-white text-lg' href="/alerts">Alerts</a>
                    <a className='text-white text-lg' href="/reports">Reports</a>
                    <a className='text-white text-xl' href="/settings"><IoSettingsOutline /></a>
                </div>
            </div>
        </>
    )
}

export default DashboardNavbar