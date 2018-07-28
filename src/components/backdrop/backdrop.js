import React from 'react'

import './backdrop.css'

const backdrop = ({ show, clicked }) => {
  if (!show) return null

  return <div className="backdrop" onClick={clicked} />
}

export default backdrop
