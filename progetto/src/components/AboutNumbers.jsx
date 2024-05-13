import React from 'react'
import { Fade } from "react-awesome-reveal";


function AboutNumbers() {
  return (
    <section className="bg-white">
    <div className="px-4 py-8 mx-auto max-w-screen-xl sm:py-16 lg:px-6 xl:px-0 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-md text-center md:mb-16 mb-28">
            <h2 className="text-5xl tracking-tight font-bold text-customBlue md:text-4xl dark:text-white mt-36">
               I migliori in Italia
            </h2>
        </div>
        <div className="mb-4 space-y-4 flex flex-wrap justify-center items-end gap-8 ">
        <Fade triggerOnce={true} duration={1000}>
            <div className="flex justify-center pt-8 items-center p-6 text-center bg-customBlue xl:p-12 dark:bg-gray-800 rounded-full ">
                <div className="text-white dark:text-white">
                    <p className="mb-2 text-4xl font-extrabold md:text-5xl">500k</p>
                    <h3 className="mb-2 text-xl font-semibold">Progetti finiti</h3>
                    <p className="font-light text-white dark:text-gray-400">Ogni giorno</p>
                </div>
            </div>
            </Fade>

            <Fade triggerOnce={true} duration={1000} delay={600}>
            <div className="flex justify-center items-center p-6 text-center bg-customBlue rounded-full xl:p-12 dark:bg-gray-800 ">
                <div className="text-white dark:text-white">
                    <p className="mb-4 text-4xl font-extrabold md:text-5xl">4,9/5</p>
                    <h3 className="mb-2 text-xl font-semibold">Voto medio</h3>
                    <p className="font-light text-white dark:text-gray-400">Su TrustPilot</p>
                </div>
            </div>
            </Fade>

            <Fade triggerOnce={true} duration={1000} delay={900}>
            <div className="flex justify-center pt-6 items-center p-6 text-center bg-customBlue xl:p-12 dark:bg-gray-800 rounded-full ">
                <div className="text-white dark:text-white">
                    <p className="mb-4 text-4xl font-extrabold md:text-5xl">9mln</p>
                    <h3 className="mb-2 text-xl font-semibold">Utenti attivi</h3>
                    <p className="font-light text-white dark:text-gray-400">Ogni mese</p>
                </div>
            </div>
            </Fade>
        </div>
    </div>
</section>
  )
}

export default AboutNumbers