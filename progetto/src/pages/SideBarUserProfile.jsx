// import UserPage from "./UserPage";
import "./SideBarUserProfile.css";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import UserPage from "./UserPage";
import Navbar from "../components/Navbar";
import electricianImage from '../images/Michele.jpg';
import gardenerImage from '../images/Giuseppe.jpg';
import painterImage from '../images/francesco.jpg';
import interiorDesignerImage from '../images/Nadia.jpg';
import locksmithImage from '../images/Enzo.png';
import moverImage from '../images/sylvia.jpg';


function SideBarUserProfile() {
  const profiles = [
    { id: 1, name: 'Michele Rossi', image: electricianImage, price: '300€', rating: 4.5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius enim porttitor sagittis commodo. Sed interdum pellentesque porta. Etiam sodales lacus in volutpat elementum. Nam sed sem id libero elementum pellentesque eu eget nibh. Aenean volutpat viverra lorem, nec lobortis sapien fringilla sit amet. Donec sed augue posuere, interdum nisl vel, posuere nunc. Praesent et euismod ante.' },
    { id: 2, name: 'Giuseppe Verdi', image: gardenerImage, price: '250€', rating: 3.5, description: 'Sed fringilla nunc mauris, et laoreet risus vulputate rutrum. Suspendisse egestas nisl nisi, ut sagittis odio placerat id. Aenean lacinia risus in nisi feugiat bibendum. Nunc sed elit orci. Pellentesque accumsan est ut orci cursus, a fringilla diam fringilla. Sed viverra id orci ac facilisis. Donec scelerisque est sem, eget convallis diam imperdiet suscipit. Etiam quis tellus vitae orci auctor imperdiet.' },
    { id: 3, name: 'Francesco Bianchi', image: painterImage, price: '180€', rating: 4, description: 'Mauris placerat maximus arcu, ut ultrices purus ultrices at. Ut aliquet felis nec dui auctor dignissim. Phasellus urna eros, placerat et egestas nec, volutpat a lorem. Fusce augue dui, lacinia ac finibus in, volutpat a libero. Nunc pretium tortor elit, eget facilisis arcu dapibus a. Pellentesque ante purus, viverra sit amet maximus vel, molestie in ipsum. Morbi ut elementum est. ' },
    { id: 4, name: 'Nadia Novara', image: interiorDesignerImage, price: '684€', rating: 4.5, description: 'Pellentesque malesuada, dolor nec suscipit tempor, metus sapien imperdiet libero, nec efficitur ex dolor nec massa. Curabitur porta finibus mauris, at hendrerit elit ornare nec. Phasellus vitae eros sapien. Donec ut lorem suscipit, fermentum justo id, interdum metus. Ut quis commodo dui. In sed commodo leo, vitae ultricies magna. Phasellus enim ante, blandit ut augue ac, porta euismod massa.' },
    { id: 5, name: 'Enzo Dubai', image: locksmithImage, price: '745€', rating: 5, description: 'Maecenas iaculis laoreet lectus, quis ultrices enim luctus a. Vestibulum sapien justo, cursus non tincidunt vel, feugiat sed dolor. Pellentesque et nunc rutrum, gravida neque vitae, accumsan ipsum. Nullam eros augue, interdum ac dapibus a, faucibus eu arcu. Integer aliquet diam eget eleifend viverra. Nullam velit urna, sollicitudin a magna et, sagittis volutpat justo. Donec non cursus nisi, vitae pretium massa.' },
    { id: 6, name: 'Sylvia Darqua', image: moverImage, price: '74€', rating: 2.5, description: 'Etiam volutpat dictum neque eu facilisis. Nulla id erat ligula. In hac habitasse platea dictumst. Morbi condimentum dignissim risus sed finibus. Curabitur a iaculis ante, sit amet tempor quam. Aenean fringilla magna diam, ut finibus eros rhoncus eu. Mauris auctor posuere lorem vitae elementum. Integer quis condimentum purus. Cras ut quam sed augue dignissim consectetur sed et est.' },
  ];
  return (
    <div>
    <Navbar/> <br/><br/><br/><br/>
<div className="flex">
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
                      <Link to="avatar" className="content-side-bar">
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
                    <Link to="preferiti" className="content-side-bar">
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

                      <p className="nome-pagina-sidebar">Preferiti</p>
                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                        Preferiti
                      </span>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link to="pagamenti" className="content-side-bar">
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
                      <p className="nome-pagina-sidebar">Pagamenti</p>
                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                        Pagamenti
                      </span>
                    </Link>
                  </li>
                  <hr />
                  {/* <div className="py-4"> */}
                  <Link to="impostazioni" className="content-side-bar">
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
                    <Link to="notifiche" className="content-side-bar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 opacity-75"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="#C3D6E9"
                            d="M5 9a7 7 0 0 1 7.582-6.976a1 1 0 1 1-.164 1.993A5 5 0 0 0 7 9v3.528a3 3 0 0 1-.317 1.342L5.618 16h12.764l-1.065-2.13A3.001 3.001 0 0 1 17 12.528V11a1 1 0 0 1 2 0v1.528a1 1 0 0 0 .105.447l1.717 3.433A1.1 1.1 0 0 1 19.838 18h-3.964a4.002 4.002 0 0 1-7.748 0H4.162a1.1 1.1 0 0 1-.984-1.592l1.716-3.433A1 1 0 0 0 5 12.528zm5.268 9a2 2 0 0 0 3.464 0zM17.5 4a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M14 5.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"
                          />
                        </g>
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
      <Outlet />
      

    </div>
      </div>
      </div> 
</div>
  );
}

export default SideBarUserProfile;
