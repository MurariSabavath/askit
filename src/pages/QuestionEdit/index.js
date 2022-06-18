import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { apiInstance } from "../../services/axiosInstance";
import { Container, Message } from "./styled";

const QuestionEdit = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery(`post-${id}`, () =>
    apiInstance.get(`/posts/post/${id}`),
  );

  if (isLoading) {
    return (
      <Container>
        <Message>Loading...</Message>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Message>Error</Message>
      </Container>
    );
  }

  return <Container>hello world</Container>;
};

export default QuestionEdit;
