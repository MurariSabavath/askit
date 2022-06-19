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

const Question = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(`post-${id}`, () =>
    apiInstance.get(`/questions/question/${id}`),
  );

  const { mutate: postUserComment } = useMutation(
    () => apiInstance.post("/comments/add", { comment, postId: id }),
    {
      onSuccess: (resp) => {
        console.log(resp);
        toast.success(
          "Your account has been created. Check your email for verification",
        );
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
      <BtnFlex>
        <ButtonContainer>
          <Button handleClick={() => setShowCommentForm(true)}>
            Enter a Comment
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button handleClick={() => console.log("clicked")}>Edit</Button>
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
            <Button handleClick={() => postUserComment()}>
              Submit comment
            </Button>
          </ButtonContainer>
        </>
      )}
    </Container>
  );
};

export default Question;
