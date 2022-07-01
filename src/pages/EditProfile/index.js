import MDEditor from "@uiw/react-md-editor";
import Button from "Components/common/Button";
import Input from "Components/common/Input";
import Loading from "Components/common/Loading";
import { useEffect, useState } from "react";
import { BiLink } from "react-icons/bi";
import { AiFillGithub, AiFillMediumSquare } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import rehypeSanitize from "rehype-sanitize";
import { apiInstance } from "Services/axiosInstance";
import {
  Container,
  FormControl,
  FormLabel,
  BtnContainer,
  Border,
  InputContianer,
} from "./styled";

const EditProfile = () => {
  const navigate = useNavigate();
  const [userBio, setUserBio] = useState();
  const [profileData, setProfileData] = useState({
    _id: "",
    bio: "",
    dob: new Date(),
    email: "",
    expertIn: [],
    gender: "",
    githubUrl: "",
    instagramUrl: "",
    linkedInUrl: "",
    location: "",
    mediumUrl: "",
    name: "",
    stackOverFlowUrl: "",
    twitterUrl: "",
    url: "",
  });
  const { data, isLoading } = useQuery(
    "profile-data",
    () => apiInstance.get("users/get/me"),
    { refetchOnWindowFocus: false },
  );

  const { mutate } = useMutation(
    () =>
      apiInstance.put("users/update", {
        ...profileData,
        gender: "Male",
        bio: userBio,
      }),
    {
      onSuccess: () => {
        toast.success("Your profile has been updated successfully");
        navigate("/user/profile");
      },
      onError: () => {
        toast.error("Something went wrong");
      },
    },
  );

  useEffect(() => {
    setProfileData(data?.data);
    setUserBio(data?.data.bio);
  }, [data]);

  const onChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Container>
      <h2>Edit your profile</h2>
      <form>
        <Border>
          <h1>Personal data</h1>

          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              value={profileData?.name || ""}
              name="name"
              type="text"
              placeholder="username"
              onChange={onChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="dob">Date of birth</FormLabel>
            <Input
              value={profileData?.dob || ""}
              name="dob"
              type="date"
              placeholder="dob"
              onChange={onChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="location">Location</FormLabel>
            <Input
              value={profileData?.location || ""}
              name="location"
              type="text"
              placeholder="location"
              onChange={onChange}
            />
          </FormControl>

          <FormLabel htmlFor="bio">About</FormLabel>
          <MDEditor
            value={userBio || ""}
            onChange={setUserBio}
            height={500}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]],
            }}
          />
          <MDEditor.Markdown
            source={userBio}
            rehypePlugins={[[rehypeSanitize]]}
          />
        </Border>
        <Border>
          <h1>Social Accounts</h1>

          <FormControl>
            <FormLabel htmlFor="location">Website Link</FormLabel>
            <InputContianer>
              <Input
                value={profileData?.url || ""}
                name="url"
                type="text"
                placeholder="website link"
                onChange={onChange}
              />
              <BiLink size={25} />
            </InputContianer>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="location">Github Link</FormLabel>
            <InputContianer>
              <Input
                value={profileData?.githubUrl || ""}
                name="githubUrl"
                type="text"
                placeholder="github link"
                onChange={onChange}
              />
              <AiFillGithub size={25} />
            </InputContianer>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="location">Instagram Link</FormLabel>
            <InputContianer>
              <Input
                value={profileData?.instagramUrl || ""}
                name="instagramUrl"
                type="text"
                placeholder="instagram link"
                onChange={onChange}
              />
              <FiInstagram size={25} />
            </InputContianer>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="location">Twitter Link</FormLabel>
            <InputContianer>
              <Input
                value={profileData?.twitterUrl || ""}
                name="twitterUrl"
                type="text"
                placeholder="twitter link"
                onChange={onChange}
              />
              <BsTwitter size={25} />
            </InputContianer>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="location">Linkedin Link</FormLabel>
            <InputContianer>
              <Input
                value={profileData?.linkedInUrl || ""}
                name="linkedInUrl"
                type="text"
                placeholder="linkedin link"
                onChange={onChange}
              />
              <BsLinkedin size={25} />
            </InputContianer>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="location">Medium Link</FormLabel>
            <InputContianer>
              <Input
                value={profileData?.mediumUrl || ""}
                name="mediumUrl"
                type="text"
                placeholder="medium link"
                onChange={onChange}
              />
              <AiFillMediumSquare size={25} />
            </InputContianer>
          </FormControl>
        </Border>

        <BtnContainer>
          <Button
            handleClick={(e) => {
              e.preventDefault();
              mutate();
            }}
            isLoading={isLoading}
          >
            Submit
          </Button>
        </BtnContainer>
      </form>
    </Container>
  );
};

export default EditProfile;