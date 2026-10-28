// Selecting Element by Dom

// let heading = document.getElementById("heading");
// console.log(heading);

// let paragraph = document.getElementsByClassName("para");
// console.log(paragraph);


// let box = document.getElementsByTagName("div")
// console.log(box);

// let heading1 = document.querySelector("#heading");
// console.log(heading1);


// let boxes = document.querySelectorAll("div");
// console.log(boxes);


// Reading and Updating Content using textContent ,,innerText,innerHTML

// textContent
// let box = document.getElementById("box")
// console.log(box.textContent)

// let heading = document.getElementById("heading");

// heading.textContent = "Hello Javascript"


// innerText
// let heading = document.getElementById("heading");
// heading.innerText = "Hello Html and Css"


// innerHTML

// let heading = document.getElementById("heading");
// heading.innerHTML = "<p>Hello this is paragraph</p>"


// Managing HTML Attribute using getAttribute and setAttribute


// let image  = document.getElementById("image");

// console.log(image.getAttribute("src"));

// image.setAttribute("width", "500px");


// Manipulating CSS Classes using classList

// let para = document.getElementById("para");
// para.classList.add("highlight");
// para.classList.remove("text");
// para.classList.toggle("text");

// let heading = document.querySelector(".text");
// heading.classList.toggle("text");
// heading.classList.toggle("highlight");


// Updating Inline Css using Javascript

// let box = document.getElementById("box");

// box.textContent = "hello Javascript";

// box.style.backgroundColor = "red";
// box.style.height = "200px"
// box.style.width = "250px"
// box.style.color = "white"
// box.style.fontSize = "25px"
// box.style.fontWeight = "700px"


// Dom Event and addEventListener();

// let button = document.getElementById("btn");
// let paragraph = document.getElementById("paragraph");

// button.addEventListener("click",()=>{
//      paragraph.textContent = "Clicked!";
// })


// How to extract value from input

// let button = document.getElementById("btn");
// let inputEl = document.getElementById("input");
// let heading = document.getElementById("heading");

// button.addEventListener("click",()=>{
//     let inpVal = inputEl.value
//     heading.textContent = `Welcome ${inpVal}`
// })



// event.target and event.currTarget


// let div = document.getElementById("parent");
// let button = document.getElementById("btn");


// div.addEventListener("click",(event)=>{
//      // console.log(event);  event object

//      console.log(event.target);
//      console.log(event.currentTarget);
// })

// Conditional UI rendering

// let email = document.getElementById("input");
// let button = document.getElementById("btn");
// let errorMessage = document.getElementById("error");



// button.addEventListener("click",()=>{
//      if(email.value.trim() == "")
//      {
//           errorMessage.textContent = "Please Enter a valid email"
//      }
//      else
//      {
//           errorMessage.textContent = "Register Successfully"
//      }
// })


// Keyboard events


// email.addEventListener("keypress",(event)=>{
//      if(event.key == "Enter")
//      {
//           errorMessage.textContent = "Register Successfully"
//      }
// })



// Create element and insert element

// let box = document.getElementById("container");

// // create element

// let heading = document.createElement("h1");

// heading.textContent = "Hello Javascript";


// box.append(heading);

// update element

// heading.textContent = "Hello Class"

// remove element

// heading.remove();




// form submission and preventDefault

// let form = document.getElementById("myForm");

// form.addEventListener("submit",(event)=>{
//      event.preventDefault();
//      console.log("Login Successfully");

// })

// Client Side Form Validation

const form = document.getElementById("myForm");
const email = document.getElementById("email");
let errorMessage = document.getElementById("message");


form.addEventListener("click",(e)=>{
     e.preventDefault();

     if(email.value.trim()==="")
     {
          errorMessage.textContent = "Email is invalid";

          errorMessage.style.color = "white"
          errorMessage.style.backgroundColor = "red"
          errorMessage.style.fontSize = "24px"
          errorMessage.style.fontWeight = "700"
          errorMessage.style.borderRadius = "10px"
     }
     else
     {
          errorMessage.textContent = "Register Successfully"

          errorMessage.style.color = "white";
          errorMessage.style.backgroundColor = "green";
          errorMessage.style.fontSize = "24px";
          errorMessage.style.fontWeight = "700";
          errorMessage.style.borderRadius = "10px";
     }
})