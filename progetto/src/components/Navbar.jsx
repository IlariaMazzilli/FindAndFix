import logo from '../images/logo.svg'

function Navbar( ) {
  return (
    <div>
        <header className="bg-white p-4 sm:p-2 z-index:200">
  <div className="mx-auto max-w-screen-xl px-4  lg:px-8 sm:px-0">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <img src={logo} className='w-20 h-16 sm:w-10 sm:h-8' alt= 'Find & Fix'/>
        </a>
      </div>

      <div className="md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6  sm:whitespace-nowrap">
            <li>
              <a className=" text-customBlue transition hover:text-customGreen text-xl sm:text-base" href="#"> Chi siamo </a>
            </li>

            <li>
              <a className="text-customBlue transition hover:text-customGreen text-xl sm:text-base" href="#"> Servizi </a>
            </li>

            <li>
              <a className=" text-customBlue transition hover:text-customGreen text-xl sm:text-base" href="#"> Contatti </a>
            </li>

          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex ">
          <a
            className="rounded-md bg-customBlue px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-customGreen sm:p-2"
            href="#"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-customBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-customGreen sm:hidden"
              href="#"
            >
              Registrati
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"           
>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
    </div>
  )
}

export default Navbar