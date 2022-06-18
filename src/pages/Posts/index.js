import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { apiInstance } from "../../services/axiosInstance";
import {
  ContainerRow,
  MainContainer,
  PostBody,
  PostContainerRow,
  PostLink,
  TagContainer,
} from "./styled";

const Posts = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery("posts", () =>
    apiInstance.get("/posts/10/1"),
  );

  if (isLoading) {
    return (
      <MainContainer>
        <PostBody>
          <p>Loading...</p>
        </PostBody>
      </MainContainer>
    );
  }
  if (isError) {
    return (
      <MainContainer>
        <PostBody>
          <p>Error...</p>
        </PostBody>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <ContainerRow>
        <h3>Most Recent Questions</h3>
        <PostLink to="/question/ask">Want to Ask</PostLink>
      </ContainerRow>
      <PostContainerRow>
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
      </PostContainerRow>
    </MainContainer>
  );
};

export default Posts;
