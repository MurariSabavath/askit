import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedOutlet";
import history from "../utils/history";
import MainOutlet from "./MainOutlet";
import AuthOutlet from "./AuthOutlet";
import AdminOutlet from "./AdminOutlet";
import CustomRouter from "./CustomRoute";

import Home from "Pages/Home";
import Post from "Pages/Post";
import Admin from "Pages/Admin";
import Posts from "Pages/Posts";
import Profile from "Pages/Profile";
import Login from "Pages/Auth/Login";
import Question from "Pages/Question";
import Questions from "Pages/Questions";
import Redirect from "Pages/Auth/Redirect";
import Register from "Pages/Auth/Register";
import UserProfile from "Pages/UserProfile";
import QuestionEdit from "Pages/QuestionEdit";
import QuestionPost from "Pages/QuestionPost";
import ResetPassword from "Pages/Auth/ResetPassword";
import ForgotPassword from "Pages/Auth/ForgotPassword";
import UserNotVerified from "Pages/Auth/UserNotVerified";
import EmailVerification from "Pages/Auth/EmailVerification";
import InvalidEmailVerification from "Pages/Auth/InvalidEmailVerification";
import EditProfile from "Pages/EditProfile";

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
            <Route path="/user/profile/edit" element={<EditProfile />} />
            <Route path="/user/not-verified" element={<UserNotVerified />} />
            <Route path="/questions/create" element={<QuestionPost />} />
            <Route element={<AdminOutlet />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </CustomRouter>
  );
};

export default AppRouter;
