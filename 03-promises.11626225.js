function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const o=t.target,n=o.elements.delay.value,i=o.elements.amount.value,l=o.elements.step.value;for(let t=0;t<i;t+=1){setTimeout((()=>{var o,i;(o=t+1,i=+n+t*l,Math.random()>.3?Promise.resolve({position:o,delay:i}):Promise.reject({position:o,delay:i})).then((({position:t,delay:o})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}))}),+n+t*l)}}));
//# sourceMappingURL=03-promises.11626225.js.map