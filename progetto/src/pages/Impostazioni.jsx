import "./Impostazioni.css";
import Pagamenti from './Pagamenti'

function Impostazioni() {
  return (
    <div className="container-user">
      <div className="input-container">
        <div>
          <label
            htmlFor="Name"
            className="block text-lg font-medium text-green-700"
          >
            {" "}
            Nome{" "}
          </label>

          <input
            type="text"
            id="Name"
            placeholder="Giu"
            className="mt-1 w-500 rounded-md border-green-500 shadow-lg sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="Password"
            className="block text-lg font-medium text-green-700"
          >
            {" "}
            Password{" "}
          </label>

          <input
            type="Password"
            id="Password"
            placeholder=""
            className="mt-1 w-500 rounded-md border-green-500 shadow-lg sm:text-sm"
          />
        </div>
      </div>
      <div className="input-container">
        <div>
          <label
            htmlFor="UserEmail"
            className="block text-lg font-medium text-green-700"
          >
            {" "}
            Email{" "}
          </label>

          <input
            type="email"
            id="UserEmail"
            placeholder="john@rhcp.com"
            className="mt-1 w-500 rounded-md border-green-500 shadow-lg sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="PhoneNumber"
            className="block text-lg font-medium text-green-700"
          >
            {" "}
            Numero di telefono{" "}
          </label>

          <input
            type="text"
            id="PhoneNumber"
            placeholder="+39"
            className="mt-1 w-500 rounded-md border-green-500 shadow-lg sm:text-sm"
          />
        </div>
      </div>

      <div className="input-container-description">
        <div>
          <label
            htmlFor="Description"
            className="block text-lg font-medium text-green-700"
          >
            {" "}
            Descrizione{" "}
          </label>

          <input
            type="text"
            id="Description"
            placeholder=""
            className="w-full py-10 px-1 rounded-md border-green-500 shadow-lg sm:text-sm"
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
