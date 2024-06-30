import React from "react";
import PostList from "../components/posts/PostList";

const Home: React.FC = () => {
    return (
        <div>
            <PostList target="recent"/>
        </div>
    );
}

export default Home;
