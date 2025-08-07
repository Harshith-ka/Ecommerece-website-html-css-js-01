// Script for navigation bar
// const bar=document.getElementById("bar");
// const nav = document.querySelector(".navbar");

// if(bar && nav){
//     bar.addEventListener('click',()=>{
//          nav.classList.add('active');
//     });
// }
const bar = document.getElementById("bar");
const nav = document.querySelector(".navbar"); // selects the first element with class "navbar"

if (bar && nav) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}
