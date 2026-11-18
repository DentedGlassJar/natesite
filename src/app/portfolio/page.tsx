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

export default function Portfolio() {
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
              Photo Album
            </h2>

            <div className='mt-1 ml-3 mb-5 text-xl flex-wrap'>
              <p className='mb-2'>
                A photo album that allows you to scroll through different photos with the use of the MySql database, with comments for each photo.
              </p>

              <p className='mb-2'>
                I used typescript for the language, NextJS for the web framework, and MySql for the database.
              </p>

              <p className='mb-2'>
                The key skills I demostrated was being able to connect different .tsx components in order to create a web app, as well as implementing MySql data into HTML of the web app.
              </p>

              <p>
                I overcame the issue of getting each of the images' comments into the HTML itself, by making a for-each loop with each comment in the array.
              </p>
            </div>
          </div>

          <div className='row-auto mr-2'>
            <div className='p-1 bg-[#FFE7C9] shrink rounded'>
              <Image src={'/images/photoalbum.png'} width={467} height={561} alt="This is an image of Nathaniel's photo album project" />
            </div>
          </div>
        </div>

        <div className='flex flex-col text-center items-center bg-[#FF6D37] text-[#FFE7C9] pl-4 pt-10 pb-10 pr-4 mb-10
        lg:flex-row lg:text-start lg:items-start'>
          <div className='flex-1
          lg:mr-25'>
            <h2 className='text-3xl mb-4 font-bold'>
              Listing with Comments
            </h2>

            <div className='mt-1 ml-3 mb-5 text-xl flex-wrap'>
              <p className='mb-2'>
                A pseudo shop listing, where you can add your own comment into the listing; with a name, date, rating, and comment.
              </p>

              <p className='mb-2'>
                For this project I used C# as a language, ASP.Net as a framework, and MySql for the database.
              </p>

              <p className='mb-2'>
                The key skills I demonstrated was being able to grab data from a database, and being able to drill it into HTML.
              </p>

              <p>
                I learned about the framework of ASP.Net, and how to use bootstrap for the stylization.
              </p>
            </div>
          </div>

          <div className='row-auto mr-2'>
            <div className='p-1 bg-[#FFE7C9] shrink rounded'>
              <Image src={'/images/listing.png'} width={467} height={561} alt="This is an image of Nathaniel's listing project" />
            </div>
          </div>
        </div>

        <div className='flex flex-col text-center items-center bg-[#FF6D37] text-[#FFE7C9] pl-4 pt-10 pb-10 pr-4 mb-10
        lg:flex-row lg:text-start lg:items-start'>
          <div className='flex-1
          lg:mr-25'>
            <h2 className='text-3xl mb-4 font-bold'>
              Transit Pass Management System
            </h2>

            <div className='mt-1 ml-3 mb-5 text-xl flex-wrap'>
              <p className='mb-2'>
                This project was about having a list of passes you can create, top-up, and scan; as well as viewing it's info and deleting said pass.
              </p>

              <p className='mb-2'>
                For this project, Java was mainly used to create it.
              </p>

              <p className='mb-2'>
                The key skills I demostrated with this project was coding in Java, as well as being able to create a model from a class using the project itself, and not from putting a class into the actual code.
              </p>

              <p>
                I learned about creating different types of classes from on specific superclass, and putting the model into a list.
              </p>
            </div>
          </div>

          <div className='row-auto mr-2'>
            <div className='p-1 bg-[#FFE7C9] shrink rounded'>
              <Image src={'/images/passsystem.png'} width={467} height={561} alt="This is an image of Nathaniel's pass system project" />
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