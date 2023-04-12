import {
  useContext,
  useReducer,
  useState,
  createContext,
  useEffect,
} from "react";

const INITIAL_STATE = {
  user: !localStorage.getItem("user")
    ? null
    : JSON.parse(localStorage.getItem("user")),
  loading: false,
  error: null,
};
const AppContext = createContext(INITIAL_STATE);

const UserReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESSFUL":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AppContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export function useUsersContext() {
  return useContext(AppContext);
}
export { AppContext, AppProvider };
