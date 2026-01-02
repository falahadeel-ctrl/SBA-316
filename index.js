let fragment = document.createDocumentFragment();
let newlegend = document.createElement('legend');
let neww= document.createElement('ol');
let form =document.getElementsByTagName('form')[0];

//creating legend
newlegend.textContent="Fusce ut ex luctus, tempor justo non, maximus diam?";

//creating options
let a=["Pellentesque at ante at elit","scelerisque elementum","Aenean augue lorem,","acilisis ac nibh id"]
let options = ['a','b','c','d']
for(let i=0; i<a.length; i++){

    let list =document.createElement('li');
    let input =document.createElement("input");
    input.setAttribute("type","radio");
    input.setAttribute("name","form2");
    // for(z=0;z<a.length;z++){
        input.setAttribute(`value`,options[i]);
    // }
    list.textContent =a[i];
    neww.appendChild(list);
    list.prepend(input);

}
neww.setAttribute("type","A");

let container = document.querySelector('div');
container.textContent="Answer both questions and click Submit";


fragment.appendChild(newlegend);
fragment.appendChild(neww);
//working on making a,b,c,d
// neww.addEventListener("click",function (event){
//     event.preventDefault();
//     if(event.target.value==="d" || input.event.target.value==="a"){
//         score++;
//     }else{
//         return;
//     }

// });

//second event listener(Change color,Show feedback,Use parent/child navigation,Disable radio buttons,Check answer)

// neww.addEventListener("change", function (event){
// event.preventDefault();
// let li = event.target.parentNode;
// if(event.target.value === "d"){
//   li.style.color='green';
// }else{
//   li.style.color='red';
// }

// if(event.target.tagname.textContent='submit'){
//     let buttons = document.querySelectorAll('input');
//     buttons.disabled=true;
// }
// })
let submit = document.getElementById('submitbutton');
submit.addEventListener('click',function (event){
    event.preventDefault();
    let score=0;

    let q1= document.querySelector(`input[name="form1"]:checked`);
    let q2= document.querySelector(`input[name="form2"]:checked`);

  if( !q1 || !q2){
    window.alert('answer both questions!');
    return;
  }
  if(q1.value==='a'){
    score++;
  }
  if(q2.value==='d'){
    score++;
  }

  if(event.target.id==='submitbutton' && score===0)
        {
        container.textContent="You got 0/2 correct. Try again!";
        container.style.color='red';
        window.alert('try again!');
    }
    else if(event.target.id=== 'submitbutton' && score===1)
        {
        container.textContent="You got 1/2 correct. Try again!";
        container.style.color='red';
        window.alert('almost there');
    }else
        {
        container.textContent="You got 2/2 correct! You Won! ✓";
        container.style.color='green';
        window.alert('you won!!');
    }

    let radio = document.querySelectorAll('input[type="radio"]');
    for(let i=0;i<radio.length;i++){
      radio[i].disabled=true;
    }

    
    submit.disabled=true;
})

//total scoreing
// if(score==2){
// window.alert("You Won!!!");}
// else{
// window.alert("you were close try again");
// }

let grab=document.getElementById("qwe");
grab.appendChild(fragment);
