document.getElementById("thumbs").addEventListener("click",function(e){e.preventDefault();for(var t=e.target;t!==this;){if("A"===t.nodeName)return document.getElementById("largeImg").src=t.href,!1;t=t.parentNode}});
//# sourceMappingURL=index.b053e168.js.map
