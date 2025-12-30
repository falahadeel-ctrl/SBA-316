let fragment = document.createDocumentFragment();
let new1= document.createElement(legend);
let new2= document.createElement(ol);
let new3= document.createElement(li);

//creating legend
new1.textcontent="Fusce ut ex luctus, tempor justo non, maximus diam?";

//creating options
let a=["Pellentesque at ante at elit","scelerisque elementum","Aenean augue lorem,","acilisis ac nibh id"]
for(let i=0; i<a.length; i++){
    new3[i].textcontent=a[i];
    new2.prepend(new3[i]);
}
new2.setAttribute("type","A");
let score=0;


//working on making a,b,c,d
new2.addEventListener("click",function (event){
    event.preventdefault;
    if(ol.event.target==="D"){
        score++;
    }else{
        return;
    }
})

//total scoreing
if(score==3){
windows.alert("You Won!!!");}
else{
windows.alert("you were close try again");
}

let grab=document.getElementById("qwe");
grab.prepend(fragment);