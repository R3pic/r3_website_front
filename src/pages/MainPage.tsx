import React from "react";
import SideBar from "../components/SideBar.tsx";
import PostList from "../components/PostList.tsx";
import "../style/pages/MainPage.css";

const MainPage: React.FC = () => {
    return (
        <div className="main-page">
            <div className="wrapper">
                <SideBar />
                <PostList />
            </div>
        </div>
    );
}

export default MainPage;
