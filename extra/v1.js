function addItems()
{
    let itemname =document.querySelector("#id1").children[0].value;
    let newele=document.querySelector("#id2").cloneNode(true);
     newele.removeAttribute("id");
     newele.style.visibility="visible";
     newele.children[0].innerHTML=itemname;
     if(itemname!==" ")
     {
     const commentBox = document.querySelector("#box").children[1].children[0];
     commentBox.insertBefore(newele, commentBox.firstChild);
     }
     document.querySelector("#id1").children[0].value =" ";
}

function deletecomment(delcomm)
{
    delcomm.parentElement.parentElement.remove();
}