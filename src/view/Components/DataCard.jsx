import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";


function DataCard({ title, icon: Icon, desc, description, iconClass , descriptionClass }) {
    return (
        <>
            <div className='bg-[#1e293b]/80 p-6 border border-gray-700 rounded-2xl space-y-4 transition-transform duration-300 transform hover:scale-105
                 shadow-md hover:shadow-2xl'>
                <div className=' flex justify-between  items-center'>
                    <p className='text-gray-400 text-lg mr-20'>{title}</p><Icon className={iconClass}/>
                </div>
                <div>
                    <p className='text-3xl font-bold text-white'>{desc}</p>
                </div>
                <div className=' '>
                    <p className={`flex items-center ${descriptionClass || "text-white"}`} >{description}</p>
                </div>
            </div>
        </>
    )
}

export default DataCard