import Head from 'next/head'

export async function getStaticProps() {
  const products = [1, 2, 3]

  return {
    props: {
      products,
    },
  }
}

const Home = () => {
  return <div>Home</div>
}

export default Home
