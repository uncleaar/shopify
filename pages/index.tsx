import getALlProducts from '@framework/product/get-all-products'
import type { InferGetStaticPropsType } from 'next'

import { getConfig } from '@framework/api/config'
import { Layout } from '@components/common'

export async function getStaticProps() {
  const config = getConfig()
  const products = await getALlProducts(config)

  return {
    props: {
      products,
    },

    revalidate: 4 * 60 * 60,
  }
}

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div className="">{JSON.stringify(products)}</div>
}

export default Home

Home.Layout = Layout
