import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Login from "./pages/Login/Login";
 
import SingleUser from "./components/singleUserPost/singleUser";
import Register from "./pages/RegisterPage/Register";
import Profile from "./components/ProfileUser/Profile";
import CreatePost from "./components/CreatePost/CreatePost";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/me" element={<Profile />} />
      <Route path="/me/create-post" element={<CreatePost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user/:id/post" element={<SingleUser />} />
    </Routes>
  );
}

export default App;
