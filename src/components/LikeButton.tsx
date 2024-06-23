import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import '../style/components/LikeButton.css';  

interface LikeButtonProps {
    initialLike: boolean;
    initialLikesCount: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ initialLike, initialLikesCount }) => {
    const [like, setLike] = useState<boolean>(initialLike);
    const [likesCount, setLikesCount] = useState<number>(initialLikesCount);

    const handleLikeClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setLike(!like);
        setLikesCount(prevCount => like ? prevCount - 1 : prevCount + 1);
    }

    return (
        <div className="post-interaction">
            <span className="like-button" onClick={handleLikeClick}>
                <span className='like-icon'>
                    {like ? <FaHeart color='red'/> : <FaRegHeart />}
                </span>
                <span className='like-count'>
                    {likesCount}
                </span>
            </span>
        </div>
    );
};

export default LikeButton;
