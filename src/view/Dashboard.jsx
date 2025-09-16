import React from 'react'
import DashboardNavbar from './Components/DashboardNavbar'
import TopCard from './Components/TopCard'
import MiddleCard from './Components/MiddleCard'
import ThirdCard from './Components/ThirdCard'
import AttackTrendsCard from './Components/AttackTrendsCard'

function Dashboard() {
  return (
    <>
      <div className='bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] min-h-screen overflow-x-hidden '>
        <DashboardNavbar />
        <TopCard />
        <MiddleCard />
        <ThirdCard />
        <AttackTrendsCard />
      </div>
    </>
  )
}

export default Dashboard


// bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)]