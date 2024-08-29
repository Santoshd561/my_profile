import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Blog from "./blog/Blog";
import React from 'react';
import { Box } from "@mui/material";
import Resume from "./resume/Resume.js";

export default function SinglePageRoutes({refs}) {
    return (<Box mt={'3rem'}>
        <Home innerRef={refs.refHome}/>
        <About innerRef={refs.refAbout}/>
        <Portfolio innerRef={refs.refPortfolio}/>
        <Blog innerRef={refs.refBlog}/>
        <Resume innerRef={refs.refResume}/>
    </Box>)
}