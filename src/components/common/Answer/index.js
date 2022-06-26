import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { AnsContainer, ButtonContainer } from "./styled";
import Button from "../Button";
import { apiInstance } from "../../../services/axiosInstance";

const Answer = ({ questionId, refetch }) => {
  const [ansData, setAnsData] = useState("");

  const { mutate, isLoading } = useMutation(
    () =>
      apiInstance.post("/answers/add", {
        answer: ansData,
        questionId,
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
  return (
    <AnsContainer>
      <MDEditor
        value={ansData}
        onChange={setAnsData}
        height={500}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
      <ButtonContainer>
        <Button handleClick={() => mutate()} isLoading={isLoading}>
          Post your answer
        </Button>
      </ButtonContainer>
    </AnsContainer>
  );
};

export default Answer;
