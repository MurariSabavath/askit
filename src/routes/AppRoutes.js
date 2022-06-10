import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Redirect from "../pages/Auth/Redirect";
import EmailVerification from "../pages/Auth/EmailVerification";
import InvalidEmailVerification from "../pages/Auth/InvalidEmailVerification";
import MainOutlet from "./MainOutlet";
import AuthOutlet from "./AuthOutlet";
import Profile from "../pages/Profile";
import Post from "../pages/Post";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthOutlet />}>
          <Route path="/login" element={<Login />} />
          <Route path="/usertoken" element={<Redirect />} />
          <Route path="/email/verify" element={<EmailVerification />} />
          <Route
            path="/email/verify/invalid"
            element={<InvalidEmailVerification />}
          />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={<MainOutlet />}>
          <Route path="/" element={<Home />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/post" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
