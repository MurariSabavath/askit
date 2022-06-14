import axios from "axios";
import { useEffect } from "react";
import { Container, PostLink } from "./styled";

const Home = () => {
  useEffect(() => {
    const access_token = JSON.parse(localStorage.getItem("access_token"));

    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/1/1`, {
        headers: { "x-auth-token": access_token },
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <h3>Top Questions</h3>
      <PostLink to="/question/ask">Want to Ask</PostLink>
    </Container>
  );
};

export default Home;
