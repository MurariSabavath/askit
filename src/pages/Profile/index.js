import { useQuery } from "react-query";
import { apiInstance } from "Services/axiosInstance";
import { AiFillGithub, AiFillMediumSquare } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import Button from "Components/common/Button";
import Loading from "Components/common/Loading";
import {
  BtnContainer,
  ContactContent,
  ContactLink,
  Container,
  ProfileHeader,
} from "./styled";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery("profile-data", () =>
    apiInstance("users/get/me"),
  );

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Container>
      <ProfileHeader>
        <h2>{data?.data.name}</h2>
        <BtnContainer>
          <Button handleClick={() => navigate("/user/profile/edit")}>
            Edit Profile
          </Button>
        </BtnContainer>
      </ProfileHeader>
      <ContactContent>
        {data?.data.instagramUrl !== null && (
          <ContactLink>
            <FiInstagram />
          </ContactLink>
        )}
        {data?.data.twitterUrl !== null && (
          <ContactLink>
            <BsTwitter />
          </ContactLink>
        )}
        {data?.data.githubUrl !== null && (
          <ContactLink>
            <AiFillGithub />
          </ContactLink>
        )}
        {data?.data.linkedInUrl !== null && (
          <ContactLink>
            <BsLinkedin />
          </ContactLink>
        )}
        {data?.data.mediumUrl !== null && (
          <ContactLink>
            <BsStackOverflow />
          </ContactLink>
        )}
        {data?.data.stackoverflowUrl !== null && (
          <ContactLink>
            <AiFillMediumSquare />
          </ContactLink>
        )}
      </ContactContent>
    </Container>
  );
};

export default Profile;
