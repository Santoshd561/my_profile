import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from "./blog/Blog";
import BlogDetail from "./blog/BlogDetails.js";
import ContactMe from "./ContactMe/ContactMe.js";
import Resume from "./resume/Resume.js";

export default function MultiPageRoutes() {
    return (
        <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/about'} element={<About />} />
            <Route exact path={'/portfolio'} element={<Portfolio />} />
            <Route exact path={'/blog'} element={<Blog />} />
            <Route exact path={'/contact'} element={<ContactMe />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route exact path={'/resume'} element={<Resume />} />

        </Routes>
    )
}