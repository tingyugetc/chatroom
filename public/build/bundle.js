!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(1),n(5),n(7)},function(e,t,n){var i=n(2);"string"==typeof i&&(i=[[e.id,i,""]]);n(4)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"*{margin:0;padding:0;box-sizing:border-box}body{font:13px Helvetica,Arial,\\\\5FAE\\8F6F\\96C5\\9ED1,\\\\9ED1\\4F53}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=p[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(c(i.parts[o],t))}else{for(var s=[],o=0;o<i.parts.length;o++)s.push(c(i.parts[o],t));p[i.id]={id:i.id,refs:1,parts:s}}}}function r(e){for(var t=[],n={},i=0;i<e.length;i++){var r=e[i],o=r[0],s=r[1],a=r[2],l=r[3],c={css:s,media:a,sourceMap:l};n[o]?n[o].parts.push(c):t.push(n[o]={id:o,parts:[c]})}return t}function o(e,t){var n=g(),i=x[x.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function c(e,t){var n,i,r;if(t.singleton){var o=b++;n=v||(v=a(t)),i=u.bind(null,n,o,!1),r=u.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),i=f.bind(null,n),r=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),i=d.bind(null,n),r=function(){s(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}function u(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function d(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,i=t.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}var p={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=m(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,b=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return i(n,t),function(e){for(var o=[],s=0;s<n.length;s++){var a=n[s],l=p[a.id];l.refs--,o.push(l)}if(e){var c=r(e);i(c,t)}for(var s=0;s<o.length;s++){var l=o[s];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete p[l.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var i=n(6);"string"==typeof i&&(i=[[e.id,i,""]]);n(4)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"html{padding-bottom:46px}.m,.s{background:#000;padding:.3rem;position:fixed;bottom:0;left:0;width:100%}.m textarea,.s textarea{border:0;padding:.625rem;width:90%;margin-right:.3rem}.m button,.s button{width:9%;background:#82e0ff;border:none;padding:.625rem}#messages{list-style-type:none;margin:1rem;padding:0}#messages li,#si li{padding:.3125rem .625rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#messages li:nth-child(odd) .chat,#si li:nth-child(odd) .chat{background-color:#eee}#messages li:nth-child(even) .chat,#si li:nth-child(even) .chat{background-color:#d4edf4}#messages li:nth-child(odd) .tan,#si li:nth-child(odd) .tan{border-right-color:#eee}#messages li:nth-child(even) .tan,#si li:nth-child(even) .tan{border-right-color:#d4edf4}.name{font-size:1.1rem;text-align:center;white-space:nowrap}li img{max-width:100%;min-width:71.03px}li .avatar{width:4.44rem;height:7.19rem;cursor:pointer;margin:0 50px 0 10px}li .chat{border-radius:.4rem;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.chat .content,.chat h1,.chat h2,.chat h3,.chat h4,.chat h5,.chat h6{padding:.9rem}.time{font-size:.9rem;font-weight:700;padding:.9rem .9rem .1rem}.chat p{padding:.9rem}.tan{border-top:.7rem solid transparent;border-right:1.8rem solid #fff;border-bottom:.2rem solid transparent}.users-in-out{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.whisper-color{background-color:#9e9e9e}",""])},function(e,t){"use strict";$(function(){layer.prompt({title:"请输入昵称",offset:["200px","400px"],skin:"layui-layer-lan"},function(e,t){layer.close(t);var n=e;$.trim(n).length>0&&!function(){$("#m").focus();var e=io();e.emit("user connection",n),$("button").click(function(){return $("#m").val().length>0&&(e.emit("chat message",$("#m").val()),$("#m").val("")),!1}),$("body").on("click","#messages .avatar",function(){var t=$(this).attr("data-id");e.emit("whisper-1",t)}),e.on("whisper-2",function(t){layer.confirm("有个叫  "+t.user.name+"  的人想和你私聊，是否同意？",{skin:"layui-layer-lan"},function(n){layer.close(n),e.emit("whisper-3",{to:t.to,from:t.from}),layer.open({type:1,area:["500px","600px"],title:"与  "+t.user.name+"  的私聊窗口",move:!1,skin:"layui-layer-lan",shift:2,content:'<ul id="si">\n                            <li class="users-in-out">你们的私聊已经开始</li>\n                            </ul>\n                            <form class="s"><input id="s" autocomplete="off" />\n                            <button>发送</button></form>',success:function(){$(".s button").click(function(){return $("#s").val().length>0&&(e.emit("whisper-5",{to:t.to,from:t.from,chatMsg:$("#s").val()}),$("#s").val("")),!1})},end:function(){e.emit("whisper-8",{to:t.to,from:t.from})}})})}),e.on("whisper-4",function(t){layer.open({type:1,area:["500px","600px"],title:"与  "+t.user.name+"  的私聊窗口",move:!1,skin:"layui-layer-lan",shift:2,content:'<ul id="si">\n                        <li class="users-in-out">你们的私聊已经开始</li>\n                        </ul><form class="s">\n                        <input id="s" autocomplete="off" />\n                        <button>发送</button></form>',success:function(){$(".s button").click(function(){return $("#s").val().length>0&&(e.emit("whisper-7",{to:t.to,from:t.from,chatMsg:$("#s").val()}),$("#s").val("")),!1})},end:function(){e.emit("whisper-10",{to:t.to,from:t.from})}})}),e.on("whisper-6",function(e){$("#si").append('<li>\n                    <div class="avatar" data-id="'+e.user.id+'">\n                    <img src="imgs/'+e.user.avatar+'.jpg" alt="头像" />\n                    <p class="name">'+e.user.name+'<p>\n                    </div>\n                    <div class="chat">\n                    <span class="tan"></span>\n                    <p>'+e.msg+"</p>\n                    </div>\n                    </li>"),$(".layui-layer-content").animate({scrollTop:$(document).height()},400)}),e.on("whisper-9",function(e){$("#si").append($('<li class="users-in-out">').text(e.user.name+" 已经退出了私聊")),$(".layui-layer-content").animate({scrollTop:$(document).height()},400)}),e.on("chat message",function(e){$("#messages").append('<li>\n                    <div class="avatar" data-id="'+e.user.id+'">\n                    <img src="imgs/'+e.user.avatar+'.jpg" alt="头像" />\n                    <p class="name">'+e.user.name+'<p>\n                    </div>\n                    <div class="chat">\n                    <p class="time">'+e.createdAt+"</p>"+e.msg+"\n                    </div>\n                    </li>"),$("html, body, #message").animate({scrollTop:$(document).height()},400)}),e.on("hi",function(e){$("#messages").append($('<li class="users-in-out">').text(e)),$("html, body, #message").animate({scrollTop:$(document).height()},400)})}()})})}]);