/* eslint-disable react/jsx-key */
import type { NextPage } from 'next'
import Main from '../pages/Components/Main';
import Head from 'next/head'
import NavHeader from './Components/NavHeader';







const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title >Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <div className='md:flex'>
        <NavHeader />
        <Main />
      </div>

    </div>
  )
}

export default Home