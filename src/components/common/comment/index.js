import { Container, Header, Body, SampleText, Profile } from "./styled";

const Comment = ({ comment }) => {
  return (
    <Container>
      <Header>
        <span>
          <Profile to={`/profile/${comment.author._id}`}>
            {comment.author.name}
          </Profile>
          <SampleText>commented on March, 10, 2022</SampleText>{" "}
        </span>
      </Header>
      <Body>{comment.comment}</Body>
    </Container>
  );
};

export default Comment;
