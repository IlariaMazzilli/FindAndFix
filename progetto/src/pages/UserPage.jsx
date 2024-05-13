import "./UserPage.scss";

function UserPage() {
  return (
    <div className="container-user-page">
      <main className="page__course">
        <div className="container-page">
          <div className="course-content">
            <h1>Giuseppe</h1>

            <div className="content-block">
              <span className="label">Valutazione</span>
              <span className="stars">★★★☆☆</span>
            </div>

            <div className="content-block">
              <a className="button button--booking">Book Course</a>
              <a className="button button--download">Download PDF</a>
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
              <li>
                <span className="label courseStats__label">Suitable For</span>
                <span className="courseStats__divider"></span>
                <span className="courseStats__data">Managers</span>
              </li>
              <li>
                <span className="label courseStats__label">Subject</span>
                <span className="courseStats__divider"></span>
                <span className="courseStats__data">Working At Height</span>
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
