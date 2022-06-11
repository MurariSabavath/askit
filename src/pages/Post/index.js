import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { useState } from "react";
import { Container, InputContainer } from "./styled";
import Input from "../../components/common/Input";

const Post = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  console.log(value);
  // api/posts/add
  // {title: '', data: '', tags: ''}

  console.log(title);

  return (
    <>
      <Container className="container">
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
          value={value}
          onChange={setValue}
          height={500}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]],
          }}
        />
        <MDEditor.Markdown source={value} rehypePlugins={[[rehypeSanitize]]} />
      </Container>
    </>
  );
};

export default Post;
