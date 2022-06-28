import Button from "Components/common/Button";
import Input from "Components/common/Input";
import Loading from "Components/common/Loading";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiInstance } from "Services/axiosInstance";
import { Container, FormControl, FormLabel, BtnContainer } from "./styled";

const EditProfile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    _id: "",
    bio: null,
    dob: null,
    email: "",
    expertIn: [],
    gender: null,
    githubUrl: null,
    instagramUrl: null,
    linkedInUrl: null,
    location: null,
    mediumUrl: null,
    name: "",
    stackOverFlowUrl: null,
    twitterUrl: null,
    url: null,
  });
  const { data, isLoading } = useQuery("profile-data", () =>
    apiInstance("users/get/me"),
  );

  const { mutate } = useMutation("/users/update", {
    onSuccess: () => {
      toast.success("Your profile has been updated successfully");
      navigate("/user/profile");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  useEffect(() => {
    setProfileData(data?.data);
  }, [data]);

  const onChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Container>
      <h1>Edit your profile</h1>
      <form>
        <FormControl>
          <FormLabel htmlFor="location">Location</FormLabel>
          <Input
            value={profileData.location}
            name="location"
            type="text"
            placeholder="location"
            onChange={onChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="location">Website Link</FormLabel>
          <Input
            value={profileData.url}
            name="url"
            type="text"
            placeholder="website link"
            onChange={onChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="location">Github Link</FormLabel>
          <Input
            value={profileData.githubUrl}
            name="githubUrl"
            type="text"
            placeholder="github link"
            onChange={onChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="location">Instagram Link</FormLabel>
          <Input
            value={profileData.instagramUrl}
            name="instagramUrl"
            type="text"
            placeholder="instagram link"
            onChange={onChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="location">Twitter Link</FormLabel>
          <Input
            value={profileData.twitterUrl}
            name="twitterUrl"
            type="text"
            placeholder="twitter link"
            onChange={onChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="location">Linkedin Link</FormLabel>
          <Input
            value={profileData.linkedInUrl}
            name="linkedinUrl"
            type="text"
            placeholder="linkedin link"
            onChange={onChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="location">Medium Link</FormLabel>
          <Input
            value={profileData.mediumUrl}
            name="mediumUrl"
            type="text"
            placeholder="medium link"
            onChange={onChange}
          />
        </FormControl>
        <BtnContainer>
          <Button handleClick={() => mutate()} isLoading={isLoading}>
            Submit
          </Button>
        </BtnContainer>
      </form>
    </Container>
  );
};

export default EditProfile;
