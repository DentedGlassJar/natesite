import Link from 'next/link';
import Image from 'next/image';

// importing the google font from NextJS
import { Kavoon } from 'next/font/google'

const kavoon = Kavoon({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {

  return (
    <>
      <div className='flex bg-[#FF4500] text-[#FFE7C9] p-4 mb-10 rounded-b-xl'>
        <div className={`${kavoon.className} text-5xl flex-1`}>
          NateSite
        </div>

        <div className='flex row-auto items-center text-xl'>
          <div className='mr-8'>
            Home
          </div>
          <div className='mr-8'>
            About Me
          </div>
          <div className='mr-8'>
            Portfolio
          </div>
          <div className='mr-8'>
            Resume
          </div>
          <div className='mr-4'>
            Contact
          </div>
        </div>
      </div>

      <div className=' bg-[#FF6D37] text-[#FFE7C9] mb-10 p-4'>
        This is NOT awesome
        <Image src={'/images/homersimp.jpeg'} width={359} height={450} alt='Woah this is my face' />
      </div>

      <div className='flex row-auto bg-[#C26080] text-[#EFBCCC] pl-4 p-3'>
        <div className='flex-1'>
          @ 2026 Nathaniel White. All rights reserved.
        </div>
        <div className='row-auto mr-2'>
          Email: nathanielworkemail906@gmail.com
        </div>
      </div>
    </>
  );
}