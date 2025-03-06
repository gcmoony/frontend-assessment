import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='px-8 py-2 '>
      <nav className='border-b-gray-500 border-b-2 flex justify-between py-3 '>

        {/* Nav links and logo */}
        <div className=' flex gap-5 items-center'>
          {/* <Image src={"/logo.png"} alt='Logo' width={50} height={50}/> */}
          <h1 className=' py-3 '>Logo</h1>
          <ul className='flex gap-5'>
            <li className='bg-slate-800 rounded-xl p-3'>Dashboard</li>
            <li className='p-3'>Browse</li>
            <li className='p-3'>Cart</li>
          </ul>
        </div>

        {/* Profile */}
        <div className='flex gap-5 text-3xl'>
          <button>🔔</button>
          <button>🙂</button>
        </div>
      </nav>

    
      <h2 className='font-bold text-4xl my-10'>Dashboard</h2>
      <div className='bg-slate-300 text-black flex gap-5 flex-col p-5 rounded'>
        {/* Top Bar */}
        <div className='flex justify-between '>
          <div>
            <h3 className='text-xl font-bold'>Favorites</h3>
            <p className='opacity-80'>A list of your favorites items to keep track of.</p>
          </div>
          <button className='bg-cyan-700 px-5 text-white rounded'>+ Add</button>
        </div>

        {/* Table */}
        <p>Placeholder</p>
      </div>
      
    </main>
  )
}
