import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { MdOutlineClose, MdOutlineAdminPanelSettings } from "react-icons/md";
import { HiMenu, HiOutlineMoon } from "react-icons/hi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiUser3Line } from "react-icons/ri";
import { useTheme } from "styled-components";
import { ClickAwayListener } from "@mui/base";
import axios from "axios";
import Switch from "react-switch";
import {
  DropdownBtn,
  DropDownLinkContainer,
  GridOne,
  GridThree,
  GridTwo,
  HeaderContainer,
  Line,
  ProfileBox,
  ProfileDropdown,
} from "./styled";
import Search from "../Search";
import { isAdminUser } from "Utils/helpers";
import Logo from "Assets/Logo";

const Header = ({ theme, setTheme }) => {
  const navigate = useNavigate();
  const themeContext = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    toast.success("Logout success!");
    navigate("/login");
  };

  const toggleTheme = () => {
    const updatedTheme = theme === "dark" ? "light" : "dark";
    setTheme(updatedTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
    const access_token = JSON.parse(localStorage.getItem("access_token"));
    if (access_token) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/get/me`, {
          headers: { "x-auth-token": access_token },
        })
        .then((resp) => {
          localStorage.setItem("user", JSON.stringify(resp.data));
          setUser(resp.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // useEffect(() => {
  //   if (user !== null && !user.isVerified) {
  //     navigate("/user/not-verified");
  //   }
  // }, [user]);

  return (
    <HeaderContainer>
      <GridOne className="one">
        <Link to="/">
          <h3>ASKITO</h3>
        </Link>
      </GridOne>
      <GridTwo className="two">
        <Search />
      </GridTwo>
      <GridThree className="three">
        {showDropdown ? (
          <MdOutlineClose
            size={25}
            onClick={() => setShowDropdown(!showDropdown)}
          />
        ) : (
          <HiMenu size={25} onClick={() => setShowDropdown(!showDropdown)} />
        )}
      </GridThree>
      {showDropdown && (
        <ClickAwayListener onClickAway={() => setShowDropdown(false)}>
          <ProfileDropdown>
            {user != null && (
              <>
                <ProfileBox>
                  <RiUser3Line size={25} />
                  <p>{user?.name}</p>
                </ProfileBox>
                <Line />
              </>
            )}

            {user !== null && (
              <DropDownLinkContainer to="/user/profile">
                <RiUser3Line size={18} />
                <p>Profile</p>
              </DropDownLinkContainer>
            )}
            {isAdminUser() && (
              <DropDownLinkContainer to="/admin">
                <MdOutlineAdminPanelSettings size={18} />
                <p>Admin Panel</p>
              </DropDownLinkContainer>
            )}
            <DropDownLinkContainer to="/questions">
              <AiOutlineQuestionCircle size={18} />
              <p>Questions</p>
            </DropDownLinkContainer>
            <DropDownLinkContainer to="/questions/create">
              <AiOutlineQuestionCircle size={18} />
              <p>Ask a question</p>
            </DropDownLinkContainer>

            <Line />

            <DropdownBtn>
              <div>
                <HiOutlineMoon size={18} />
                <p>Dark mode</p>
              </div>
              <div style={{ marginLeft: "30px" }}>
                <Switch
                  onChange={(value) => {
                    toggleTheme();
                    setIsDarkMode(value);
                  }}
                  height={20}
                  width={40}
                  value={isDarkMode}
                  onColor={themeContext.specialBg}
                  offColor={themeContext.dark}
                  checked={isDarkMode}
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
              </div>
            </DropdownBtn>
            <Line />
            {user === null ? (
              <DropdownBtn onClick={() => navigate("/login")}>
                <FiLogIn size={18} />
                <p>Login</p>
              </DropdownBtn>
            ) : (
              <DropdownBtn onClick={handleLogout}>
                <FiLogOut size={18} />
                <p>Logout</p>
              </DropdownBtn>
            )}
          </ProfileDropdown>
        </ClickAwayListener>
      )}
    </HeaderContainer>
  );
};

export default Header;
