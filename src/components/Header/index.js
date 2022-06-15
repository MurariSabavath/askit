import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import Button from "../common/Button";
import Input from "../common/Input";
import {
  DropdownElement,
  GridOne,
  GridThree,
  GridTwo,
  HeaderContainer,
  InputContianer,
  ProfileDropdown,
  ResultCard,
  ResultContainer,
} from "./styled";
import axios from "axios";
import { useTheme } from "styled-components";

const Header = ({ theme, setTheme }) => {
  const themeContext = useTheme();
  const navigate = useNavigate();
  const [showResults, setShowResults] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");

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
      <GridThree className="three" onClick={handleDropdownClick}>
        <div>
          <p>{user === null ? "Login" : user?.name}</p>
          {user !== null && <FiChevronDown fill={themeContext.input} />}
        </div>
        {showDropdown && user !== null && (
          <ProfileDropdown>
            <DropdownElement>
              <Link to="/user/profile">Profile</Link>
            </DropdownElement>
            <Button handleClick={handleClick}>Logout</Button>
            <Button handleClick={toggleTheme}>Toggle Theme</Button>
          </ProfileDropdown>
        )}
      </GridThree>
    </HeaderContainer>
  );
};

export default Header;
