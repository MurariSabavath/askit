import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Redirect from "../pages/Auth/Redirect";
import EmailVerification from "../pages/Auth/EmailVerification";
import InvalidEmailVerification from "../pages/Auth/InvalidEmailVerification";
import MainOutlet from "./MainOutlet";
import AuthOutlet from "./AuthOutlet";
import Profile from "../pages/Profile";
import CustomRouter from "./CustomRoute";
import history from "../utils/history";
import QuestionPost from "../pages/QuestionPost";
import ProtectedRoutes from "./ProtectedOutlet";
import Posts from "../pages/Posts";
import IndividualPost from "../pages/IndividualPost";
import QuestionEdit from "../pages/QuestionEdit";

const AppRouter = ({ theme, setTheme }) => {
  return (
    <CustomRouter history={history}>
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
        <Route
          path="/"
          element={<MainOutlet theme={theme} setTheme={setTheme} />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/post/:id" element={<IndividualPost />} />
          <Route path="/posts/post/edit/:id" element={<QuestionEdit />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/question/ask" element={<QuestionPost />} />
          </Route>
        </Route>
      </Routes>
    </CustomRouter>
  );
};

export default AppRouter;
