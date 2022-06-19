import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/common/Loading";
import { apiInstance } from "../../services/axiosInstance";
import duration from "../../utils/duration";
import {
  AuthorName,
  ContainerRow,
  DetailsRow,
  MainContainer,
  PostBody,
  PostContainerRow,
  PostLink,
  PostTime,
  TagContainer,
} from "./styled";

const Questions = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery("questions", () =>
    apiInstance.get("/questions/3/1"),
  );

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }
  if (isError) {
    return <Loading>Error...</Loading>;
  }

  return (
    <MainContainer>
      <ContainerRow>
        <h3>Most Recent Questions</h3>
        <PostLink to="/questions/create">Want to Ask</PostLink>
      </ContainerRow>
      <PostContainerRow>
        {data.data?.questions?.map(({ _id, title, tags, author, date }) => {
          const diff = duration(date);
          return (
            <PostBody
              key={_id}
              onClick={() => navigate(`/questions/question/${_id}`)}
            >
              <h1>{title}</h1>
              <TagContainer>
                {tags.length > 0 &&
                  tags[0].map((item, index) => <p key={index}>{item}</p>)}
              </TagContainer>
              <DetailsRow>
                <AuthorName>{author.name}</AuthorName>
                <PostTime>{`Asked ${Object.values(diff)[0]} ${
                  Object.keys(diff)[0]
                } ago`}</PostTime>
              </DetailsRow>
            </PostBody>
          );
        })}
      </PostContainerRow>
    </MainContainer>
  );
};

export default Questions;
