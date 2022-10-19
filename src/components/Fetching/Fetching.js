import React from 'react'
import { FaSpinner } from 'react-icons/fa'

function Fetching() {
  return (
    <div className='fetching'>
      <FaSpinner className='spinner'/>
    </div>
  )
}

export default Fetching
