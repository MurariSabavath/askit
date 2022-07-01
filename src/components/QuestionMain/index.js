const { useNavigate } = require("react-router-dom");
const { default: duration } = require("Utils/duration");
const {
  PostBody,
  TagContainer,
  DetailsRow,
  AuthorName,
  PostTime,
} = require("./styled");

const QuestionMain = ({ _id, title, tags, author, date }) => {
  const diff = duration(date);
  const navigate = useNavigate();

  return (
    <PostBody key={_id} onClick={() => navigate(`/questions/question/${_id}`)}>
      <h3>{title}</h3>
      <TagContainer>
        {tags.length > 0 &&
          tags.map((item, index) => <p key={index}>{item}</p>)}
      </TagContainer>
      <DetailsRow>
        <AuthorName>{author.name}</AuthorName>
        <PostTime>{`Asked ${Object.values(diff)[0]} ${
          Object.keys(diff)[0]
        } ago`}</PostTime>
      </DetailsRow>
    </PostBody>
  );
};

export default QuestionMain;
