import { Container, DetailsRow } from "./styled";
import ask_questions from "Assets/ask_questions.svg";
import publish_article from "Assets/publish_article.svg";

const Home = () => {
  return (
    <Container>
      <DetailsRow direction="row">
        <img src={ask_questions} alt="ask questions" width="40%" />
        <div>
          <h1>Stuck while coding</h1>
          <h2>Clear your doubts and other developer`s doubts</h2>
        </div>
      </DetailsRow>
      <DetailsRow direction="row-reverse">
        <img src={publish_article} alt="post article" width="40%" />
        <div>
          <h1>Wanna post your article</h1>
          <h2>Share your thoughts and knowledge</h2>
        </div>
      </DetailsRow>
    </Container>
  );
};

export default Home;
