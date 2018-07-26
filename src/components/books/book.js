import React from 'react'

import './book.css'

const book = ({ title, author, year }) => (
  <div className="book">
    <div className="book-title">{title}</div>
    <div className="book-content">
      <p className="book-author">
        <span className="strong">{author}</span>, {year}
      </p>
    </div>
  </div>
)

export default book
