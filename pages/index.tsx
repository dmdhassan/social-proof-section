import { NextPage } from 'next'
import Head from 'next/head'
import { HeaderText } from '../components/HeaderText'
import { StarRating } from '../components/StarRating'
import { Testimonials } from '../components/Testimonials'


const BG_TOP_MOBILE = '/bg-pattern-top-mobile';
const BG_TOP_DESKTOP = '/bg-pattern-top-desktop';
const BG_BOTTOM_MOBILE = '/bg-pattern-bottom-mobile';
const BG_BOTTOM_DESKTOP = '/bg-pattern-bottom-desktop';

const Home: NextPage = () => {
  return(
    <>
      <Head>
        <title className='flex min-h-screen flex-col items-center bg-[#1e1f29]'>Social Proof Section</title>
        <link rel='icon' href='/favicon.png'/>
      </Head>

      <div className="flex flex-col md:flex-row items-center justify-between mx-a px-4 md:px-24 py-2 bg-[url('/bg-pattern-top-mobile')]">
        <HeaderText />
        <div className="flex flex-col justify-center items-center">
          <StarRating text="Rated 5 Stars in Reviews" />
          <StarRating text="Rated 5 Stars in Report Guru" />
          <StarRating text="Rated 5 Stars in Best Tech" />
        </div>
      </div>

      <Testimonials />
    </>
  )
}

export default Home;