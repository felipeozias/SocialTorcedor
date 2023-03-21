import { StyledComments, StyledContainer } from './styles'
import { ICommentFeed } from "../../interfaces/DataForFeed";
import formatTime from "../../utils/formatTime";

export default function CommentsFeed(comments: ICommentFeed[]): JSX.Element {
    let components = [<StyledContainer />];

    function CreateComments() {
        if (comments) {
            comments.forEach((comment) => {
                components.push(
                    <StyledComments link={`https://api.socialtorcedor.shop/assets/${comment.author.pathImage}`}>
                        <div id='img' />
                        <div>
                            <span>{`${comment.author.name}`}
                            <span>{` (${formatTime(new Date(comment.createdAt))})`}</span>
                            </span>
                            <p>{comment.content}</p>
                        </div>
                    </StyledComments >
                );
            })
        }
        return <StyledContainer >
            {components}
        </StyledContainer>
    }
    return (
        CreateComments()
    )
}
