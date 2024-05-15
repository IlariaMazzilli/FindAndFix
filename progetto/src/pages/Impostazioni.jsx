import "./Impostazioni.css";
import Pagamenti from './Pagamenti'

function Impostazioni() {
  return (
    <div className="container-user">
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
      <div className="container-save-btn">
      <button className="save-btn">Salva</button>
      </div>
    </div>
  );
}

export default Impostazioni;
