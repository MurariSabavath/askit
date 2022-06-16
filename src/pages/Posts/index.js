import React from "react";
import { useQuery } from "react-query";
import { apiInstance } from "../../services/axiosInstance";
import { Container, PostBody, TagContainer } from "./styled";

const Posts = () => {
  const { data, isLoading, isError } = useQuery("posts", () =>
    apiInstance.get("/posts/1/2"),
  );

  if (isLoading)
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );

  if (isError) {
    return (
      <Container>
        <p>Error...</p>
      </Container>
    );
  }

  return (
    <Container>
      {data.data.posts.map(({ _id, title, tags, author }) => (
        <PostBody key={_id}>
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
