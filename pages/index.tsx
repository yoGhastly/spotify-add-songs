import type { NextPage } from 'next'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import { Input } from '../components/Input'
import { Layout } from '../components/Layout'
import { NewestTracks } from '../components/NewestTracks'
import { cn } from '../utils/tailwind'

const Home: NextPage = () => {
  return (
    <div>
      <Layout title="GE ITS Add songs">
        <header className='flex justify-center flex-wrap text-center py-20 px-10'>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#42d392] to-[#647eff]">
            Welcome to GE ITS Add Songs!
          </h1>
          <p className="mt-3 text-2xl text-[#979797]">
            Get started by typing the URL of the song below{' '}
          </p>
        </header>

        <section className="flex flex-col justify-center relative max-w-5xl mx-auto p-5">
          <Input value="" onChange={() => { }} />
          <div className='flex flex-col justify-center p-6 max-w-4xl rounded-lg border-current bg-[#242424] border border-gray-800'>
            <div className={cn('grid grid-cols-1 sm:grid-cols-2')}>
              <div>

                <h2 className="text-xl font-semibold">See the newest 5 tracks added to the playlist</h2>
                <NewestTracks />
              </div>
              <div className={cn(
                "flex justify-center bg-transparent aspect-w-1 aspect-h-1",
                "w-full overflow-hidden",
                "rounded-lg bg-gray-200",
                "xl:aspect-w-7 xl:aspect-h-8",
              )}   >
                <Image src='/icon.svg' alt=""
                  layout="fill"
                  objectFit="cover" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    </div>
  )
}

export default Home
