import { Container, PostLink } from "./styled";

const Home = () => {
  return (
    <Container>
      <h3>Top Questions</h3>
      <PostLink to="/post">Want to Ask</PostLink>
    </Container>
  );
};

export default Home;
