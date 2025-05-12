const templatePosts = document.querySelector("#places__list");

const initDeletePost = () => {
  templatePosts.addEventListener("click", (evt) => {
const deleteButton = evt.target.closest(".trash-delete")

    if (!deleteButton)  return;
    
    const post = deleteButton.closest("#post")
    if (post) { 
      post.remove();
    }
  });
};

export default initDeletePost;
