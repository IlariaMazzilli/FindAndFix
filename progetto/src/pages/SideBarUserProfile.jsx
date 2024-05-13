import UserPage from "./UserPage";
import "./SideBarUserProfile.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Servizi from "../Servizi";
import Impostazioni from "./Impostazioni";
import Home from "./Home";

// Importa i file e sostituisci i 'to'

function SideBarUserProfile() {
  return (
    <BrowserRouter>
      <div className="container-side-bar">
        <div className="side-bar">
          <div>
            <div className="inline-flex size-100 items-center justify-center">
              <span className="content-side-bar">PROFILO UTENTE</span>
            </div>

            <div className="border-t border-gray-100">
              <div className="px-2">
                <ul className="space-y-1 border-t border-gray-100 pt-4">
                  <div className="py-3">
                    <li>
                      <Link to="/" className="content-side-bar">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <p className="nome-pagina-sidebar">Utente</p>
                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                          Utente
                        </span>
                      </Link>
                    </li>
                  </div>
                  <hr />
                  <li>
                    <Link to="/servizi" className="content-side-bar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#68707C"
                          d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16c.557.325 1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043c-.452.264-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z"
                        />
                      </svg>

                      <p className="nome-pagina-sidebar">Preferiti</p>
                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                        Preferiti
                      </span>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link to="/servizi" className="content-side-bar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                      <p className="nome-pagina-sidebar">Pagamanti</p>
                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                        Pagamenti
                      </span>
                    </Link>
                  </li>
                  <hr />
                  {/* <div className="py-4"> */}
                  <Link to="/impostazioni" className="content-side-bar">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="nome-pagina-sidebar">Impostazioni</p>
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Impostazioni
                    </span>
                  </Link>
                  {/* </div> */}
                  <hr />
                  <li>
                    <Link to="/servizi" className="content-side-bar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="none"
                          stroke="#68707C"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.75 5.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M9.933 8v1.534c0 .39.155.766.432 1.042c.276.277.744.432 1.135.432H.5c.391 0 .859-.155 1.135-.432a1.47 1.47 0 0 0 .432-1.042V5.933A3.933 3.933 0 0 1 6 2M5 13.5h2"
                        />
                      </svg>
                      <p className="nome-pagina-sidebar">Notifiche</p>
                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                        Notifiche
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>

          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 p-2">
            <form action="#">
              <button type="submit" className="content-side-bar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>

                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                  Logout
                </span>
              </button>
            </form>
          </div>
        </div>
        <div className="Page">
          <Routes>
            <Route path="/" element={<UserPage />} />
            <Route path="/servizi" element={<Servizi />} />{" "}
            <Route path="/impostazioni" element={<Impostazioni />} />{" "}
            {/* Assicurati di fornire il componente per la pagina dei servizi */}
            {/* aggiungi rotte */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default SideBarUserProfile;
