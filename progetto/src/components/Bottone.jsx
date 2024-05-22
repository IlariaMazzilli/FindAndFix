import React from "react"

function Bottone({text, href}) {
    return (
      <div className="flex justify-center">
              <a
                  className="h-fit button rounded bg-customBlue px-10 py-4 text-mobile font-medium  text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 hover:bg-customGreen"
                  href={href}
              >
                 {text}
              </a>
      </div>
    )
  }
  
  export default Bottone