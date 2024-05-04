import React from 'react'
import House from '../images/House.jpg'

export const Hero = () => {
  return (
    <>
    <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src={House}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24 text-center">
        <h1 className="text-3xl font-extrabold text-customBlue sm:text-5xl">
        FIND & FIX
        <strong className="text-5xl:text-center font-extrabold text-customGreen sm:block"> FAQs </strong>
      </h1>
<br />
      <a href="#"
         className="mt-2 inline-block rounded bg-customBlue px-12 py-3 text-sm font-medium text-white transition hover:bg-customGreen focus:outline-none focus:ring"
         >
    SCOPRI DI PIU'
        </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
