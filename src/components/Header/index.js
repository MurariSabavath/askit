import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { useTheme } from "styled-components";
import axios from "axios";
import Switch from "react-switch";
import Button from "../common/Button";
import Input from "../common/Input";
import {
  DropDownElement,
  DropDownLinkContainer,
  GridOne,
  GridThree,
  GridTwo,
  HeaderContainer,
  InputContianer,
  ProfileDropdown,
  ResultCard,
  ResultContainer,
} from "./styled";

const Header = ({ theme, setTheme }) => {
  const themeContext = useTheme();
  const navigate = useNavigate();
  const [showResults, setShowResults] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    localStorage.clear();
    toast.success("Logout success!");
    navigate("/login");
  };

  const toggleTheme = () => {
    const updatedTheme = theme === "dark" ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  const handleInputChange = (e) => {
    setShowResults(true);
    setSearch(e.target.value);
  };

  const onBlur = () => {
    setShowResults(false);
  };

  const handleDropdownClick = () => {
    if (user === null) {
      navigate("/login");
    } else {
      setShowDropdown(!showDropdown);
    }
  };

  useEffect(() => {
    setIsDarkMode(theme === "dark");
    const access_token = JSON.parse(localStorage.getItem("access_token"));
    if (access_token) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/me`, {
          headers: { "x-auth-token": access_token },
        })
        .then((resp) => {
          localStorage.setItem("user", JSON.stringify(resp.data));
          setUser(resp.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <HeaderContainer>
      <GridOne className="one">
        <Link to="/">ASKITO</Link>
      </GridOne>
      <GridTwo className="two">
        <InputContianer>
          <Input
            value={search}
            name="search"
            type="text"
            placeholder="Search Askito"
            onChange={handleInputChange}
            onBlur={onBlur}
          />
          <FiSearch size={25} fill={themeContext.input} />
        </InputContianer>
        {showResults && (
          <ResultContainer>
            <ResultCard>
              Results for <span>{search}</span>
            </ResultCard>
          </ResultContainer>
        )}
      </GridTwo>
      <GridThree className="three">
        <div onClick={handleDropdownClick}>
          <p>{user === null ? "Login" : user?.name}</p>
          {user !== null && <FiChevronDown fill={themeContext.input} />}
        </div>
        {showDropdown && user !== null && (
          <ProfileDropdown>
            <DropDownLinkContainer>
              <Link to="/user/profile">Profile</Link>
            </DropDownLinkContainer>
            <Button handleClick={handleClick}>Logout</Button>
            <DropDownElement>
              <div>Dark mode</div>
              <div>
                <Switch
                  onChange={(value) => {
                    toggleTheme();
                    setIsDarkMode(value);
                  }}
                  onColor={themeContext.specialBg}
                  offColor={themeContext.dark}
                  checked={isDarkMode}
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
              </div>
            </DropDownElement>
          </ProfileDropdown>
        )}
      </GridThree>
    </HeaderContainer>
  );
};

export default Header;
