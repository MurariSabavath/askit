import { useRef, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { useTheme } from "styled-components";
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
import { ButtonsContainer, Container, NewBtnContainer } from "./styled";
import Modal from "Components/common/Modal";

const Admin = () => {
  const modalRef = useRef();
  const theme = useTheme();
  const [tag, setTag] = useState("");
  const [filters, setFilters] = useState([]);
  const {
    data: tagsData,
    isLoading: tagsLoading,
    refetch,
  } = useQuery("get-tags", () => apiInstance.get("/tags/get"));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tag.length === 0) {
      toast.warn("Tag cannot be empty!");
    } else {
      setFilters(tagsData.data.filter(({ name }) => name.includes(tag)));
      modalRef.current.openModal();
    }
  };

  const { mutate } = useMutation(
    () => apiInstance.post("/tags/add", { name: tag }),
    {
      onSuccess: () => {
        toast.success("Tag added successfully!");
      },
      onError: () => {
        toast.error("Something went wrong");
      },
    },
  );

  if (tagsLoading) {
    return <Loading>Loading...</Loading>;
  }
  return (
    <Container>
      <Modal ref={modalRef}>
        {filters.length > 0 && (
          <h2 style={{ margin: 0, marginBottom: "10px" }}>
            Following tags include "{tag}"
          </h2>
        )}
        <TagContainer>
          {filters.length > 0 &&
            filters.map(({ _id, name }) => <p key={_id}>{name}</p>)}
        </TagContainer>
        <h2>You want to add "{tag}" as a new tag ?</h2>
        <ButtonsContainer>
          <NewBtnContainer background={theme.specialBg}>
            <Button
              handleClick={(e) => {
                e.preventDefault();
                if (tag.length > 0) {
                  mutate();
                  refetch();
                } else {
                  toast.warn("Tag should not be empty");
                }
                modalRef.current.closeModal();
              }}
            >
              Submit
            </Button>
          </NewBtnContainer>
          <NewBtnContainer background={theme.mark}>
            <Button
              handleClick={(e) => {
                e.preventDefault();
                modalRef.current.closeModal();
              }}
            >
              Cancel
            </Button>
          </NewBtnContainer>
        </ButtonsContainer>
      </Modal>
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
