const popupEdit = document.querySelector(".popup");
const buttonOpenEdit = document.querySelector("#open-button-edit");

const delegatingEventsElements = (evt) => { 
      if (evt.target.closest(".button-close")) { 
        popupEdit.style.visibility = "hidden";
      }
}

function initPopup() { 

    popupEdit.addEventListener("click", (evt) => { 
        evt.preventDefault();
        delegatingEventsElements(evt);
    });


    buttonOpenEdit.addEventListener("click", () => { 
        popupEdit.style.visibility = "visible";
    })
}

export default initPopup;