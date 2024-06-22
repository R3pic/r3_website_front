import React, { useState, useEffect } from 'react';
import '../style/components/PostList.css';

const mock_posts: PostDTO[] = [
    { id: 1, content: '안녕하세요!', author: 'Alice', createdAt: new Date() },
    { id: 2, content: 'Hi, there!', author: 'Bob', createdAt: new Date() },
    { id: 3, content: 'Good morning!', author: 'Charlie', createdAt: new Date() },
    { id: 4, content: 'Good afternoon!', author: 'David',
        createdAt: new Date(new Date().setHours(new Date().getHours() - 1)) },
    { id: 5, content: 'Good evening!', author: 'Eve', createdAt: new Date() },
    { id: 6, content: 'Good night!', author: 'Frank', createdAt: new Date() },
    { id: 7, content: 'Goodbye!', author: 'Grace', createdAt: new Date() },
    { id: 8, content: 'See you later!', author: 'Hank', createdAt: new Date() },
    { id: 9, content: 'See you tomorrow!', author: 'Ivy', createdAt: new Date() },
    { id: 10, content: 'See you soon!', author: 'Jack', createdAt: new Date() },
    { id: 11, content: 'See you!', author: 'Kate', createdAt: new Date() },
    { id: 12, content: 'Good luck!', author: 'Leo', createdAt: new Date() },
    { id: 13, content: 'Take care!', author: 'Mike', createdAt: new Date() },
];

const PostList: React.FC = () => {
    const [posts, setPosts] = useState<PostDTO[]>([]);

    useEffect(() => {
        setPosts(mock_posts);
    }, []);
    
    return (
        <main>
            <ul className='post-list'>
                {posts.map(post => (
                    <li key={post.id} className="post-item">
                        <div className="post-author">
                            <strong>{post.author}</strong> <span className="post-date">{post.createdAt.toLocaleString()}</span>
                        </div>
                        <p className="post-content">{post.content}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default PostList;
