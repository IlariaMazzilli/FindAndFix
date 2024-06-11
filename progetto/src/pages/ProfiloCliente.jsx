import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SidebarCliente from "../components/SidebarCliente";
import { Outlet } from "react-router-dom";
import Toolbar from "../components/Toolbar";
import { useAuth } from "../auth/AuthContext";
import axiosInstance from "../components/AxiosInstance";
import { useParams } from "react-router-dom";

const ProfiloCliente = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const { token } = useAuth(); // Usa il contesto di autenticazione per ottenere il token e setUser
  const { id } = useParams(); 


  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        try {
          const res = await axiosInstance.get("/profile/cliente", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserData(res.data);
          console.log("Response:", res.data);
        } catch (error) {
          setError("Errore durante il fetch");
          console.error("Fetch Error:", error);
        }
      } else {
        setError("Token non disponibile");
      }
    };
    fetchUserData();
  }, [token, id]);

  return (
    <div>
      <Toolbar />
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex h-fit w-full">
        <SidebarCliente />
        <div className="flex-1 p-4">
          {error && <p className="text-red-500">{error}</p>}
          {userData ? (
            <Outlet context={{ userData }} /> // Passa i dati utente tramite il context
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default ProfiloCliente;
