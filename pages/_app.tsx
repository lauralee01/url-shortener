import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
   
  )
}

export default MyApp
