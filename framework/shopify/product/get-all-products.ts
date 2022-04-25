import { normalizeProduct, getAllProductsQuery } from '../utils'
import { ProductConnection } from '../schema'
import { Product } from '@common/types/product'
import { ApiConfig } from '@common/types/api'

type ReturnType = {
  products: ProductConnection
}

const getALlProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({
    query: getAllProductsQuery,
    url: config.apiUrl,
  })

  const products =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    []

  return products
}

export default getALlProducts
