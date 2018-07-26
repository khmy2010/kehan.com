import React from 'react'

import './books.css'
import collections from './books.json'

import Book from './book'

const books = () => {
  return (
    <section className="books section-content">
      <h1>What I Read</h1>
      <h2 className="title-helper">
        Because of the need to refresh the system for living
      </h2>
      <div className="books-container">
        {collections.map(({ title, author, year }) => (
          <Book key={title} title={title} author={author} year={year} />
        ))}
      </div>
    </section>
  )
}

export default books
