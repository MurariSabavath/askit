import { useQuery } from "react-query";
import { apiInstance } from "Services/axiosInstance";
import { AiFillGithub, AiFillMediumSquare } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import Button from "Components/common/Button";
import Loading from "Components/common/Loading";
import {
  BtnContainer,
  ContactContent,
  ContactLink,
  Container,
  LocationContainer,
  Pagination,
  ProfileHeader,
} from "./styled";
import { useNavigate } from "react-router-dom";
import QuestionMain from "Components/QuestionMain";
import { useEffect, useState } from "react";
import { TagContainer } from "Components/common/styles/styled";
import { Border } from "Pages/EditProfile/styled";
import { HiLocationMarker } from "react-icons/hi";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

const Profile = () => {
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({
    perPage: 3,
    totalPages: 0,
    currentPage: 0,
  });
  const { data, isLoading } = useQuery("profile-data", () =>
    apiInstance("users/get/me"),
  );
  const {
    data: questions,
    isLoading: questionsLoading,
    isFetching,
    refetch,
  } = useQuery("user-questions", () =>
    apiInstance.get(
      `questions/get/myquestions/${
        pagination.perPage
      }/${pagination.currentPage + 1}`,
    ),
  );

  useEffect(() => {
    refetch();
  }, [pagination.currentPage, refetch]);

  const handlePageChange = (event) => {
    setPagination({ ...pagination, currentPage: event.selected });
  };

  useEffect(() => {
    if (questions?.data?.totalquestions) {
      setPagination({
        ...pagination,
        totalPages: Math.ceil(
          parseInt(questions?.data?.totalquestions) / pagination.perPage,
        ),
      });
    }
  }, [questions]);

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
          <ContactLink href={data?.data.instagramUrl} target="_blank">
            <FiInstagram size={20} />
          </ContactLink>
        )}
        {data?.data.twitterUrl !== null && (
          <ContactLink href={data?.data.twitterUrl} target="_blank">
            <BsTwitter size={20} />
          </ContactLink>
        )}
        {data?.data.githubUrl !== null && (
          <ContactLink href={data?.data.githubUrl} target="_blank">
            <AiFillGithub size={20} />
          </ContactLink>
        )}
        {data?.data.linkedInUrl !== null && (
          <ContactLink href={data?.data.linkedInUrl} target="_blank">
            <BsLinkedin size={20} />
          </ContactLink>
        )}
        {data?.data.mediumUrl !== null && (
          <ContactLink href={data?.data.mediumUrl} target="_blank">
            <AiFillMediumSquare size={20} />
          </ContactLink>
        )}
      </ContactContent>
      <LocationContainer>
        <HiLocationMarker />
        <p>{data?.data.location}</p>
      </LocationContainer>

      <Border>
        <h3>About</h3>

        <div data-color-mode="dark">
          <MDEditor.Markdown
            source={data?.data.bio}
            rehypePlugins={[[rehypeSanitize]]}
          />
        </div>

        {/* <ReactMarkdown
          components={SyntaxHighlightForMarkdown}
          children={data?.data.bio}
        /> */}
      </Border>

      <Border>
        {data?.data.expertIn.length > 0 && (
          <>
            <h2 style={{ margin: 0 }}>Interested tags</h2>
            <TagContainer>
              {data?.data.expertIn.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </TagContainer>
          </>
        )}
      </Border>

      {questionsLoading && <Loading>Loading...</Loading>}
      <h2>Questions asked by you</h2>
      {questions?.data?.questions?.length === 0 && (
        <h1>You haven't asked anything yet</h1>
      )}

      {questions?.data &&
        questions?.data?.questions.length > 0 &&
        questions?.data?.questions.map(({ _id, title, tags, author, date }) => (
          <QuestionMain
            key={_id}
            _id={_id}
            title={title}
            tags={tags}
            author={author}
            date={date}
          />
        ))}
      {isFetching && <Loading>Loading...</Loading>}
      {questions?.data?.questions?.length > 0 && (
        <Pagination
          pageCount={pagination.totalPages}
          forcePage={pagination.currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </Container>
  );
};

export default Profile;
