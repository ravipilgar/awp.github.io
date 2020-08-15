var count = 0;
function like() {

    let likeCount = document.querySelector("#like");
    count++;
    likeCount.innerHTML = "Like " + count;
}
function dislike() {
    let counterEle = document.querySelector("#dis");

    count = count - 1;

    counterEle.innerHTML = "Dislike " + count;

}
