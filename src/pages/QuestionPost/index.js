import MDEditor from "@uiw/react-md-editor";
import Multiselect from "multiselect-react-dropdown";
import rehypeSanitize from "rehype-sanitize";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { useState } from "react";
import { BtnContainer, Container, InputContainer } from "./styled";
import { apiInstance } from "../../services/axiosInstance";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

const QuestionPost = () => {
  const [postBody, setPostBody] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  const { mutate } = useMutation(
    () => apiInstance.post("/posts/add", { title, data: postBody, tags }),
    {
      onSuccess: () => {
        toast.success("Your question has been posted successfully");
        navigate("/");
      },
      onError: (error) => toast.error(error.response.data.error),
    },
  );

  return (
    <Container className="container">
      <form>
        <InputContainer>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputContainer>
        <MDEditor
          value={postBody}
          onChange={setPostBody}
          height={500}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]],
          }}
        />
        <MDEditor.Markdown
          source={postBody}
          rehypePlugins={[[rehypeSanitize]]}
        />
        <Multiselect
          isObject={false}
          onSelect={(selectedList) => setTags(selectedList)}
          loading={false}
          options={["Python", "Javascript", "HTML", "CSS", "Typescript"]}
          style={{
            searchBox: {
              padding: "10px",
              marginTop: "20px",
            },
          }}
        />
        <BtnContainer>
          <Button
            handleClick={(e) => {
              e.preventDefault();
              console.log(title, postBody, tags);
              mutate();
            }}
          >
            Submit
          </Button>
        </BtnContainer>
      </form>
    </Container>
  );
};

export default QuestionPost;
