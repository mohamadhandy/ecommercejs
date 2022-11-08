/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ product: { image, slug, name, price } }) => {
  return (
    <div>
      <Link href={`/products/${slug.current}/`}>
        <div className='product-card'>
          <img src={urlFor(image && image[0])} width={250} height={250} className="product-image" alt="Product image" />
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product