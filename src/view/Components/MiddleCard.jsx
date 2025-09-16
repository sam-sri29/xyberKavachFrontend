import React from 'react'
import DataCard from './DataCard'
import cardData from '../../data/cardData'
function MiddleCard() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-7 pb-7 '>
          {
            cardData.map((item)=>(
              <DataCard 
              key={item.id} 
              title={item.title}
              icon={item.icon}
              desc={item.desc}
              description={item.description}
              iconClass={item.iconClass}
              descriptionClass={item.descriptionClass}
              />
            ))
          }
        </div>
  )
}

export default MiddleCard