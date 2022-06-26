import { Routes, Route } from "react-router-dom";

import ProtectedRoutes from "./ProtectedOutlet";
import CustomRouter from "./CustomRoute";
import history from "../utils/history";
import MainOutlet from "./MainOutlet";
import AuthOutlet from "./AuthOutlet";

import Home from "../pages/Home";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Login from "../pages/Auth/Login";
import Redirect from "../pages/Auth/Redirect";
import EmailVerification from "../pages/Auth/EmailVerification";
import InvalidEmailVerification from "../pages/Auth/InvalidEmailVerification";
import Profile from "../pages/Profile";
import QuestionPost from "../pages/QuestionPost";
import Question from "../pages/Question";
import QuestionEdit from "../pages/QuestionEdit";
import ResetPassword from "../pages/Auth/ResetPassword";
import Questions from "../pages/Questions";
import UserNotVerified from "../pages/Auth/UserNotVerified";
import UserProfile from "../pages/UserProfile";
import Posts from "../pages/Posts";
import Post from "../pages/Post";

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
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="resetpassword/:token" element={<ResetPassword />} />
        </Route>
        <Route
          path="/"
          element={<MainOutlet theme={theme} setTheme={setTheme} />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/questions/question/:id" element={<Question />} />
          <Route path="/questions/edit/:id" element={<QuestionEdit />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/post/:id" element={<Post />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/not-verified" element={<UserNotVerified />} />
            <Route path="/questions/create" element={<QuestionPost />} />
          </Route>
        </Route>
      </Routes>
    </CustomRouter>
  );
};

export default AppRouter;
