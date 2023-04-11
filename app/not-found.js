'use client'

import Link from 'next/link'

function Pagenotfound() {
  return (
    <div className="notfound">
      <h1>Oooops!</h1>
      <h1>This file doesnot exists!</h1>
      <Link href="/">
        {' '}
        <p>Please go back Home</p>
      </Link>
    </div>
  )
}
export default Pagenotfound
