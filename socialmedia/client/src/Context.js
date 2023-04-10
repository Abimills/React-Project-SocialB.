import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [myId, setMyId] = useState("");
  let posts = [];

  useFetch("https://dummyapi.io/data/v1/post", setData);
  useFetch(
    `https://dummyapi.io/data/v1/user/${
      myId ? myId : "63d849f4e1ead0fc9e80191d"
    }`,
    setUser
  );

  if (data) {
    posts = data.data;
  }

  return (
    <AppContext.Provider
      value={{ user, useFetch, posts, darkMode, setDarkMode, myId, setMyId }}
    >
      {children}
    </AppContext.Provider>
  );
};
export function useUsersContext() {
  return useContext(AppContext);
}
export { AppContext, AppProvider };
