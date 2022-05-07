import { AppProps } from 'next/app'
import '@assets/main.css'

const Noop: React.FC = ({ children }) => <> </>

function App({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: React.FC } }) {
  const Layout = Component.Layout ?? Noop

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
