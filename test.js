const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imagecontainerEl = document.querySelector(".image-container");
const imgsEl =document.querySelectorAll(".first")


let currentImg = 1

let timeout;

prevEl.addEventListener("click", ()=>{
  currentImg--
  clearTimeout(timeout)
  updateImg()
})

nextEl.addEventListener("click", ()=>{
  currentImg++
  clearTimeout(timeout)
  updateImg()
})

updateImg()

function updateImg(){
  if(currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imagecontainerEl.style.transform
   = `translateX(-${(currentImg - 1) * 306}px)`
   timeout = setTimeout(() => {
      currentImg++
      updateImg()
   }, 2000);
}