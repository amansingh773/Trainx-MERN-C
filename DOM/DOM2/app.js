// let outerDiv = document.getElementById("outer");
// let middleDiv = document.getElementById("middle");
// let innerDiv = document.getElementById("inner");


// outerDiv.addEventListener("click",()=>{
//      console.log("Outer Div Clicked")
// },true)


// middleDiv.addEventListener("click",(e)=>{
//      console.log("Middle Clicked")
//      // e.stopPropagation();
    
// },true)

// innerDiv.addEventListener("click",()=>{
//      console.log("inner Clicked")
// },true)




// without Event Delegation

// let a = document.getElementById("a");
// let b = document.getElementById("b");
// let c = document.getElementById("c");
// let d = document.getElementById("d");


// a.addEventListener("click",()=>{
//      console.log(`Clicked on ${a.textContent}`)
// })


// b.addEventListener("click", () => {
//   console.log(`Clicked on ${b.textContent}`);
// });


// c.addEventListener("click", () => {
//   console.log(`Clicked on ${c.textContent}`);
// });

// d.addEventListener("click", () => {
//   console.log(`Clicked on ${d.textContent}`);
// });


// Event delegation

let parent = document.getElementById("parent");

parent.addEventListener("click",(e)=>{
     if(e.target.tagName  = "Div")
     {
          console.log(e.target.textContent);
     }
})