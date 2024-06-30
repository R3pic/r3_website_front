import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import Home from './pages/Home.tsx';
import Search from './pages/Search.tsx';
import Notifications from './pages/Notifications.tsx';
import Profile from './pages/Profile.tsx';
import Settings from './pages/Settings.tsx';
import PostDetail from './components/posts/PostDetail.tsx';
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';

const App: React.FC = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout isLogin={isLogin} setIsLogin={setIsLogin} />}>
                    <Route index element={<Navigate to="/home" />} />
                    <Route path="home" element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path=":author/post/:id" element={<PostDetail />} />
                    <Route path=":id" element={<Profile />} />
                </Route>

                <Route path="login" element={<LoginPage setIsLogin={setIsLogin}/>} />
                <Route path="register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
}

export default App;
