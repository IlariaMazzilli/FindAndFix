import React from 'react'
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

function AboutUsFirstPart() {
  return (
    <Fade triggerOnce={true} duration={3000}>
    <div className="sm:flex items-center max-w-screen-xl flex">
    <div className="sm:w-1/2 p-10 mt-24 mobile:mt-96 mobile:p-2 ">
        <div className="image object-center text-center mobile:hidden">
            <img src="https://i.imgur.com/WbQnbas.png"/>
        </div>
    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                voluptatum.
            </p>
        </div>
    </div>
</div>
</Fade>
  )
}

export default AboutUsFirstPart