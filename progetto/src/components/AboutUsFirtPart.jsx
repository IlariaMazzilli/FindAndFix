import React from 'react'
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import logoNoBg from '../images/logoNoBg.svg'

function AboutUsFirstPart() {
    return (
        <Fade triggerOnce={true} duration={3000}>
            <div className='flex justify-center mt-24'>
            <div className="sm:flex items-center w-2/2 flex">
                <div className="sm:w-1/2 p-10 mt-24 max-[600px]:hidden ">
                    <div className="image object-center text-center  mr-56 w-full h-full max-[600px]:hidden">
                        <img src={logoNoBg} className='w-2/4 h-full '/>
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">Chi siamo</span>
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Find & Fix</span>
                        </h2>
                        <p className="text-customBlue text-2xl leading-10">
                            Siamo il punto di incontro tra talentuosi professionisti e clienti esigenti. <br />
                            Ci impegniamo a facilitare connessioni significative, offrendo una <b>piattaforma innovativa dove talento e opportunità si incontrano.</b> <br />
                            
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </Fade>
    )
}

export default AboutUsFirstPart