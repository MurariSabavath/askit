import ReactMarkdown from "react-markdown";
import SyntaxHighlightForMarkdown from "Pages/SyntaxHighlighterForMarkdown";
import { Container, UserName, Para } from "./styled";

const AnswerPreview = ({ answer }) => (
  <Container>
    <Para>
      Answered by
      <UserName to={`/profile/${answer.author._id}`}>
        {answer.author.name}
      </UserName>
    </Para>
    <ReactMarkdown
      components={SyntaxHighlightForMarkdown}
      children={answer.answer}
    />
  </Container>
);

export default AnswerPreview;
