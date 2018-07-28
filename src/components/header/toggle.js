import React from 'react'

const bar = ({ clicked }) => (
  <div
    className="navbar-toggle"
    onClick={clicked}
    style={{ cursor: 'pointer', float: 'right' }}
  >
    <svg
      width={30}
      height={30}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#fff"
      fillRule="evenodd"
    >
      <path
        d="M4 7h24M4 15h24M4 23h24"
        fill="none"
        strokeWidth={4}
        fillOpacity={0.61}
      />
    </svg>
  </div>
)

export default bar
