'use client'
import Link from 'next/link'

function Pagenotfound() {
  return (
        <div className="notfound">
            <h1>Oooops!</h1>
            <h1>This file doesnot exists!</h1>
            <p>Please go back <Link href="/">Home</Link></p>
        </div>
  )
}
export default Pagenotfound