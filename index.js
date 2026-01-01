let fragment = document.createDocumentFragment();
let newlegend = document.createElement('legend');
let neww= document.createElement('ol');

//creating legend
newlegend.textContent="Fusce ut ex luctus, tempor justo non, maximus diam?";

//creating options
let a=["Pellentesque at ante at elit","scelerisque elementum","Aenean augue lorem,","acilisis ac nibh id"]
for(let i=0; i<a.length; i++){

    let list =document.createElement('li');
    let input =document.createElement("input");
    input.setAttribute("type","radio");
    input.setAttribute("name","form2");
    list.textContent =a[i];
    neww.prepend(list);
    list.prepend(input);

}
neww.setAttribute("type","A");
let score=0;

let container = document.querySelector('div');
container.textContent="Answer both questions and click Submit";
container.textContent="You got 2/2 correct! You Won! ✓";
container.textContent="You got 1/2 correct. Try again!";

fragment.appendChild(newlegend);
fragment.appendChild(neww);
//working on making a,b,c,d
neww.addEventListener("click",function (event){
    event.preventDefault();
    if(event.target.value==="d"){
        score++;
    }else{
        return;
    }
})
//second event listener(Change color,Show feedback,Use parent/child navigation,Disable radio buttons,Check answer)
neww.addEventListener("change", function (event){
event.preventDefault();
let li = event.target.pareentNode;
if(event.target.value === "d"){
  li.style.color='green';
}else{
  li.style.color='red';
}
if(event.target.tagname.textContent='submit'){
    let buttons = document.querySelectorAll('input');
    buttons.disabled=true;
}







})
//total scoreing
if(score==3){
window.alert("You Won!!!");}
else{
window.alert("you were close try again");
}

let grab=document.getElementById("qwe");
grab.prepend(fragment);