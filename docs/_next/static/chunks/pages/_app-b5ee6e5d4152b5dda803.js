(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7672:function(e,t,n){"use strict";n.r(t);var r=n(6265),c=n(5893);n(9267),n(7424),n(2105),n(4472);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.default=function(e){var t=e.Component,n=e.pageProps;return(0,c.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))}},9267:function(){var e,t=document.querySelectorAll(".slide"),n=document.getElementById("next"),r=document.getElementById("prev"),c=5e3,u=function(){var e=document.querySelector(".current");e.classList.remove("current"),e.nextElementSibling?e.nextElementSibling.classList.add("current"):t[0].classList.add("current")};n&&n.addEventListener("click",(function(){u(),clearInterval(e),e=setInterval(u,c)})),r&&r.addEventListener("click",(function(){!function(){var e=document.querySelector(".current");e.classList.remove("current"),e.previousElementSibling?e.previousElementSibling.classList.add("current"):t[t.length-1].classList.add("current")}(),clearInterval(e),e=setInterval(u,c)})),e=setInterval(u,c)},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7672)}])},4472:function(){},2105:function(){},7424:function(){},6265:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var n=e.O();_N_E=n}]);