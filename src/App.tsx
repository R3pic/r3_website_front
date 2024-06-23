import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Search from './pages/Search.tsx';
import Notifications from './pages/Notifications.tsx';
import Profile from './pages/Profile.tsx';
import Settings from './pages/Settings.tsx';
import PostDetail from './components/PostDetail.tsx';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="/home" />} />
                    <Route path="home" element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path=":author/post/:id" element={<PostDetail />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
