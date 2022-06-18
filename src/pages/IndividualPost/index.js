import React from "react";
import ReactMarkdown from "react-markdown";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
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
      <Link to={`/posts/post/edit/${id}`}>Edit</Link>
    </Container>
  );
};

export default IndividualPost;
