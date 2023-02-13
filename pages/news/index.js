import Link from 'next/link'
import React from 'react'

const News = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li><Link href="/news/nextjs">NextJS is a great framework</Link></li>
        <li><Link href="/news/something">Something Else</Link></li>
      </ul>
    </>
  )
}

export default News
