const SliderGallery = document.querySelectorAll(".products__item");
addClass();

function addClass (){
  SliderGallery.forEach((slide)=>{
    slide.addEventListener('click', ()=>{
      removeClass();
      slide.classList.add("_active");
    })
  })
}
function removeClass(){
  SliderGallery.forEach((slide)=>{
    slide.classList.remove("_active");
  })
}