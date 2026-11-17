// importing the google font from NextJS
import { Kavoon } from 'next/font/google'

const kavoon = Kavoon({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {

  return (
    <>
      <div className={`bg-[#FF4500] text-[#FFE7C9] text-3xl ${kavoon.className} pl-4 p-3 mb-10`}>
        NateSite
      </div>

      <div className="bg-[#FF6D37] text-[#FFE7C9] mb-10 p-4">
        This is awesome
      </div>

      <div className="bg-[#C26080] text-[#EFBCCC] pl-4 p-3">
        @ 2026 Nathaniel White. All rights reserved.
      </div>
    </>
  );
}