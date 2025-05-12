import photo from "../../image/user-image.jpg";
import initDeletePost from "./deletePosts";
function initPosts() {
  const templatePost = document.querySelector("#template-post").content;
  const post = templatePost.querySelector(".post");
  const postsList = document.querySelector("#places__list");
  const addButton = document.querySelector("#add-post");
  const postText = document.querySelector("#post-text");
  // function remove post
  initDeletePost();

  // function add posts in template
  addButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    addPosts(post);
  });

  postText.addEventListener("keydown", (evt) => {
    if (evt.key === "Enter") {
      addPosts(post);
    }
  });

  function addPosts(postElement) {
    if (!postText.value.trim()) return;

    const postNode = postElement.cloneNode(true);
    reactionsButton(postNode)
    postNode.querySelector("#post-image").src = photo;
    postNode.querySelector(".post-text p").textContent = postText.value;
    postsList.prepend(postNode);

    postText.value = "";

function reactionsButton(buttonsPost) { 
  const favouritesButton = buttonsPost.querySelector(".button-favourites");
  // favourites-button function
  favouritesButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("favourites-fill");
  });
  const likeButton = buttonsPost.querySelector(".button-like");
  // button-like function
  likeButton.addEventListener("click", () => {
    likeButton.querySelector("path").classList.toggle("like-fill");
    dislikeButton.querySelector("path").classList.remove("dislike-fill");
  });
  const dislikeButton = buttonsPost.querySelector(".button-dislike");
  // button-dislike function
  dislikeButton.addEventListener("click", () => {
    dislikeButton.querySelector("path").classList.toggle("dislike-fill");
    likeButton.querySelector("path").classList.remove("like-fill");
  });
  }
}

}

export default initPosts;
