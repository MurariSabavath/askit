import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import Button from "Components/common/Button";
import Input from "Components/common/Input";
import Loading from "Components/common/Loading";
import {
  BtnContainer,
  FormControl,
  FormLabel,
  TagContainer,
} from "Components/common/styles/styled";
import { apiInstance } from "Services/axiosInstance";
import { Container } from "./styled";

const Admin = () => {
  const [tag, setTag] = useState("");
  const { data: tagsData, isLoading: tagsLoading } = useQuery("get-tags", () =>
    apiInstance.get("/tags/get"),
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const flag = tagsData.data.some(({ name }) => name.includes(tag));
    console.log(flag);
  };

  const { mutate } = useMutation(() => apiInstance.post("/tags/add"), {
    onSuccess: () => {
      toast.success("Tag added successfully!");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  if (tagsLoading) {
    return <Loading>Loading...</Loading>;
  }
  return (
    <Container>
      <h1>Tags</h1>
      <TagContainer>
        {tagsData.data.map(({ _id, name }) => (
          <p key={_id}>{name}</p>
        ))}
      </TagContainer>
      <form>
        <FormControl>
          <FormLabel htmlFor="tag">Add tag for question</FormLabel>
          <Input
            value={tag}
            name="tag"
            type="text"
            placeholder="Tags"
            onChange={(e) => setTag(e.target.value)}
          />
          <BtnContainer>
            <Button handleClick={handleSubmit}>Submit</Button>
          </BtnContainer>
        </FormControl>
      </form>
    </Container>
  );
};

export default Admin;
