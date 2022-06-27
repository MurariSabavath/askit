import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiInstance } from "Services/axiosInstance";
import QuestionForm from "Components/common/QuestionForm";
import { Container } from "./styled";

const QuestionPost = () => {
  const [postBody, setPostBody] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(
    () => apiInstance.post("/questions/add", { title, data: postBody, tags }),
    {
      onSuccess: () => {
        toast.success("Your question has been posted successfully");
        navigate("/questions");
      },
      onError: (error) => toast.error(error.response.data.error),
    },
  );

  return (
    <Container className="container">
      <QuestionForm
        title={title}
        setTitle={setTitle}
        postBody={postBody}
        setPostBody={setPostBody}
        tags={tags}
        setTags={setTags}
        isLoading={isLoading}
        mutate={mutate}
      />
    </Container>
  );
};

export default QuestionPost;
