!function(){var n={},e=function(e){for(var t=n[e],o=t.deps,r=t.defn,u=o.length,f=new Array(u),d=0;d<u;++d)f[d]=i(o[d]);var a=r.apply(null,f);if(void 0===a)throw"module ["+e+"] returned undefined";t.instance=a},t=function(e,t,i){if("string"!=typeof e)throw"module id must be a string";if(void 0===t)throw"no dependencies for "+e;if(void 0===i)throw"no definition function for "+e;n[e]={deps:t,defn:i,instance:void 0}},i=function(t){var i=n[t];if(void 0===i)throw"module ["+t+"] was undefined";return void 0===i.instance&&e(t),i.instance},o=function(n,e){for(var t=n.length,o=new Array(t),r=0;r<t;++r)o.push(i(n[r]));e.apply(null,e)};({}).bolt={module:{api:{define:t,require:o,demand:i}}};var r=t;(function(n,e){r(n,[],function(){return e})})("7",tinymce.util.Tools.resolve),r("1",["7"],function(n){return n("tinymce.PluginManager")}),r("2",["7"],function(n){return n("tinymce.dom.DOMUtils")}),r("3",["7"],function(n){return n("tinymce.util.Tools")}),r("4",["7"],function(n){return n("tinymce.EditorManager")}),r("5",["7"],function(n){return n("tinymce.util.Delay")}),r("6",["7"],function(n){return n("tinymce.Env")}),r("0",["1","2","3","4","5","6"],function(n,e,t,i,o,r){return n.add("tabfocus",function(n){function u(n){9!==n.keyCode||n.ctrlKey||n.altKey||n.metaKey||n.preventDefault()}function f(e){function u(o){function r(n){return"BODY"===n.nodeName||"hidden"!=n.type&&"none"!=n.style.display&&"hidden"!=n.style.visibility&&r(n.parentNode)}function u(n){return/INPUT|TEXTAREA|BUTTON/.test(n.tagName)&&i.get(e.id)&&-1!=n.tabIndex&&r(n)}if(a=d.select(":input:enabled,*[tabindex]:not(iframe)"),t.each(a,function(e,t){if(e.id==n.id)return f=t,!1}),o>0){for(l=f+1;l<a.length;l++)if(u(a[l]))return a[l]}else for(l=f-1;l>=0;l--)if(u(a[l]))return a[l];return null}var f,a,c,l;if(!(9!==e.keyCode||e.ctrlKey||e.altKey||e.metaKey||e.isDefaultPrevented())&&(1==(c=t.explode(n.getParam("tab_focus",n.getParam("tabfocus_elements",":prev,:next")))).length&&(c[1]=c[0],c[0]=":prev"),a=e.shiftKey?":prev"==c[0]?u(-1):d.get(c[0]):":next"==c[1]?u(1):d.get(c[1]))){var s=i.get(a.id||a.name);a.id&&s?s.focus():o.setTimeout(function(){r.webkit||window.focus(),a.focus()},10),e.preventDefault()}}var d=e.DOM;n.on("init",function(){n.inline&&d.setAttrib(n.getBody(),"tabIndex",null),n.on("keyup",u),r.gecko?n.on("keypress keydown",f):n.on("keydown",f)})}),function(){}}),i("0")()}();