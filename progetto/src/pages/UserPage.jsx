import "./UserPage.css";

function UserPage() {
  return (
    <div className="container-user">
      <div className="user-info">
        <div className="logo">
          <button className="button-change-img">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <g fill="white">
                <path
                  fillRule="evenodd"
                  d="M21.264 2.293a1 1 0 0 0-1.415 0l-.872.872a3.001 3.001 0 0 0-3.415.587L4.955 14.358l5.657 5.657L21.22 9.41a3 3 0 0 0 .586-3.415l.873-.873a1 1 0 0 0 0-1.414zm-4.268 8.51l-6.384 6.384l-2.828-2.829l6.383-6.383zm1.818-1.818l.99-.99a1 1 0 0 0 0-1.415l-1.413-1.414a1 1 0 0 0-1.415 0l-.99.99z"
                  clipRule="evenodd"
                />
                <path d="m2 22.95l2.122-7.778l5.656 5.657z" />
              </g>
            </svg>
          </button>
        </div>
        <p>Giu</p>
      </div>
      <div className="input-container">
        <div>
          <label
            htmlFor="Name"
            className="block text-xs font-medium text-gray-700"
          >
            {" "}
            Name{" "}
          </label>

          <input
            type="text"
            id="Name"
            placeholder="Giu"
            className="mt-1 w-500 rounded-md border-gray-200 shadow-md sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="Password"
            className="block text-xs font-medium text-gray-700"
          >
            {" "}
            Password{" "}
          </label>

          <input
            type="Password"
            id="Password"
            placeholder=""
            className="mt-1 w-500 rounded-md border-gray-200 shadow-md sm:text-sm"
          />
        </div>
      </div>
      <div className="input-container">
        <div>
          <label
            htmlFor="UserEmail"
            className="block text-xs font-medium text-gray-700"
          >
            {" "}
            Email{" "}
          </label>

          <input
            type="email"
            id="UserEmail"
            placeholder="john@rhcp.com"
            className="mt-1 w-500 rounded-md border-gray-200 shadow-md sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="PhoneNumber"
            className="block text-xs font-medium text-gray-700"
          >
            {" "}
            Phone Number{" "}
          </label>

          <input
            type="text"
            id="PhoneNumber"
            placeholder="+39"
            className="mt-1 w-500 rounded-md border-gray-200 shadow-md sm:text-sm"
          />
        </div>
      </div>
     
      <div className="input-container-description">
        <div>
          <label
            htmlFor="Description"
            className="block text-xs font-medium text-gray-700"
          >
            {" "}
            Descrizione{" "}
          </label>

          <input
            type="text"
            id="Description"
            placeholder=""
            className="w-full py-10 px-1 rounded-md border-gray-200 shadow-md sm:text-sm"
          />
        </div>
        </div>
    </div>
  );
}

export default UserPage;
