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
        <h1 className={`${kavoon.className} text-5xl flex-1`}>
          NateSite
        </h1>

        <div className='flex row-auto items-center text-xl'>
          <Link href="/">
            <div className='mr-8 hover:underline'>
              Home
            </div>
          </Link>

          <Link href="/about">
            <div className='mr-8 hover:underline'>
              About Me
            </div>
          </Link>

          <Link href="/portfolio">
            <div className='mr-8 hover:underline'>
              Portfolio
            </div>
          </Link>

          <Link href="/resume">
            <div className='mr-8 hover:underline'>
              Resume
            </div>
          </Link>

          <Link href="/contact">
            <div className='mr-4 hover:underline'>
              Contact
            </div>
          </Link>
        </div>
      </div>

      <div className='min-h-dvh'>
        <div className='flex row-auto bg-[#FF6D37] text-[#FFE7C9] pl-4 pt-10 pb-10 pr-4 mb-10'>
          <div className='flex-1'>
            <h2 className='text-2xl font-bold'>
              Welcome to my website!
            </h2>
            <p className='mt-2 ml-3 mr-50 flex-wrap'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit purus. Aenean tincidunt id nisi vitae placerat. Suspendisse potenti. Aliquam risus ligula, commodo eget luctus id, faucibus bibendum magna. Nulla bibendum sem rutrum auctor elementum. Aenean et libero mollis, maximus libero quis, pellentesque est. Vestibulum libero arcu, gravida quis mauris ut, luctus lacinia ante. Sed libero sem, feugiat sed auctor sit amet, venenatis ac ipsum. Nunc eleifend hendrerit arcu, eget rhoncus enim sodales blandit. Donec quis metus orci. Nulla et dui sed massa gravida sodales. Nam molestie dolor massa, mollis faucibus nisi consequat ac. Nulla elementum sit amet est et mattis. Pellentesque vehicula neque eu sem luctus, a varius mi molestie. Suspendisse eu iaculis ante. Phasellus at dignissim sem.
            </p>
          </div>


          <div className='row-auto mr-2'>
            <Image src={'/images/homersimp.jpeg'} width={359} height={450} alt='Woah this is my face' />
          </div>
        </div>
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