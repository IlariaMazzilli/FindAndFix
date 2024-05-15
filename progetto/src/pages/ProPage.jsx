import "./UserPage.scss";

function UserPage() {
  return (
    <div className="container-user-page">
      <main className="page__course">
        <div className="container-page">
          <div className="course-content">
            <h1>Giuseppe Verdi</h1>
            <h2>Elettricista</h2>

            <div className="content-block">
              <span className="label">Valutazione</span>
              <span className="stars">★★★☆☆</span>
            </div>

            <div className="content-block">
              <a className="send-a-message">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#66BC46"
                    d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"
                  />
                </svg>
                Send a message
                {/* Da aggiungere cuore e recensioni */}
              </a>

              <div className="aggiungi-ai-preferiti">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 opacity-75"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fill="#C3D6E9"
                      d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
                    />
                  </svg>
                </button>
                <span>Aggiungi ai Preferiti</span>
              </div>
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
                <span className="courseStats__data">+39 02 1234567</span>
              </li>
              <li>
                <span className="label courseStats__label">Email</span>
                <span className="courseStats__divider"></span>
                <span className="courseStats__data">john.doe@example.com</span>
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
