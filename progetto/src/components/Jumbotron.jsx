import './Jumbotron.css'

function Jumbotron() {
    return (

        <div
            className="bg-cover flex flex-col justify-center items-center containerJumbotron"
        >

            <h1 className='text-customBlue text-3xl font-bold m-5 sm:px-12'>Soluzioni rapide, risultati duraturi</h1>
            <a
                className="h-fit rounded bg-customBlue px-10 py-4 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 hover:bg-customGreen"
                href="#"
            >
                Trova pro
            </a>
        </div>
    )
}

export default Jumbotron