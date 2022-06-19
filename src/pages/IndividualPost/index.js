import React from "react";
import ReactMarkdown from "react-markdown";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { apiInstance } from "../../services/axiosInstance";
import { Container } from "./styled";
import SyntaxHighlightForMarkdown from "../SyntaxHighlighterForMarkdown";
import Loading from "../../components/common/Loading";

const IndividualPost = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(`post-${id}`, () =>
    apiInstance.get(`/questions/question/${id}`),
  );

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  if (isError) {
    return <Loading>Error...</Loading>;
  }
  return (
    <Container>
      <h1>{data.data.question.title}</h1>
      <ReactMarkdown
        components={SyntaxHighlightForMarkdown}
        children={data.data.question.data}
      />
      <Link to={`/posts/post/edit/${id}`}>Edit</Link>
    </Container>
  );
};

export default IndividualPost;
