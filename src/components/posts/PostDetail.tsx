import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import LikeButton from '../buttons/LikeButton';
import BookmarkButton from '../buttons/BookmarkButton';
import './PostDetail.css';

const PostDetail: React.FC = () => {
    const { author } = useParams<{ author: string, id: string }>();
    const location = useLocation();
    const { createdAt, content, like, likesCount, bookmark, bookmarkCount} = location.state as PostDTO;

    return (
        <article className="post-detail">
            <div className="post-detail-author">
                <strong>{author}</strong> <span className="post-detail-date">{createdAt.toLocaleString()}</span>
            </div>
            <p className="post-detail-content">{content}</p>
            <div className="post-detail-interactions">
                <LikeButton initialLike={like} initialLikesCount={likesCount} />
                <BookmarkButton initialBookmark={bookmark} initialBookmarkCount={bookmarkCount} />
            </div>
        </article>
    );
};

export default PostDetail;
