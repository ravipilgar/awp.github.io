let counter=1;
function increment()
{
 let counterinc=document.querySelector("#id1");
 counter=counter+1;
 counterinc.innerHTML=counter;
}

function decrement()
{
    let counterinc=document.querySelector("#id1");
    counter=counter-1;
    counterinc.innerHTML=counter;
}