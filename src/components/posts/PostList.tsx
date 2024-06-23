import React, { useState, useEffect } from 'react';
import PostCard from './PostCard.tsx';

import './PostList.css';
import axios from 'axios';

const PostList: React.FC = () => {
    const [posts, setPosts] = useState<PostDTO[]>([]);

    

    useEffect(() => {
        const getRecentPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/post/recent');
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
                <li key={post.id}>
                    <PostCard {...post}/>
                </li>
            ))}
        </ul>
    );
}

export default PostList;
