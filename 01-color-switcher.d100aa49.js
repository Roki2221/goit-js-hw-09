function t(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}let e=null;const r=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]"),o=document.querySelector("body");d.setAttribute("disabled","true");r.addEventListener("click",(()=>{o.style.backgroundColor=`${t()}`,e=setInterval((()=>{o.style.backgroundColor=`${t()}`}),1e3),d.removeAttribute("disabled"),r.setAttribute("disabled","true")})),d.addEventListener("click",(()=>{r.removeAttribute("disabled"),d.setAttribute("disabled","true"),clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.d100aa49.js.map
