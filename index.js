!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.spanify={})}(this,function(e){"use strict";function l(e,t){e.classList?e.classList.add(t):hasClass(e,t)||(e.className+=" "+t)}window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var i=0;i<this.length;i++)e.call(t,this[i],i,this)}),e.spanify=function(a){document.querySelectorAll("a").forEach(function(e){if(" "===e.innerHTML&&e.getAttribute("title")){var t=e.getAttribute("title");if("end"!==t.slice(0,3)){var i=document.createElement("span");if(i.setAttribute("class",t),a&&a.defaultClass&&l(i,a.defaultClass),e.nextElementSibling&&"end"===e.nextElementSibling.getAttribute("title").slice(0,3)){var n=e.nextSibling;i.innerHTML=n.textContent.trim(),e.parentNode.appendChild(i),e.parentNode.replaceChild(i,e),n.parentNode.removeChild(n)}else e.parentNode.appendChild(i),e.parentNode.replaceChild(i,e)}else e.parentNode.removeChild(e)}})},e.hashify=function(n){document.querySelectorAll("a").forEach(function(e){if(" "===e.innerHTML&&!e.getAttribute("title")&&e.getAttribute("name")){var t=e.getAttribute("name"),i=document.createElement("div");i.setAttribute("class",t),n&&n.defaultClass&&l(i,n.defaultClass),e.parentNode.replaceChild(i,e)}})},Object.defineProperty(e,"__esModule",{value:!0})});
