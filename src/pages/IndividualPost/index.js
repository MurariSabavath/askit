import React from "react";
import ReactMarkdown from "react-markdown";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { apiInstance } from "../../services/axiosInstance";
import { Container, Message } from "./styled";
import SyntaxHighlightForMarkdown from "../SyntaxHighlighterForMarkdown";

const IndividualPost = () => {
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
  return (
    <Container>
      <h1>{data.data.post.title}</h1>
      <ReactMarkdown
        components={SyntaxHighlightForMarkdown}
        children={data.data.post.data}
      />
    </Container>
  );
};

export default IndividualPost;
