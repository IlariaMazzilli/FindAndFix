import "./Prowewe.scss";

function UserPage() {
  return (
    <div className="container-user-page">
      <main className="page__course">
        <div className="container-page">
          <div className="course-content">
            <h1 className="name-user text-5xl">Sylvia Darqua</h1>
            <h2 className="profession text-customBlue text-2xl">Interior Designer</h2>

            <div className="content-block">
              <span className="label">Valutazione</span>
              <span className="stars">★★★★☆</span>
            </div>

            <div className="content-block w-full">
              <a className="send-a-message w-full ">
              <a
                  className="h-fit button rounded bg-customBlue px-5 py-2 text-mobile font-medium  text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 hover:bg-customGreen"
                  href="#"
              >
                 Contattami!
                 
              </a>
              <button className="hover:scale-110  hover:customGreen"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="43" viewBox="0 0 16 16"><path fill="#0F5DA6" d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/></svg>
              </button>
              </a>



              <a className="add_to_favorites ">
              
                {/* solo recensioni */}
              </a>
            </div>

            <div className="content-block">
              <ul id="tabs">
                <li className="active">
                  <a href="#">Descrizione</a>
                </li>
              </ul>

              <ul id="tab">
                <li className="active">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Moatibus amet quisquam accus, porro, alias sed distinctio.
                    necessitatibus amet quisquam accusamus minus rederit cum
                    dolores ab ratione, porro, alias sed distinctio.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi quo, culpa susc ipsum assumenda odio doloribus
                    necessitatibus amequam porro, alias sed distinct.
                    necessitatibus quisquam accusamus minus reprehenderit cum
                    dolores ab ratione, porro,as sed distinctio.
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Moatibus ametoijoj ioj iuh accusamus minus rederit cum
                    dolores ab ratione, poruiyg ro, alias sed distinctio.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi quo, culpa susc ipsum as sed distinct. neceby tbatibus
                    quisquam ac byuu minus reprehenderit cum dolores ab ratione,
                    porro,as sed distinctio.
                  </p>
                </li>
                <li>
                  <p>
                    Luy uy lor sit amet, c ur adipisicing elit. Moatibus amet
                    quisquam accus, porro, alias sed distinctio. necessitatibus
                    hui reprehenderit cum dolores ab ratione, porro,as sed
                    distinctio.
                  </p>
                </li>
                <li>
                  <p>
                    ipsum dolor sit amet, consectetur adipisicing elit. Moatibus
                    quisquam accus, imiinus rederit cum dolores ab ratione,
                    porro, alias sed distinctio.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi quo, culpa susc ipsum assumes sed distinct.
                    necessitatibuo joij oij bhuohb ouyone, porro,as sed
                    distinctio.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <aside className="courseSidebar">
            <div className="courseSidebar__featureImage"></div>

            <ul className="courseStats">
              <li>
                <span className="label courseStats__label">Telefono</span>
                <span className="courseStats__divider"></span>
                <span className="courseStats__data">+39 357 145687</span>
              </li>
              <li>
                <span className="label courseStats__label">Email</span>
                <span className="courseStats__divider"></span>
                <span className="courseStats__data">sylvia@outlook.com</span>
              </li>
            </ul>
          </aside>
        </div>
      </main>

      <div className="tools">
        <a className="tools__"></a>
        <a className=""></a>
        <a></a>
      </div>
    </div>
  );
}

export default UserPage;
