import React from 'react'

import Tag from './tag/tag'

const tags = ({ list, klass }) => {
  if (!Array.isArray(list) || list.length === 0) return null
  return (
    <div className="article-tags">
      {list.map(tag => <Tag key={tag} item={tag} klass={klass} />)}
    </div>
  )
}

export default tags
