import React from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import IconCounterButton from './abs/IconCounterButton';

const BookmarkButton: React.FC<{ initialBookmark: boolean, initialBookmarkCount: number }> = ({ initialBookmark, initialBookmarkCount }) => (
    <IconCounterButton
        initialActive={initialBookmark}
        initialCount={initialBookmarkCount}
        ActiveIcon={FaBookmark}
        InactiveIcon={FaRegBookmark}
        activeColor='#3598DB'
        hoverColor='#2980B9'
    />
);

export default BookmarkButton;