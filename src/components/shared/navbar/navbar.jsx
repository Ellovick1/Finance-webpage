import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import "./../../../styles/navbar.css"
import Button from '../button/button'
import Finance from './../../../assets/finance.png'

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between',marginLeft:'40px',paddingTop:'20px'}}>
      
    <div style={{display: 'flex', gap:'30px'}}>
      <h3> 
        <Link className='kobo' to={'/'}> <img src={Finance} alt="" /></Link>
      </h3>
      <ul style={{ display: 'flex', gap: '30px'}}>
        <li>
        <Link to={'/learn'}>Learn</Link>
        </li>
        <li>
        <Link to={'/resources'}>Resources</Link>
        </li>
        <li>
        <Link to={'/faqs'}>FAQS</Link>
        </li>
      </ul>
    </div>

      <div className='kobodrop'>
      <Button myText={'Install Kobodrop'} bgColor={'#344054'} textColor={'white'} myPadding={'5px 15px'}></Button>
      </div>
          
    </nav>
  )
}





export default Navbar