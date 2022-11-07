import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <Image src="/78.png" width={200} height={200} alt="test laptop" className="hero-banner-image" />
        <div>
          <Link href={'/products/id'}>
            <button type='button'>
              BUTTON TEXT
            </button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>ACTUAL DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner