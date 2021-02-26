import React from 'react';
import Comment from './Comment';

const CommentsList = ({ comments }) => {
    if(comments.length > 0){
        return (
            comments.map(function (comment) {
                return (
                    <Comment
                        commentData={comment.snippet.topLevelComment.snippet.textDisplay}
                        authorName = {comment.snippet.topLevelComment.snippet.authorDisplayName}
                        authorImageURL = {comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                    />
                );
            })
        );
    }
    else return null;
}

export default CommentsList