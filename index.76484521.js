!function(){var e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),c=document.querySelector(".js-menu-container"),n=function(){var t="true"===e.getAttribute("aria-expanded")||!1;e.setAttribute("aria-expanded",!t),c.classList.toggle("is-open")};e.addEventListener("click",n),t.addEventListener("click",n);var r=document.querySelectorAll(".products__item");r.forEach((function(e){e.addEventListener("click",(function(){r.forEach((function(e){e.classList.remove("_active")})),e.classList.add("_active")}))}))}();
//# sourceMappingURL=index.76484521.js.map
