import './Card.css' 


function Card({image, title, description}) {
  return (
    <div className="maincontainer">
    <div className="back flex flex-col items-center contente-center place-content-center">
        <p className='flex justify-center px-6'>{description}</p>
        <br /><br /> <br /> <br /> <br />
        <div className="flex justify-center">
            <a
                className="h-fit rounded  bg-customGreen px-10 py-4 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 "
                href="#"
            >
               Cerca pro
            </a>
    </div>
    </div>
    <div className="front">
        <div className="image">
        <img src={image}/>
        <h2>{title}</h2>
        </div>
    </div>
</div>
  )
}

export default Card