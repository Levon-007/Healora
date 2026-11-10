import React from 'react'
import "../Common Design/common.css"
import { FaRegCalendarAlt } from "react-icons/fa";

export default function AppointmentButton({content,...props}) {
  return (
    <div>
      <button type='button' className='nav-button' onClick={onclick} >
         <FaRegCalendarAlt className='mx-2 text-center fs-6' /> {content} 
      </button>
    </div>
  )
}
