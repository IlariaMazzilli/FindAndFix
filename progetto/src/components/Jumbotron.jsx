import React from 'react';
import './Jumbotron.css';
import video from '../images/video.mp4';
import { Link as ScrollLink } from 'react-scroll';

function Jumbotron() {
    return (
        <div className="relative flex flex-col justify-center items-center containerJumbotron h-screen">
            <video
                className="absolute inset-0 object-contain mt-28 max-[768px]:mt-20"
                src={video}
                autoPlay
                loop
                muted
            ></video>
            <div className="relative z-10 flex flex-col justify-center items-center text-center">
                <h1 className='text-white text-3xl font-bold m-5'>SOLUZIONI RAPIDE <br />RISULTATI DURATURI</h1>
                
                <ScrollLink
                    to="comeFunziona"
                    smooth={true}
                    duration={1200}
                    className="h-fit button rounded bg-customBlue px-10 py-4 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 hover:bg-customGreen cursor-pointer"
                >
                    SCOPRI DI PIU'
                </ScrollLink>
            </div>
        </div>
    );
}

export default Jumbotron;