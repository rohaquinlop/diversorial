import type { NextPage } from 'next'
import Head from 'next/head'
import Masthead from '../components/masthead'
import NavigationBar from '../components/navigation-bar'
import News from '../components/news'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Diversorial</title>
        <meta name="description" content="Realidad virtual, narrativa y arte para personas sensorialmente diversas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <NavigationBar />
      <Masthead />

      {
        /*
        <Masthead />
        */
      }
      <News />
    </div>
  )
}

export default Home
