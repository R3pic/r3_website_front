import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import IconCounterButton from './IconCounterButton';

const LikeButton: React.FC<{ initialLike: boolean, initialLikesCount: number }> = ({ initialLike, initialLikesCount }) => (
    <IconCounterButton
        initialActive={initialLike}
        initialCount={initialLikesCount}
        ActiveIcon={FaHeart}
        InactiveIcon={FaRegHeart}
        activeColor='#E74C3C'
        hoverColor='#C0392B'
    />
);

export default LikeButton;