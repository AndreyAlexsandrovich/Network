// import initPosts from './scripts/Posts.js';
import initSideBar from './scripts/sidebarButton.js';
// import initPopup from './scripts/popup.js';
import apiProducts from './scripts/api.js'
document.addEventListener("DOMContentLoaded", () => { 
    initSideBar();
    apiProducts();
})

import './index.css';