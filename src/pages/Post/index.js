import axios from "axios";
import MDEditor from "@uiw/react-md-editor";
import Multiselect from "multiselect-react-dropdown";
import rehypeSanitize from "rehype-sanitize";
import { useState } from "react";
import { BtnContainer, Container, InputContainer } from "./styled";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const Post = () => {
  const [postBody, setPostBody] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  // api/posts/add
  // {title: '', data: '', tags: ''}

  const handleSelect = (selectedList) => {
    setTags(selectedList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const access_token = JSON.parse(localStorage.getItem("access_token"));
    if (access_token) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/posts/add`,
          {
            title,
            data: postBody,
            tags,
          },
          {
            headers: { "x-auth-token": access_token },
          },
        )
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
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
            onSelect={handleSelect}
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
            <Button handleClick={handleSubmit}>Submit</Button>
          </BtnContainer>
        </form>
      </Container>
    </>
  );
};

export default Post;
