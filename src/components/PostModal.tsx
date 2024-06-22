import React, { useState } from 'react';
import axios from 'axios';

interface PostModalProps {
    onClose: () => void;
    onAddPost: (post: PostDTO) => void;
}

const PostModal: React.FC<PostModalProps> = ({ onClose, onAddPost }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/posts', { content, author: 'Current User' });
            onAddPost(response.data);
            onClose();
        } catch (err) {
            console.error('Failed to create post', err);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default PostModal;
