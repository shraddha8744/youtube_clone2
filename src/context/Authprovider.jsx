import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/RapidApi";

export const Authcontext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  console.log(data);

  const fetchAllData = async (query) => {
    setLoading(true);

    const response = await fetchData(`search/?q=${query}`);
    console.log(response);

    setData(response.contents);
    setLoading(false);
  };
  useEffect(() => {
    fetchAllData(value);
  }, [value]);

  return (
    <Authcontext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </Authcontext.Provider>
  );
}

export const useAuth = () => useContext(Authcontext);
