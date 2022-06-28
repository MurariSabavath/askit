import ReactMarkdown from "react-markdown";

import SyntaxHighlightForMarkdown from "Pages/SyntaxHighlighterForMarkdown";
import{
    Container,
    UserName,
    Para,
    MarkdownPreview,
} from './styled';
import {
    Profile
} from '../comment/styled'


const AnswerPreview = ({answer})=>{
    return(
        <Container>
            <Para> Answered by <UserName to={`/profile/${answer.author._id}`} >{answer.author.name}</UserName> 4 months ago</Para>
            <ReactMarkdown
              components={SyntaxHighlightForMarkdown}
              children={answer.answer}
            />
        </Container>
    );
}
export default AnswerPreview;