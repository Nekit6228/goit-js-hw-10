import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as i,i as c}from"./assets/vendor-BbbuE1sJ.js";const t=document.querySelector("button"),r=document.querySelector("#datetime-picker");let l=null,u=null;t.disabled=!0;t.style.cursor="not-allowed";i(r,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const o=e[0];o<=new Date?(c.error({title:"Error",message:"Please choose a date in the future",position:"topRight",timeout:3e3}),t.disabled=!0,t.style.cursor="not-allowed",l=null):(l=o,t.disabled=!1,t.style.cursor="pointer")}});function m(e){return{days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),minutes:Math.floor(e%864e5%36e5/6e4),seconds:Math.floor(e%864e5%36e5%6e4/1e3)}}function a(e){return String(e).padStart(2,"0")}function d({days:e,hours:o,minutes:n,seconds:s}){document.querySelector("[data-days]").textContent=a(e),document.querySelector("[data-hours]").textContent=a(o),document.querySelector("[data-minutes]").textContent=a(n),document.querySelector("[data-seconds]").textContent=a(s)}function y(e){u=setInterval(()=>{const n=e-new Date;if(n<=0)clearInterval(u),d({days:0,hours:0,minutes:0,seconds:0}),r.disabled=!1,r.style.cursor="pointer",t.disabled=!0,t.style.cursor="not-allowed";else{const s=m(n);d(s)}},1e3)}t.addEventListener("click",()=>{l&&(t.disabled=!0,t.style.cursor="not-allowed",r.disabled=!0,r.style.cursor="not-allowed",y(l))});
//# sourceMappingURL=1-timer.js.map
