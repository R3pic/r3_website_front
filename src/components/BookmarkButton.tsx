import React, { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import '../style/components/BookmarkButton.css';

interface BookmarkButtonProps {
    initialBookmark: boolean;
    initialBookmarkCount: number;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ initialBookmark, initialBookmarkCount }) => {
    const [bookmark, setBookmark] = useState<boolean>(initialBookmark);
    const [bookmarkCount, setBookmarkCount] = useState<number>(initialBookmarkCount);

    const handleBookmarkClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setBookmark(!bookmark);
        setBookmarkCount(prevCount => bookmark ? prevCount - 1 : prevCount + 1);
    }

    return (
        <div className="post-interaction">
            <span className="bookmark-button" onClick={handleBookmarkClick}>
                <span className="bookmark-icon">
                    {bookmark ? <FaBookmark color='#3598DB'/> : <FaRegBookmark />}
                </span>
                <span className="bookmark-count">
                    {bookmarkCount}
                </span>
            </span>
        </div>
    );
};

export default BookmarkButton;
