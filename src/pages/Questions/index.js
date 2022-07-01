import Loading from "Components/common/Loading";
import QuestionMain from "Components/QuestionMain";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { apiInstance } from "Services/axiosInstance";
import {
  ContainerRow,
  MainContainer,
  Pagination,
  PostContainerRow,
  PostLink,
} from "./styled";

const Questions = () => {
  const [pagination, setPagination] = useState({
    perPage: 3,
    totalPages: 0,
    currentPage: 0,
  });
  const {
    data,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery(
    "questions",
    () =>
      apiInstance.get(
        `/questions/get/${pagination.perPage}/${pagination.currentPage + 1}`,
      ),
    { refetchOnWindowFocus: false },
  );

  const handlePageChange = (event) => {
    setPagination({ ...pagination, currentPage: event.selected });
  };

  useEffect(() => {
    refetch();
  }, [pagination.currentPage, refetch]);

  useEffect(() => {
    if (data?.data?.totalquestions) {
      setPagination({
        ...pagination,
        totalPages: Math.ceil(
          parseInt(data?.data?.totalquestions) / pagination.perPage,
        ),
      });
    }
  }, [data]);

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
        {data.data?.questions?.map(({ _id, title, tags, author, date }) => (
          <QuestionMain
            key={_id}
            _id={_id}
            title={title}
            tags={tags}
            author={author}
            date={date}
          />
        ))}
      </PostContainerRow>
      {isFetching && <Loading>Loading...</Loading>}
      <Pagination
        pageCount={pagination.totalPages}
        forcePage={pagination.currentPage}
        onPageChange={handlePageChange}
      />
    </MainContainer>
  );
};

export default Questions;
