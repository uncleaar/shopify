import getALlProducts from '@framework/product/get-all-products'
import type { InferGetStaticPropsType } from 'next'

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
  return <div>{JSON.stringify(products)}</div>
}

export default Home
