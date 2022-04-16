import type { InferGetStaticPropsType } from 'next'

import { getALlProducts } from '../framework/shopify/product/get-all-products'

export async function getStaticProps() {
  const products = await getALlProducts()

  return {
    props: {
      products,
    },

    revalidate: 4 * 60 * 60,
  }
}

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  getALlProducts()
  return <div>{JSON.stringify(products)}</div>
}

export default Home
