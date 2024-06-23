// src/pages/PostDetail.tsx
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import '../style/pages/PostDetail.css';
import LikeButton from '../components/LikeButton';
import BookmarkButton from '../components/BookmarkButton';

const PostDetail: React.FC = () => {
    const { author } = useParams<{ author: string, id: string }>();
    const location = useLocation();
    const post = location.state as PostDTO;

    return (
        <div className="post-detail">
            <div className="post-detail-author">
                <strong>{author}</strong> <span className="post-detail-date">{post.createdAt.toLocaleString()}</span>
            </div>
            <p className="post-detail-content">{post.content}</p>
            <div className="post-interactions">
                <LikeButton initialLike={post.like} initialLikesCount={post.likesCount} />
                <BookmarkButton initialBookmark={post.bookmark} initialBookmarkCount={post.bookmarkCount} />
            </div>
        </div>
    );
};

export default PostDetail;
