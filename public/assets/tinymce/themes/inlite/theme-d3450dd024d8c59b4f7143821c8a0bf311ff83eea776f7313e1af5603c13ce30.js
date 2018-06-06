!function(){var t={},n=function(n){for(var e=t[n],i=e.deps,o=e.defn,u=i.length,c=new Array(u),a=0;a<u;++a)c[a]=r(i[a]);var l=o.apply(null,c);if(void 0===l)throw"module ["+n+"] returned undefined";e.instance=l},e=function(n,e,r){if("string"!=typeof n)throw"module id must be a string";if(void 0===e)throw"no dependencies for "+n;if(void 0===r)throw"no definition function for "+n;t[n]={deps:e,defn:r,instance:void 0}},r=function(e){var r=t[e];if(void 0===r)throw"module ["+e+"] was undefined";return void 0===r.instance&&n(e),r.instance},i=function(t,n){for(var e=t.length,i=new Array(e),o=0;o<e;++o)i.push(r(t[o]));n.apply(null,n)};({}).bolt={module:{api:{define:e,require:i,demand:r}}};var o=e;(function(t,n){o(t,[],function(){return n})})("d",tinymce.util.Tools.resolve),o("1",["d"],function(t){return t("tinymce.ThemeManager")}),o("2",["d"],function(t){return t("tinymce.ui.Api")}),o("3",["d"],function(t){return t("tinymce.util.Delay")}),o("4",[],function(){var t=function(n){return n.reduce(function(n,e){return Array.isArray(e)?n.concat(t(e)):n.concat(e)},[])};return{flatten:t}}),o("e",[],function(){var t=function(t){return function(n){return typeof n===t}},n=function(t){return Array.isArray(t)},e=function(t){return null===t},r=function(t){return function(r){return!e(r)&&!n(r)&&t(r)}};return{isString:t("string"),isNumber:t("number"),isBoolean:t("boolean"),isFunction:t("function"),isObject:r(t("object")),isNull:e,isArray:n}}),o("5",["e"],function(t){var n=function(t,n){if(n(t))return!0;throw new Error("Default value doesn't match requested type.")},e=function(t){return function(e,r,i){var o=e.settings;return n(i,t),r in o&&t(o[r])?o[r]:i}},r=function(t,n){return t.split(n).filter(function(t){return t.length>0})},i=function(n,e){var i=function(t){return"string"==typeof t?r(t,/[ ,]/):t},o=function(t,n){return!1===t?[]:n};return t.isArray(n)?n:t.isString(n)?i(n):t.isBoolean(n)?o(n,e):e},o=function(t){return function(e,r,o){var u=r in e.settings?e.settings[r]:o;return n(o,t),i(u,o)}};return{getStringOr:e(t.isString),getBoolOr:e(t.isBoolean),getNumberOr:e(t.isNumber),getHandlerOr:e(t.isFunction),getToolbarItemsOr:o(t.isArray)}}),o("7",[],function(){return{match:function(t,n){for(var e=0;e<n.length;e++){var r=(0,n[e])(t);if(r)return r}return null},result:function(t,n){return{id:t,rect:n}}}}),o("i",["d"],function(t){return t("tinymce.dom.DOMUtils")}),o("q",[],function(){return{fromClientRect:function(t){return{x:t.left,y:t.top,w:t.width,h:t.height}},toClientRect:function(t){return{left:t.x,top:t.y,width:t.w,height:t.h,right:t.x+t.w,bottom:t.y+t.h}}}}),o("f",["i","q"],function(t,n){var e=function(n){var e=t.DOM.getViewPort();return{x:n.x+e.x,y:n.y+e.y,w:n.w,h:n.h}},r=function(t){var n=t.getBoundingClientRect();return e({x:n.left,y:n.top,w:Math.max(t.clientWidth,t.offsetWidth),h:Math.max(t.clientHeight,t.offsetHeight)})};return{getElementRect:function(t,n){return r(n)},getPageAreaRect:function(t){return r(t.getElement().ownerDocument.body)},getContentAreaRect:function(t){return r(t.getContentAreaContainer()||t.getBody())},getSelectionRect:function(t){var r=t.selection.getBoundingClientRect();return r?e(n.fromClientRect(r)):null}}}),o("6",["7","f"],function(t,n){return{element:function(e,r){return function(i){for(var o=0;o<r.length;o++)if(r[o].predicate(e))return t.result(r[o].id,n.getElementRect(i,e));return null}},parent:function(e,r){return function(i){for(var o=0;o<e.length;o++)for(var u=0;u<r.length;u++)if(r[u].predicate(e[o]))return t.result(r[u].id,n.getElementRect(i,e[o]));return null}}}}),o("g",["d"],function(t){return t("tinymce.util.Tools")}),o("8",["g"],function(t){var n=function(t,n){return{id:t,predicate:n}};return{create:n,fromContextToolbars:function(e){return t.map(e,function(t){return n(t.id,t.predicate)})}}}),o("9",["7","f"],function(t,n){return{textSelection:function(e){return function(r){return r.selection.isCollapsed()?null:t.result(e,n.getSelectionRect(r))}},emptyTextBlock:function(e,r){return function(i){var o,u=i.schema.getTextBlockElements();for(o=0;o<e.length;o++)if("TABLE"===e[o].nodeName)return null;for(o=0;o<e.length;o++)if(e[o].nodeName in u)return i.dom.isEmpty(e[o])?t.result(r,n.getSelectionRect(i)):null;return null}}}}),o("h",["d"],function(t){return t("tinymce.EditorManager")}),o("a",["h","i"],function(t,n){var e=function(t,n){var e=function(){t._skinLoaded=!0,t.fire("SkinLoaded"),n()};t.initialized?e():t.on("init",e)},r=function(n){var e=t.baseURL+"/skins/";return n?e+n:e+"lightgray"},i=function(t,n){return t.documentBaseURI.toAbsolute(n)};return{load:function(t,o){var u=t.settings,c=u.skin_url?i(t,u.skin_url):r(u.skin),a=function(){e(t,o)};n.DOM.styleSheetLoader.load(c+"/skin.min.css",a),t.contentCSS.push(c+"/content.inline.min.css")}}}),o("j",["d"],function(t){return t("tinymce.ui.Factory")}),o("k",["g","j","e"],function(t,n,e){var r=function(t,n){var e=function(t,n){return{selector:t,handler:n}},r=function(t){n.active(t)},i=function(t){n.disabled(t)};return n.settings.stateSelector?e(n.settings.stateSelector,r):n.settings.disabledStateSelector?e(n.settings.disabledStateSelector,i):null},i=function(t,n,e){return function(){var i=r(n,e);null!==i&&t.selection.selectorChanged(i.selector,i.handler)}},o=function(t){return e.isArray(t)?t:e.isString(t)?t.split(/[ ,]/):[]};return{create:function(e,r,u){var c,a=[];if(u)return t.each(o(u),function(t){var r;"|"==t?c=null:e.buttons[t]&&(c||(c={type:"buttongroup",items:[]},a.push(c)),r=t,"function"==typeof(t=e.buttons[r])&&(t=t()),t.type=t.type||"button",(t=n.create(t)).on("postRender",i(e,r,t)),c.items.push(t))}),n.create({type:"toolbar",layout:"flow",name:r,items:a})}}}),o("r",["d"],function(t){return t("tinymce.util.Promise")}),o("s",[],function(){var t=0,n=function(){var t=function(){return Math.round(4294967295*Math.random()).toString(36)};return"s"+Date.now().toString(36)+t()+t()+t()};return{uuid:function(e){return e+t+++n()}}}),o("w",[],function(){return{create:function(t,n){function e(e){var i,o,u;o=n[e?"startContainer":"endContainer"],u=n[e?"startOffset":"endOffset"],1==o.nodeType&&(i=t.create("span",{"data-mce-type":"bookmark"}),o.hasChildNodes()?(u=Math.min(u,o.childNodes.length-1),e?o.insertBefore(i,o.childNodes[u]):t.insertAfter(i,o.childNodes[u])):o.appendChild(i),o=i,u=0),r[e?"startContainer":"endContainer"]=o,r[e?"startOffset":"endOffset"]=u}var r={};return e(!0),n.collapsed||e(),r},resolve:function(t,n){function e(e){function r(t){for(var n=t.parentNode.firstChild,e=0;n;){if(n==t)return e;1==n.nodeType&&"bookmark"==n.getAttribute("data-mce-type")||e++,n=n.nextSibling}return-1}var i,o,u;i=u=n[e?"startContainer":"endContainer"],o=n[e?"startOffset":"endOffset"],i&&(1==i.nodeType&&(o=r(i),i=i.parentNode,t.remove(u)),n[e?"startContainer":"endContainer"]=i,n[e?"startOffset":"endOffset"]=o)}e(!0),e();var r=t.createRng();return r.setStart(n.startContainer,n.startOffset),n.endContainer&&r.setEnd(n.endContainer,n.endOffset),r}}}),o("x",["d"],function(t){return t("tinymce.dom.TreeWalker")}),o("y",["d"],function(t){return t("tinymce.dom.RangeUtils")}),o("t",["w","g","x","y"],function(t,n,e,r){var i=function(t,n,r){var i,o,u=[];for(i=new e(n,t),o=n;o&&(1===o.nodeType&&u.push(o),o!==r);o=i.next());return u},o=function(e,r){var i,o,u;o=e.dom,u=e.selection,i=t.create(o,u.getRng()),n.each(r,function(t){e.dom.remove(t,!0)}),u.setRng(t.resolve(o,i))},u=function(t){return"A"===t.nodeName&&t.hasAttribute("href")},c=function(t,n){var e=t.getParent(n,u);return e||n},a=function(t){var e,o,a,l,f,s;return l=t.selection,f=t.dom,s=l.getRng(),e=c(f,r.getNode(s.startContainer,s.startOffset)),o=r.getNode(s.endContainer,s.endOffset),a=t.getBody(),n.grep(i(a,e,o),u)};return{unlinkSelection:function(t){o(t,a(t))}}}),o("p",["s","t"],function(t,n){var e=function(t,n){var e,r,i;for(i='<table data-mce-id="mce" style="width: 100%">',i+="<tbody>",r=0;r<n;r++){for(i+="<tr>",e=0;e<t;e++)i+="<td><br></td>";i+="</tr>"}return(i+="</tbody>")+"</table>"},r=function(t){return t.dom.select("*[data-mce-id]")[0]},i=function(t,n,i){t.undoManager.transact(function(){var o,u;t.insertContent(e(n,i)),(o=r(t)).removeAttribute("data-mce-id"),u=t.dom.select("td,th",o),t.selection.setCursorLocation(u[0],0)})},o=function(n,e,r){var i,o;o=(i=n.editorUpload.blobCache).create(t.uuid("mceu"),r,e),i.add(o),n.insertContent(n.dom.createHTML("img",{src:o.blobUri()}))},u=function(t){t.selection.collapse(!1)},c=function(t){t.focus(),n.unlinkSelection(t),u(t)},a=function(t,n,e){t.focus(),t.dom.setAttrib(n,"href",e),u(t)},l=function(t,n){t.execCommand("mceInsertLink",!1,{href:n}),u(t)},f=function(t,n){var e=t.dom.getParent(t.selection.getStart(),"a[href]");e?a(t,e,n):l(t,n)};return{insertTable:i,formatBlock:function(t,n){t.execCommand("FormatBlock",!1,n)},insertBlob:o,createLink:function(t,n){0===n.trim().length?c(t):f(t,n)},unlink:c}}),o("u",[],function(){return{isDomainLike:function(t){return/^www\.|\.(com|org|edu|gov|uk|net|ca|de|jp|fr|au|us|ru|ch|it|nl|se|no|es|mil)$/i.test(t.trim())},isAbsolute:function(t){return/^https?:\/\//.test(t.trim())}}}),o("l",["g","j","r","p","u"],function(t,n,e,r,i){var o=function(t){t.find("textbox").eq(0).each(function(t){t.focus()})},u=function(e,r){var i=n.create(t.extend({type:"form",layout:"flex",direction:"row",padding:5,name:e,spacing:3},r));return i.on("show",function(){o(i)}),i},c=function(t,n){return n?t.show():t.hide()},a=function(t,n){return new e(function(e){t.windowManager.confirm("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(t){e(!0===t?"http://"+n:n)})})},l=function(t,n){return!i.isAbsolute(n)&&i.isDomainLike(n)?a(t,n):e.resolve(n)};return{createQuickLinkForm:function(t,n){var e={};return u("quicklink",{items:[{type:"button",name:"unlink",icon:"unlink",onclick:function(){t.focus(),r.unlink(t),n()},tooltip:"Remove link"},{type:"filepicker",name:"linkurl",placeholder:"Paste or type a link",filetype:"file",onchange:function(t){var n=t.meta;n&&n.attach&&(e={href:this.value(),attach:n.attach})}},{type:"button",icon:"checkmark",subtype:"primary",tooltip:"Ok",onclick:"submit"}],onshow:function(n){if(n.control===this){var e,r="";(e=t.dom.getParent(t.selection.getStart(),"a[href]"))&&(r=t.dom.getAttrib(e,"href")),this.fromJSON({linkurl:r}),c(this.find("#unlink"),e),this.find("#linkurl")[0].focus()}},onsubmit:function(i){l(t,i.data.linkurl).then(function(i){t.undoManager.transact(function(){i===e.href&&(e.attach(),e={}),r.createLink(t,i)}),n()})}})}}}),o("v",["d"],function(t){return t("tinymce.geom.Rect")}),o("m",["v","q"],function(t,n){var e=function(t,n){return{rect:t,position:n}},r=function(t,n){return{x:n.x,y:n.y,w:t.w,h:t.h}},i=function(n,i,o,u,c){var a,l,f,s={x:u.x,y:u.y,w:u.w+(u.w<c.w+o.w?c.w:0),h:u.h+(u.h<c.h+o.h?c.h:0)};return a=t.findBestRelativePosition(c,o,s,n),o=t.clamp(o,s),a?(l=t.relativePosition(c,o,a),f=r(c,l),e(f,a)):(o=t.intersect(s,o))?(a=t.findBestRelativePosition(c,o,s,i))?(l=t.relativePosition(c,o,a),f=r(c,l),e(f,a)):(f=r(c,o),e(f,a)):null};return{calcInsert:function(t,n,e){return i(["cr-cl","cl-cr"],["bc-tc","bl-tl","br-tr"],t,n,e)},calc:function(t,n,e){return i(["tc-bc","bc-tc","tl-bl","bl-tl","tr-br","br-tr","cr-cl","cl-cr"],["bc-tc","bl-tl","br-tr","cr-cl"],t,n,e)},userConstrain:function(t,e,r,i){var o;return"function"==typeof t?(o=t({elementRect:n.toClientRect(e),contentAreaRect:n.toClientRect(r),panelRect:n.toClientRect(i)}),n.fromClientRect(o)):i},defaultHandler:function(t){return t.panelRect}}}),o("c",["g","j","i","k","l","f","m","5"],function(t,n,e,r,i,o,u,c){return function(){var a,l,f=["bold","italic","|","quicklink","h2","h3","blockquote"],s=["quickimage","quicktable"],d=function(n,e){return t.map(e,function(t){return r.create(n,t.id,t.items)})},m=function(t){return c.getToolbarItemsOr(t,"selection_toolbar",f)},h=function(t){return c.getToolbarItemsOr(t,"insert_toolbar",s)},g=function(t){return t.items().length>0},p=function(e,o){var u=d(e,o).concat([r.create(e,"text",m(e)),r.create(e,"insert",h(e)),i.createQuickLinkForm(e,S)]);return n.create({type:"floatpanel",role:"dialog",classes:"tinymce tinymce-inline arrow",ariaLabel:"Inline toolbar",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!0,border:1,items:t.grep(u,g),oncancel:function(){e.focus()}})},v=function(t){t&&t.show()},b=function(t,n){t.moveTo(n.x,n.y)},y=function(n,e){e=e?e.substr(0,2):"",t.each({t:"down",b:"up",c:"center"},function(t,r){n.classes.toggle("arrow-"+t,r===e.substr(0,1))}),"cr"===e?(n.classes.toggle("arrow-left",!0),n.classes.toggle("arrow-right",!1)):"cl"===e?(n.classes.toggle("arrow-left",!0),n.classes.toggle("arrow-right",!0)):t.each({l:"left",r:"right"},function(t,r){n.classes.toggle("arrow-"+t,r===e.substr(1,1))})},k=function(t,n){var e=t.items().filter("#"+n);return e.length>0&&(e[0].show(),t.reflow(),!0)},w=function(t,n,r,i){var a,f,s,d;return d=c.getHandlerOr(r,"inline_toolbar_position_handler",u.defaultHandler),a=o.getContentAreaRect(r),f=e.DOM.getRect(t.getEl()),!!(s="insert"===n?u.calcInsert(i,a,f):u.calc(i,a,f))&&(f=s.rect,l=i,b(t,u.userConstrain(d,i,a,f)),y(t,s.position),!0)},C=function(t,n,e,r){return v(t),t.items().hide(),k(t,n)?void(!1===w(t,n,e,r)&&S(t)):void S(t)},R=function(){return a.items().filter("form:visible").length>0},x=function(t,n){if(a){if(a.items().hide(),!k(a,n))return void S(a);var r,i,f,s;v(a),a.items().hide(),k(a,n),s=c.getHandlerOr(t,"inline_toolbar_position_handler",u.defaultHandler),r=o.getContentAreaRect(t),i=e.DOM.getRect(a.getEl()),(f=u.calc(l,r,i))&&(i=f.rect,b(a,u.userConstrain(s,l,r,i)),y(a,f.position))}},S=function(){a&&a.hide()};return{show:function(t,n,e,r){a||((a=p(t,r)).renderTo(document.body).reflow().moveTo(e.x,e.y),t.nodeChanged()),C(a,n,t,e)},showForm:x,reposition:function(t,n,e){a&&w(a,n,t,e)},inForm:function(){return a&&a.visible()&&R()},hide:S,focus:function(){a&&a.find("toolbar:visible").eq(0).each(function(t){t.focus(!0)})},remove:function(){a&&(a.remove(),a=null)}}}}),o("n",["r"],function(t){return{blobToBase64:function(n){return new t(function(t){var e=new FileReader;e.onloadend=function(){t(e.result.split(",")[1])},e.readAsDataURL(n)})}}}),o("o",["r"],function(t){return{pickFile:function(){return new t(function(t){var n;(n=document.createElement("input")).type="file",n.style.position="fixed",n.style.left=0,n.style.top=0,n.style.opacity=.001,document.body.appendChild(n),n.onchange=function(n){t(Array.prototype.slice.call(n.target.files))},n.click(),n.parentNode.removeChild(n)})}}}),o("b",["c","n","o","p"],function(t,n,e,r){var i=function(t){for(var n=function(n){return function(){r.formatBlock(t,n)}},e=1;e<6;e++){var i="h"+e;t.addButton(i,{text:i.toUpperCase(),tooltip:"Heading "+e,stateSelector:i,onclick:n(i),onPostRender:function(){this.getEl().firstChild.firstChild.style.fontWeight="bold"}})}};return{addToEditor:function(t,o){t.addButton("quicklink",{icon:"link",tooltip:"Insert/Edit link",stateSelector:"a[href]",onclick:function(){o.showForm(t,"quicklink")}}),t.addButton("quickimage",{icon:"image",tooltip:"Insert image",onclick:function(){e.pickFile().then(function(e){var i=e[0];n.blobToBase64(i).then(function(n){r.insertBlob(t,n,i)})})}}),t.addButton("quicktable",{icon:"table",tooltip:"Insert table",onclick:function(){o.hide(),r.insertTable(t,2,2)}}),i(t)}}}),o("0",["1","2","3","4","5","6","7","8","9","a","b","c"],function(t,n,e,r,i,o,u,c,a,l,f,s){var d=function(t){var n=t.selection.getNode();return t.dom.getParents(n)},m=function(t,n,e,r){return{predicate:function(e){return t.dom.is(e,n)},id:e,items:r}},h=function(t){var n=t.contextToolbars;return r.flatten([n||[],m(t,"img","image","alignleft aligncenter alignright")])},g=function(t,n){var e,r,i;return r=d(t),i=c.fromContextToolbars(n),(e=u.match(t,[o.element(r[0],i),a.textSelection("text"),a.emptyTextBlock(r,"insert"),o.parent(r,i)]))&&e.rect?e:null},p=function(t,n){var e=function(){var e=h(t),r=g(t,e);r?n.show(t,r.id,r.rect,e):n.hide()};return function(){t.removed||e()}},v=function(t,n){return function(){var e=h(t),r=g(t,e);r&&n.reposition(t,r.id,r.rect)}},b=function(t,n,e){return function(){t.removed||n.inForm()||e()}},y=function(t,n){var r=e.throttle(p(t,n),0),i=e.throttle(b(t,n,p(t,n)),0);t.on("blur hide ObjectResizeStart",n.hide),t.on("click",r),t.on("nodeChange mouseup",i),t.on("ResizeEditor keyup",r),t.on("ResizeWindow",v(t,n)),t.on("remove",n.remove),t.shortcuts.add("Alt+F10","",n.focus)},k=function(t,n){t.shortcuts.remove("meta+k"),t.shortcuts.add("meta+k","",function(){var e=h(t),r=r=u.match(t,[a.textSelection("quicklink")]);r&&n.show(t,r.id,r.rect,e)})},w=function(t,n){return l.load(t,function(){y(t,n),k(t,n)}),{}},C=function(t){throw new Error(t)};return t.add("inlite",function(t){var n=new s;return f.addToEditor(t,n),{renderUI:function(){return t.inline?w(t,n):C("inlite theme only supports inline mode.")}}}),n.appendTo(window.tinymce?window.tinymce:{}),function(){}}),r("0")()}();