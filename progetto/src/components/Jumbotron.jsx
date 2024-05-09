import './Jumbotron.css'

function Jumbotron() {
    return (

        <div
            className="bg-cover flex flex-col justify-center items-center containerJumbotron"
        >

            <h1 className='text-customBlue text-3xl font-bold m-5'>SOLUZIONI RAPIDE <br />RISULTATI DURATURI</h1>
            <a
                className="h-fit button rounded bg-customBlue px-10 py-4 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 hover:bg-customGreen"
                href="#"
            >
                VAI AI SERVIZI
            </a>
        </div>
    )
}

export default Jumbotron