import React from 'react'

import Link from './link'

const linkedin = props => (
  <Link
    url="https://www.linkedin.com/in/seekehan/"
    title="View my professional profile at Linkedin"
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
        d="M16.631 14.031v-.046l-.03.046h.03zM28.282.5H2.716C1.492.5.5 1.463.5 2.649v25.702c0 1.186.992 2.148 2.216 2.148h25.566c1.226 0 2.218-.963 2.218-2.148V2.649C30.5 1.462 29.507.5 28.282.5zM9.593 25.614H5.062V12.067h4.531v13.546zM7.328 10.217h-.03c-1.52 0-2.503-1.04-2.503-2.34 0-1.329 1.014-2.34 2.563-2.34s2.504 1.011 2.534 2.34c0 1.3-.984 2.34-2.564 2.34zm18.605 15.397h-4.531v-7.249c0-1.82-.656-3.063-2.295-3.063-1.252 0-1.997.838-2.325 1.647-.12.289-.149.693-.149 1.098v7.565h-4.531V12.067h4.531v1.917c.602-.923 1.679-2.237 4.084-2.237 2.981 0 5.216 1.937 5.216 6.098v7.769z"
        stroke="none"
      />
    </svg>
  </Link>
)

export default linkedin
