const e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),c=document.querySelector(".js-menu-container"),n=()=>{const t="true"===e.getAttribute("aria-expanded")||!1;e.setAttribute("aria-expanded",!t),c.classList.toggle("is-open")};e.addEventListener("click",n),t.addEventListener("click",n);const s=document.querySelectorAll(".products__item");s.forEach((e=>{e.addEventListener("click",(()=>{s.forEach((e=>{e.classList.remove("_active")})),e.classList.add("_active")}))}));
//# sourceMappingURL=index.f677ee8d.js.map