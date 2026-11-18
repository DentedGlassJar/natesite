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

export default function Resume() {
  return (
    <div className={karla.className}>
      <div className='flex flex-col bg-[#FF4500] text-[#FFE7C9] p-4 mb-10 rounded-b-xl
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

            <p className='mt-1 ml-3 mb-5 text-xl flex-wrap'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit purus. Aenean tincidunt id nisi vitae placerat. Suspendisse potenti. Aliquam risus ligula, commodo eget luctus id, faucibus bibendum magna. Nulla bibendum sem rutrum auctor elementum. Aenean et libero mollis, maximus libero quis, pellentesque est. Vestibulum libero arcu, gravida quis mauris ut, luctus lacinia ante. Sed libero sem, feugiat sed auctor sit amet, venenatis ac ipsum. Nunc eleifend hendrerit arcu, eget rhoncus enim sodales blandit. Donec quis metus orci. Nulla et dui sed massa gravida sodales. Nam molestie dolor massa, mollis faucibus nisi consequat ac. Nulla elementum sit amet est et mattis. Pellentesque vehicula neque eu sem luctus, a varius mi molestie. Suspendisse eu iaculis ante. Phasellus at dignissim sem.
            </p>
          </div>

          <div className='row-auto mr-2'>
            <div className='p-1 bg-[#FFE7C9] shrink rounded'>
              <Image src={'/images/natepic.jpg'} width={467} height={561} alt='Woah this is my face' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col-reverse text-center bg-[#C26080] text-[#EFBCCC] pl-4 p-3
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