var clickCount = 0
const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
});
const getDate = new Date().getFullYear();
console.log(getDate)
document.getElementById("Date").innerHTML = getDate;

var navlist = document.getElementById("menus");
var close = document.getElementById("close");

navlist.addEventListener("click", function(){
  clickCount ++;
  if (clickCount == 1){
    document.getElementById("navlist").style.display = "block";
  } else if(clickCount==2)
  {
    document.getElementById("navlist").style.display = "none";
    clickCount = 0
  }
})
// navlist.addEventListener("click",function(){
//   document.getElementById("navlist").style.display = "block";
//   document.getElementById("menus").style.display = "none";
//   document.getElementById("close").style.display = "block";
// })

// close.addEventListener("click",function(){
//   document.getElementById("navlist").style.display = "none";
//   document.getElementById("menus").style.display = "block";
//   document.getElementById("close").style.display = "none";
// })
