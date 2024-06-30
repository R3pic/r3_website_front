import React from "react";
import { useNavigate } from "react-router-dom";
import './PostCard.css';
import LikeButton from "../buttons/LikeButton";
import BookmarkButton from "../buttons/BookmarkButton";

const PostCard: React.FC<PostDTO> = ({ postId, content, authorId, nickname, createdAt, like, likesCount, bookmark, bookmarkCount }) => {
    const navigate = useNavigate();

    const showDetail = () => {
        navigate(`/${authorId}/post/${postId}`, { state: { postId, content, authorId, nickname, createdAt, like, likesCount, bookmark, bookmarkCount } });
    }

    const ShortContent = () => {
        if (content.length > 100) {
            return content.slice(0, 100) + '...';
        }
        return content;
    }

    return (
        <article key={postId} className="post-card" onClick={showDetail}>
            <div className="post-author">
                <strong>{nickname ? nickname : authorId}</strong> <span className="post-date">{new Date(createdAt).toLocaleString()}</span>
            </div>
            <p className="post-content">{ShortContent()}</p>
            <div className="post-interactions">
                <LikeButton initialLike={like} initialLikesCount={likesCount} />
                <BookmarkButton initialBookmark={bookmark} initialBookmarkCount={bookmarkCount} />
            </div>
        </article>
    );
}

export default PostCard;
