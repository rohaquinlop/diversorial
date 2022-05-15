import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Masthead from '../components/masthead'
import News from '../components/news'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Diversorial</title>
        <meta name="description" content="Realidad virtual, narrativa y arte para personas sensorialmente diversas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
      <News />
    </div>
  )
}

export default Home
