import React, { useState, useEffect } from 'react';
import PostCard from './PostCard.tsx';

import './PostList.css';
import axios from 'axios';

interface PostListProps {
    target: string;
}

const PostList: React.FC<PostListProps> = ({ target }) => {
    const [posts, setPosts] = useState<PostDTO[]>([]);

    useEffect(() => {
        const getRecentPosts = async () => {
            try {
                const response = await axios.get(`api/post/${target}`);
                console.log(response.data);
                setPosts(response.data);
            } catch (error) {
                console.error("에러 발생!!",error);
            }
        }

        getRecentPosts();
    }, []);
    
    return (
        <ul className='post-list'>
            {posts.map(post => (
                <li key={post.postId}>
                    <PostCard {...post}/>
                </li>
            ))}
        </ul>
    );
}

export default PostList;
