import React from 'react'

import Link from './link'

const facebook = props => (
  <Link
    url="https://www.facebook.com/kehan.see"
    title="View my profile at Facebook"
  >
    <svg
      width={30}
      height={30}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#fff"
      fillRule="evenodd"
      {...props}
    >
      <path
        d="M17.612 30.5V16.815h4.593l.688-5.333h-5.281V8.078c0-1.544.429-2.596 2.643-2.596l2.824-.001V.71C22.591.645 20.915.5 18.964.5c-4.072 0-6.859 2.485-6.859 7.05v3.933H7.5v5.333h4.605V30.5h5.507"
        stroke="none"
      />
    </svg>
  </Link>
)

export default facebook
