import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SingleUser from "./components/singleUserPost/singleUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user/:id/post" element={<SingleUser />} />
    </Routes>
  );
}

export default App;
