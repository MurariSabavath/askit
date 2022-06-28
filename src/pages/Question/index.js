import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { apiInstance } from "Services/axiosInstance";
import Loading from "Components/common/Loading";
import Button from "Components/common/Button";
import Comment from "Components/common/comment";
import Input from "Components/common/Input";
import Answer from "Components/common/Answer";
import AnswerPreview from "Components/common/AnswerPreview";
import { Container, BtnFlex, CommentInputBox, ButtonContainer } from "./styled";
import SyntaxHighlightForMarkdown from "../SyntaxHighlighterForMarkdown";

const Question = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError, refetch, isFetching } = useQuery(
    `post-${id}`,
    () => apiInstance.get(`/questions/get/${id}`),
    {
      refetchOnWindowFocus: false,
    },
  );

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
        <Button handleClick={() => navigate(`/questions/edit/${id}`)}>
          Edit
        </Button>
      </ButtonContainer>
      <>
        {data.data.comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
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
        {data.data.answers.map((answer) => (
          <AnswerPreview key={answer._id} answer ={answer} />
          ))}
      </div>
      <Answer questionId={id} refetch={refetch} />
    </Container>
  );
};

export default Question;
