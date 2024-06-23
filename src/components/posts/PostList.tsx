import React, { useState, useEffect } from 'react';
import PostCard from './PostCard.tsx';

import './PostList.css';

const mock_posts: PostDTO[] = [
    {
        id: 1, content: 'Hello, World!', author: 'Alice', createdAt: new Date(), like: false, likesCount: 5, bookmark: true, bookmarkCount: 1,
    },
    {
        id: 2, content: 'Hello, World! 긴 텍스트를 시험해봅니다. 100글자가 이상이 넘어야만 ...으로 줄여질텐데 현재 몇글자인지 감이안잡히므로 동해물과 백두산이 마르고 닳도록 ㅇㅇㅇㅇㅇ아아아아직도?', author: 'Bob', createdAt: new Date(), like: false, likesCount: 0,  bookmark: false, bookmarkCount: 0,
    },
    {
        id: 3, content: 'Hello, World!', author: 'Charlie', createdAt: new Date(), like: true, likesCount: 1, bookmark: false, bookmarkCount: 0,
    }
]

const PostList: React.FC = () => {
    const [posts, setPosts] = useState<PostDTO[]>([]);

    useEffect(() => {
        setPosts(mock_posts);
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
