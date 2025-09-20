import React from 'react'
import OnBoarding from './view/OnBoarding'
import { Route, Routes } from 'react-router-dom'
import Signup from './view/Signup'
import Login from './view/Login'
import RegisterSite from './view/RegisterSite'
import Dashboard from './view/Dashboard'
import Alerts from './view/pages/Alerts'
import Reports from './view/pages/Reports'
import ActiveThreats from './view/pages/ActiveThreats'
import BlockedData from './view/pages/BlockedAttacks'
import BlockedAttacks from './view/pages/BlockedAttacks'
import Vulnerabilities from './view/pages/Vulnerabilities'
import SystemHealth from './view/pages/SystemHealth'
import ForgotPassword from './view/pages/ForgotPassword'
import About from './view/Components/SettingComponents/About'
import Edit from './view/Components/SettingComponents/Edit'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<OnBoarding/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<RegisterSite/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/alerts' element={<Alerts/>}/>
      <Route path='/reports' element={<Reports/>}/>
      <Route path='/active-threats' element={<ActiveThreats/>}/>
      <Route path='/blocked-attacks' element={<BlockedAttacks/>}/>
      <Route path='/vulnerabilities' element={<Vulnerabilities/>}/>
      <Route path='/system-health' element={<SystemHealth/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/about' element={<About/>}/> 
      <Route path='/edit' element={<Edit/>}/>
    </Routes>
    </>
  )
}

export default App