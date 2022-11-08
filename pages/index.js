import React from 'react'
import FooterBanner from '../components/FooterBanner'
import { client } from '../lib/client'
import HeroBanner from '../components/HeroBanner'
import Product from '../components/Product'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {
      products, bannerData
    }
  }
}

export default Home