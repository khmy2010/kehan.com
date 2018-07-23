import React from 'react'

const link = ({ children, url, title }) => (
  <a
    href={url}
    hrefLang="en"
    target="_blank"
    type="text/html"
    title={title}
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

export default link
