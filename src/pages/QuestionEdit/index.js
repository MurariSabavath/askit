import QuestionForm from "Components/common/QuestionForm";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { apiInstance } from "Services/axiosInstance";
import { Container, Message } from "./styled";

const QuestionEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postBody, setPostBody] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);

  const { data, isLoading, isError } = useQuery(`post-${id}`, () =>
    apiInstance.get(`/questions/get/${id}`),
  );
  console.log("asdfasf");

  const { mutate, isLoading: isUpdating } = useMutation(
    () =>
      apiInstance.put(`/questions/update/${id}`, {
        title,
        data: postBody,
        tags,
      }),
    {
      onSuccess: () => {
        toast.success("Your question has been updated successfully");
        navigate(`/questions/question/${id}`);
      },
      onError: (error) => toast.error(error.response.data.error),
    },
  );

  useEffect(() => {
    if (data?.data) {
      setTitle(data.data.question.title);
      setTags(data.data.question.tags);
      setPostBody(data.data.question.data);
    }
  }, [data]);

  console.log(title, tags, postBody);

  if (isLoading) {
    return (
      <Container>
        <Message>Loading...</Message>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Message>Error</Message>
      </Container>
    );
  }

  return (
    <Container>
      <QuestionForm
        title={title}
        setTitle={setTitle}
        tags={tags}
        setTags={setTags}
        postBody={postBody}
        setPostBody={setPostBody}
        isLoading={isUpdating}
        mutate={mutate}
      />
    </Container>
  );
};

export default QuestionEdit;
