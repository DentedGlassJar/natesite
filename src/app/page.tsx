import Link from 'next/link';
import Image from 'next/image';

// importing the google fonts from NextJS
import { Kavoon, Karla } from 'next/font/google'

const kavoon = Kavoon({
  weight: '400',
  subsets: ['latin']
});

const karla = Karla({
  weight: '400',
  subsets: ['latin']
});

export default function Home() {
  return (
    <div className={karla.className}>
      <div className='flex flex-col bg-[#B83100] text-[#FFE7C9] p-4 mb-10 rounded-b-xl
      lg:flex-row'>
        <h1 className={`${kavoon.className} text-center text-4xl mb-2 md:text-5xl
        lg:flex-1 lg:text-start`}>
          NateSite
        </h1>

        <div className='flex row-auto justify-center 
        md:text-xl
        lg:items-center lg:text-2xl'>
          <Link href="/">
            <div className='mr-4 hover:underline
            lg:mr-8'>
              Home
            </div>
          </Link>

          <Link href="/about">
            <div className='mr-4 text-center hover:underline
            lg:mr-8'>
              About
            </div>
          </Link>

          <Link href="/portfolio">
            <div className='mr-4 hover:underline
            lg:mr-8'>
              Portfolio
            </div>
          </Link>

          <Link href="/resume">
            <div className='mr-4 hover:underline
            lg:mr-8'>
              Resume
            </div>
          </Link>

          <Link href="/contacts">
            <div className='mr-2 hover:underline
            lg:mr-4'>
              Contacts
            </div>
          </Link>
        </div>
      </div>

      <div className='min-h-dvh'>
        <div className='flex flex-col text-center items-center bg-[#FF6D37] text-[#FFE7C9] pl-4 pt-10 pb-10 pr-4 mb-10
        lg:flex-row lg:text-start lg:items-start'>
          <div className='flex-1
          lg:mr-25'>
            <h2 className='text-3xl mb-4 font-bold'>
              Welcome to my website!
            </h2>

            <div className='mt-1 ml-3 mb-5 text-xl flex-wrap'>
              <p className='mb-2'>
                My name is Nathaniel White; and this is the website for my
                previous projects, resume, and contacts.
              </p>

              <p>I'm a website developer,
                with a focus on coding how the website functions and is designed.
              </p>
            </div>
          </div>

          <div className='row-auto mr-2'>
            <div className='p-1 bg-[#FFE7C9] shrink rounded'>
              <Image src={'/images/natepic.jpg'} width={467} height={561} alt="This is an image of the website's creator; Nathaniel White." />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col-reverse text-center bg-[#85324E] text-[#F5F5F5] pl-4 p-3
      md:flex-row md:text-start 
      lg:text-xl lg:p-6'>
        <div className='md:flex-1'>
          @ 2026 Nathaniel White. All rights reserved.
        </div>
        <div className='mb-3
        md:mb-0'>
          Email: nathanielworkemail906@gmail.com
        </div>
      </div>
    </div>
  );
}