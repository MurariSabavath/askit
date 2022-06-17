import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { apiInstance } from "../../services/axiosInstance";
import { Container, PostBody, TagContainer } from "./styled";

const Posts = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery("posts", () =>
    apiInstance.get("/posts/10/1"),
  );

  if (isLoading) {
    return (
      <Container>
        <PostBody>
          <p>Loading...</p>
        </PostBody>
      </Container>
    );
  }
  if (isError) {
    return (
      <Container>
        <PostBody>
          <p>Error...</p>
        </PostBody>
      </Container>
    );
  }

  return (
    <Container>
      {data.data.posts.map(({ _id, title, tags, author }) => (
        <PostBody key={_id} onClick={() => navigate(`/posts/post/${_id}`)}>
          <h4>{author.name}</h4>
          <h1>{title}</h1>
          <TagContainer>
            {tags.length > 0 &&
              tags[0].map((item, index) => <p key={index}>{item}</p>)}
          </TagContainer>
        </PostBody>
      ))}
    </Container>
  );
};

export default Posts;
