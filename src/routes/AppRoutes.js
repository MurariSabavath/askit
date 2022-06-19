import { Routes, Route } from "react-router-dom";

import ProtectedRoutes from "./ProtectedOutlet";
import CustomRouter from "./CustomRoute";
import history from "../utils/history";
import MainOutlet from "./MainOutlet";
import AuthOutlet from "./AuthOutlet";

import Home from "../pages/Home";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Redirect from "../pages/Auth/Redirect";
import EmailVerification from "../pages/Auth/EmailVerification";
import InvalidEmailVerification from "../pages/Auth/InvalidEmailVerification";
import Profile from "../pages/Profile";
import QuestionPost from "../pages/QuestionPost";
import IndividualPost from "../pages/IndividualPost";
import QuestionEdit from "../pages/QuestionEdit";
import Questions from "../pages/Questions";

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
          <Route path="/questions" element={<Questions />} />
          <Route path="/questions/question/:id" element={<IndividualPost />} />
          <Route path="/questions/edit/:id" element={<QuestionEdit />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/questions/create" element={<QuestionPost />} />
          </Route>
        </Route>
      </Routes>
    </CustomRouter>
  );
};

export default AppRouter;
