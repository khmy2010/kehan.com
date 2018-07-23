import React from 'react'

const emoji = ({ children }) => (
  <span role="img" aria-label="img" aria-labelledby="img">
    {children}
  </span>
)

export default emoji
