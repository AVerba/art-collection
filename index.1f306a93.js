!function(){var e=document.querySelector(".header"),t=document.querySelectorAll(".menu__link");window.addEventListener("scroll",(function(o){window.scrollY>2?(e.style.backgroundColor="rgba(251 251 251 / 71%)",t.forEach((function(e){e.style.color="black"}))):(e.style.backgroundColor="transparent",t.forEach((function(e){e.style.color="white"})))}));var o=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=document.querySelector(".js-menu-container"),c=function(){var e="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!e),n.classList.toggle("is-open")};o.addEventListener("click",c),r.addEventListener("click",c);var l=document.querySelectorAll(".products__item");l.forEach((function(e){e.addEventListener("click",(function(){l.forEach((function(e){e.classList.remove("_active")})),e.classList.add("_active")}))})),document.querySelectorAll(".menu__link").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var o=e.getAttribute("href");document.querySelectorAll(".menu__item").forEach((function(e){e.classList.remove("active")})),e.parentElement.classList.add("active");var r=document.querySelector(o).getBoundingClientRect().top+window.pageYOffset+-104;window.scrollTo({top:r,behavior:"smooth"})}))}));var i=document.querySelectorAll(".menu__item"),a=document.querySelectorAll("section[id]");window.addEventListener("scroll",(function(){var e="",t=!0,o=!1,r=void 0;try{for(var n,c=a[Symbol.iterator]();!(t=(n=c.next()).done);t=!0){var l=n.value;l.offsetTop<=window.scrollY+140&&(e=l.getAttribute("id"))}}catch(e){o=!0,r=e}finally{try{t||null==c.return||c.return()}finally{if(o)throw r}}i.forEach((function(t){t.classList.remove("active"),t.querySelector("a").getAttribute("href")==="#".concat(e)&&t.classList.add("active")}))}))}();
//# sourceMappingURL=index.1f306a93.js.map