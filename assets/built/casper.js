!function(i){"use strict";i.fn.fitVids=function(e){var t,n,r={customSelector:null,ignore:null};return document.getElementById("fit-vids-style")||(t=document.head||document.getElementsByTagName("head")[0],(n=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',t.appendChild(n.childNodes[1])),e&&i.extend(r,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];r.customSelector&&e.push(r.customSelector);var a=".fitvidsignore";r.ignore&&(a=a+", "+r.ignore);var t=i(this).find(e.join(","));(t=(t=t.not("object object")).not(a)).each(function(){var e,t,n=i(this);0<n.parents(a).length||"embed"===this.tagName.toLowerCase()&&n.parent("object").length||n.parent(".fluid-width-video-wrapper").length||(n.css("height")||n.css("width")||!isNaN(n.attr("height"))&&!isNaN(n.attr("width"))||(n.attr("height",9),n.attr("width",16)),e=("object"===this.tagName.toLowerCase()||n.attr("height")&&!isNaN(parseInt(n.attr("height"),10))?parseInt(n.attr("height"),10):n.height())/(isNaN(parseInt(n.attr("width"),10))?n.width():parseInt(n.attr("width"),10)),n.attr("name")||(t="fitvid"+i.fn.fitVids._count,n.attr("name",t),i.fn.fitVids._count++),n.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),n.removeAttr("height").removeAttr("width"))})})},i.fn.fitVids._count=0}(window.jQuery||window.Zepto),function(e){e.addEventListener("DOMContentLoaded",function(){e.querySelectorAll(".kg-gallery-image img").forEach(function(e){var t=e.closest(".kg-gallery-image"),n=e.attributes.width.value/e.attributes.height.value;t.style.flex=n+" 1 0%"})})}((window,document)),function(t,n){var a,r,i,s,o,l,u,c=n.querySelector("link[rel=next]");function d(){if(404===this.status)return t.removeEventListener("scroll",p),void t.removeEventListener("resize",m);this.response.querySelectorAll(".post-card").forEach(function(e){a.appendChild(n.importNode(e,!0))});var e=this.response.querySelector("link[rel=next]");e?c.href=e.href:(t.removeEventListener("scroll",p),t.removeEventListener("resize",m)),u=n.documentElement.scrollHeight,s=i=!1}function e(){var e;s||(o+l<=u-r?i=!1:(s=!0,(e=new t.XMLHttpRequest).responseType="document",e.addEventListener("load",d),e.open("GET",c.href),e.send(null)))}function g(){i||t.requestAnimationFrame(e),i=!0}function p(){o=t.scrollY,g()}function m(){l=t.innerHeight,u=n.documentElement.scrollHeight,g()}!c||(a=n.querySelector(".post-feed"))&&(s=i=!(r=300),o=t.scrollY,l=t.innerHeight,u=n.documentElement.scrollHeight,t.addEventListener("scroll",p,{passive:!0}),t.addEventListener("resize",m),g())}(window,document),function(){var i,s,e,t;"undefined"!=typeof self&&self.Prism&&self.document&&(Prism.plugins.toolbar?((i=window.ClipboardJS||void 0)||"function"!=typeof require||(i=require("clipboard")),s=[],i||(e=document.createElement("script"),t=document.querySelector("head"),e.onload=function(){if(i=window.ClipboardJS)for(;s.length;)s.pop()()},e.src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",t.appendChild(e)),Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(e){var t=document.createElement("button");t.textContent="Copy";var n=e.element;return i?a():s.push(a),t;function a(){var e=new i(t,{text:function(){return n.textContent}});e.on("success",function(){t.textContent="Copied!",r()}),e.on("error",function(){t.textContent="Press Ctrl+C to copy",r()})}function r(){setTimeout(function(){t.textContent="Copy"},5e3)}})):console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."))}(),function(){var s,o,l,e,t;"undefined"!=typeof self&&self.Prism&&self.document&&(s=[],o={},l=function(){},Prism.plugins.toolbar={},e=Prism.plugins.toolbar.registerButton=function(e,n){var t="function"==typeof n?n:function(e){var t;return"function"==typeof n.onClick?((t=document.createElement("button")).type="button",t.addEventListener("click",function(){n.onClick.call(this,e)})):"string"==typeof n.url?(t=document.createElement("a")).href=n.url:t=document.createElement("span"),n.className&&t.classList.add(n.className),t.textContent=n.text,t};e in o?console.warn('There is a button with the key "'+e+'" registered already.'):s.push(o[e]=t)},t=Prism.plugins.toolbar.hook=function(a){var e,r,t,n,i=a.element.parentNode;i&&/pre/i.test(i.nodeName)&&!i.parentNode.classList.contains("code-toolbar")&&((e=document.createElement("div")).classList.add("code-toolbar"),i.parentNode.insertBefore(e,i),e.appendChild(i),(r=document.createElement("div")).classList.add("toolbar"),t=s,(n=function(e){for(;e;){var t=e.getAttribute("data-toolbar-order");if(null!=t)return(t=t.trim()).length?t.split(/\s*,\s*/g):[];e=e.parentElement}}(a.element))&&(t=n.map(function(e){return o[e]||l})),t.forEach(function(e){var t,n=e(a);n&&((t=document.createElement("div")).classList.add("toolbar-item"),t.appendChild(n),r.appendChild(t))}),e.appendChild(r))},e("label",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-label")){var n,a,r=t.getAttribute("data-label");try{a=document.querySelector("template#"+r)}catch(e){}return a?n=a.content:(t.hasAttribute("data-url")?(n=document.createElement("a")).href=t.getAttribute("data-url"):n=document.createElement("span"),n.textContent=r),n}}),Prism.hooks.add("complete",t))}();var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var c=/\blang(?:uage)?-([\w-]+)\b/i,t=0,L={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof _?new _(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function n(e,a){var r,t;switch(a=a||{},L.util.type(e)){case"Object":if(t=L.util.objId(e),a[t])return a[t];for(var i in r={},a[t]=r,e)e.hasOwnProperty(i)&&(r[i]=n(e[i],a));return r;case"Array":return t=L.util.objId(e),a[t]?a[t]:(r=[],a[t]=r,e.forEach(function(e,t){r[t]=n(e,a)}),r);default:return e}},getLanguage:function(e){for(;e&&!c.test(e.className);)e=e.parentElement;return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var t=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(t){var n=document.getElementsByTagName("script");for(var a in n)if(n[a].src==t)return n[a]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n=L.util.clone(L.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(n,e,t,a){var r=(a=a||L.languages)[n],i={};for(var s in r)if(r.hasOwnProperty(s)){if(s==e)for(var o in t)t.hasOwnProperty(o)&&(i[o]=t[o]);t.hasOwnProperty(s)||(i[s]=r[s])}var l=a[n];return a[n]=i,L.languages.DFS(L.languages,function(e,t){t===l&&e!=n&&(this[e]=i)}),i},DFS:function e(t,n,a,r){r=r||{};var i,s,o=L.util.objId;for(var l in t)t.hasOwnProperty(l)&&(n.call(t,l,t[l],a||l),i=t[l],"Object"!==(s=L.util.type(i))||r[o(i)]?"Array"!==s||r[o(i)]||(r[o(i)]=!0,e(i,n,l,r)):(r[o(i)]=!0,e(i,n,null,r)))}},plugins:{},highlightAll:function(e,t){L.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};L.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),L.hooks.run("before-all-elements-highlight",a);for(var r,i=0;r=a.elements[i++];)L.highlightElement(r,!0===t,a.callback)},highlightElement:function(e,t,n){var a=L.util.getLanguage(e),r=L.languages[a];e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+a;var i=e.parentElement;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+a);var s,o={element:e,language:a,grammar:r,code:e.textContent};function l(e){o.highlightedCode=e,L.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,L.hooks.run("after-highlight",o),L.hooks.run("complete",o),n&&n.call(o.element)}if(L.hooks.run("before-sanity-check",o),!o.code)return L.hooks.run("complete",o),void(n&&n.call(o.element));L.hooks.run("before-highlight",o),o.grammar?t&&u.Worker?((s=new Worker(L.filename)).onmessage=function(e){l(e.data)},s.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))):l(L.highlight(o.code,o.grammar,o.language)):l(L.util.encode(o.code))},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};return L.hooks.run("before-tokenize",a),a.tokens=L.tokenize(a.code,a.grammar),L.hooks.run("after-tokenize",a),_.stringify(L.util.encode(a.tokens),a.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var r=new i;return T(r,r.head,e),function e(t,n,a,r,i,s){for(var o in a)if(a.hasOwnProperty(o)&&a[o])for(var l=a[o],l=Array.isArray(l)?l:[l],u=0;u<l.length;++u){if(s&&s.cause==o+","+u)return;var c,d=l[u],g=d.inside,p=!!d.lookbehind,m=!!d.greedy,f=0,h=d.alias;m&&!d.pattern.global&&(c=d.pattern.toString().match(/[imsuy]*$/)[0],d.pattern=RegExp(d.pattern.source,c+"g"));for(var v=d.pattern||d,b=r.next,y=i;b!==n.tail&&!(s&&y>=s.reach);y+=b.value.length,b=b.next){var w=b.value;if(n.length>t.length)return;if(!(w instanceof _)){var x,k,F,A,P,E=1;if(m&&b!=n.tail.prev){if(v.lastIndex=y,!(N=v.exec(t)))break;var C=N.index+(p&&N[1]?N[1].length:0),S=N.index+N[0].length,$=y;for($+=b.value.length;$<=C;)$+=(b=b.next).value.length;if(y=$-=b.value.length,b.value instanceof _)continue;for(var j=b;j!==n.tail&&($<S||"string"==typeof j.value);j=j.next)E++,$+=j.value.length;E--,w=t.slice(y,$),N.index-=y}else{v.lastIndex=0;var N=v.exec(w)}N&&(p&&(f=N[1]?N[1].length:0),S=(C=N.index+f)+(x=N[0].slice(f)).length,k=w.slice(0,C),F=w.slice(S),A=y+w.length,s&&A>s.reach&&(s.reach=A),P=b.prev,k&&(P=T(n,P,k),y+=k.length),function(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;(t.next=a).prev=t,e.length-=r}(n,P,E),b=T(n,P,new _(o,g?L.tokenize(x,g):x,h,x)),F&&T(n,b,F),1<E&&e(t,n,a,b.prev,y,{cause:o+","+u,reach:A}))}}}}(e,r,t,r.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(r)},hooks:{all:{},add:function(e,t){var n=L.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=L.hooks.all[e];if(n&&n.length)for(var a,r=0;a=n[r++];)a(t)}},Token:_};function _(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function i(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function T(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}if(u.Prism=L,_.stringify=function t(e,n){if("string"==typeof e)return e;if(Array.isArray(e)){var a="";return e.forEach(function(e){a+=t(e,n)}),a}var r={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},i=e.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(r.classes,i):r.classes.push(i)),L.hooks.run("wrap",r);var s="";for(var o in r.attributes)s+=" "+o+'="'+(r.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+s+">"+r.content+"</"+r.tag+">"},!u.document)return u.addEventListener&&(L.disableWorkerMessageHandler||u.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,a=t.code,r=t.immediateClose;u.postMessage(L.highlight(a,L.languages[n],n)),r&&u.close()},!1)),L;var e,n=L.util.currentScript();function a(){L.manual||L.highlightAll()}return n&&(L.filename=n.src,n.hasAttribute("data-manual")&&(L.manual=!0)),L.manual||("loading"===(e=document.readyState)||"interactive"===e&&n&&n.defer?document.addEventListener("DOMContentLoaded",a):window.requestAnimationFrame?window.requestAnimationFrame(a):window.setTimeout(a,16)),L}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:a},Prism.languages.insertBefore("markup","cdata",r)}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript,function(){var l,u,c,d,a,e;function g(e,t){var n=(n=e.className).replace(a," ")+" language-"+t;e.className=n.replace(/\s+/g," ").trim()}"undefined"!=typeof self&&self.Prism&&self.document&&(l=window.Prism,u={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},d="pre[data-src]:not(["+(c="data-src-status")+'="loaded"]):not(['+c+'="'+"loading"+'"])',a=/\blang(?:uage)?-([\w-]+)\b/i,l.hooks.add("before-highlightall",function(e){e.selector+=", "+d}),l.hooks.add("before-sanity-check",function(e){var t,n,a,r,i,s,o=e.element;o.matches(d)&&(e.code="",o.setAttribute(c,"loading"),(t=o.appendChild(document.createElement("CODE"))).textContent="Loading…",n=o.getAttribute("data-src"),"none"===(r=e.language)&&(a=(/\.(\w+)$/.exec(n)||[,"none"])[1],r=u[a]||a),g(t,r),g(o,r),(i=l.plugins.autoloader)&&i.loadLanguages(r),(s=new XMLHttpRequest).open("GET",n,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.setAttribute(c,"loaded"),t.textContent=s.responseText,l.highlightElement(t)):(o.setAttribute(c,"failed"),400<=s.status?t.textContent="✖ Error "+s.status+" while fetching file: "+s.statusText:t.textContent="✖ Error: File does not exist or is empty"))},s.send(null))}),l.plugins.fileHighlight={highlight:function(e){for(var t,n=(e||document).querySelectorAll(d),a=0;t=n[a++];)l.highlightElement(t)}},e=!1,l.fileHighlight=function(){e||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),e=!0),l.plugins.fileHighlight.highlight.apply(this,arguments)})}(),function(s,o){s.Casper||(s.Casper={}),s.Casper.stickyNavTitle=function(e){var t=o.querySelector(e.navSelector),n=o.querySelector(e.titleSelector),a=s.scrollY,r=!1;function i(){n.getBoundingClientRect().top+s.scrollY+(n.offsetHeight+35)<=a?t.classList.add(e.activeClass):t.classList.remove(e.activeClass),r=!1}s.addEventListener("scroll",function(){a=s.scrollY,function(){r||requestAnimationFrame(i);r=!0}()},{passive:!0}),i()}}(window,document);
//# sourceMappingURL=casper.js.map