const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup")
closeIcon = popupBox.querySelector("header i")
addBtn = popupBox.querySelector("button")

addBox.addEventListener("click", () => {
    popBox.classList.add("show");
})

closeIcon.addEventListener("click", () => {
    popBox.classList.remove("show");
})

addBtn.addEventListener("click", e => {
    e.preventDefault();
    console.log("Button clicked");
})
