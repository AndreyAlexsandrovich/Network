import initPosts from './scripts/Posts.js';
import initSideBar from './scripts/sidebarButton.js';
import initPopup from './scripts/popup.js';

document.addEventListener("DOMContentLoaded", () => { 
    initSideBar();
    initPosts();
    initPopup()
})

import './index.css';