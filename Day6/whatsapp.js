function commentHere() {
    let inputValue = document.querySelector(".message").value;
    let cloneValue = document.querySelector(".placeComment").cloneNode(true);
    cloneValue.innerHTML = inputValue;

    let commentdiv = document.querySelector(".wmiddle");
    commentdiv.insertBefore(cloneValue, commentdiv.lastChild);

    document.querySelector(".message").value = "";
}