import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { apiInstance } from "../../services/axiosInstance";
import { Container, BtnFlex, CommentInputBox, ButtonContainer } from "./styled";
import SyntaxHighlightForMarkdown from "../SyntaxHighlighterForMarkdown";
import Loading from "../../components/common/Loading";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Answer from "../../components/common/Answer";

const Question = () => {
  const { id } = useParams();
  const {
    data,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery(`post-${id}`, () => apiInstance.get(`/questions/get/${id}`));

  const { mutate: postUserComment, isLoading: postingComment } = useMutation(
    () =>
      apiInstance.post("/comments/add", {
        comment,
        postId: id,
        type: "question",
      }),
    {
      onSuccess: (resp) => {
        console.log(resp);
        toast.success("You have commented successfully");
        refetch();
      },
      onError: (error) => toast.error(error.response.data.error),
    },
  );

  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comment, setComment] = useState("");

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
      <ButtonContainer>
        <Button handleClick={() => console.log("clicked")}>Edit</Button>
      </ButtonContainer>
      <>
        {data.data.comments.map(({ comment, _id }) => (
          <p key={_id}>{comment}</p>
        ))}
      </>
      <>{isFetching && <h1>Fetching</h1>}</>
      <BtnFlex>
        <ButtonContainer>
          <Button handleClick={() => setShowCommentForm(true)}>
            Add a Comment
          </Button>
        </ButtonContainer>
      </BtnFlex>
      {showCommentForm && (
        <>
          <CommentInputBox>
            <Input
              type="text"
              name="comment"
              placeholder="Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </CommentInputBox>
          <ButtonContainer>
            <Button
              handleClick={() => postUserComment()}
              isLoading={postingComment}
            >
              Submit comment
            </Button>
          </ButtonContainer>
        </>
      )}
      <div>
        <>
          {data.data.answers.length > 0 && (
            <h2>{data.data.answers.length} answers</h2>
          )}
        </>
        {data.data.answers.map(({ answer, _id, author }) => (
          <div key={_id}>
            <ReactMarkdown
              components={SyntaxHighlightForMarkdown}
              children={answer}
            />
          </div>
        ))}
      </div>
      <Answer questionId={id} refetch={refetch} />
    </Container>
  );
};

export default Question;
