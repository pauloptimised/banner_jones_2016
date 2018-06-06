!function(){var n={},r=function(r){for(var t=n[r],o=t.deps,u=t.defn,i=o.length,a=new Array(i),c=0;c<i;++c)a[c]=e(o[c]);var f=u.apply(null,a);if(void 0===f)throw"module ["+r+"] returned undefined";t.instance=f},t=function(r,t,e){if("string"!=typeof r)throw"module id must be a string";if(void 0===t)throw"no dependencies for "+r;if(void 0===e)throw"no definition function for "+r;n[r]={deps:t,defn:e,instance:void 0}},e=function(t){var e=n[t];if(void 0===e)throw"module ["+t+"] was undefined";return void 0===e.instance&&r(t),e.instance},o=function(n,r){for(var t=n.length,o=new Array(t),u=0;u<t;++u)o.push(e(n[u]));r.apply(null,r)};({}).bolt={module:{api:{define:t,require:o,demand:e}}};var u=t,i=function(n,r){u(n,[],function(){return r})};i("6",tinymce.util.Tools.resolve),u("1",["6"],function(n){return n("tinymce.PluginManager")}),u("2",["6"],function(n){return n("tinymce.util.Delay")}),i("8",Array),i("9",Error),u("b",["8","9"],function(n,r){var t=function(n){return function(){return n}},e=function(r){for(var t=new n(arguments.length-1),e=1;e<arguments.length;e++)t[e-1]=arguments[e];return function(){for(var e=new n(arguments.length),o=0;o<e.length;o++)e[o]=arguments[o];var u=t.concat(e);return r.apply(null,u)}};return{noop:function(){},compose:function(n,r){return function(){return n(r.apply(null,arguments))}},constant:t,identity:function(n){return n},tripleEquals:function(n,r){return n===r},curry:e,not:function(n){return function(){return!n.apply(null,arguments)}},die:function(n){return function(){throw new r(n)}},apply:function(n){return n()},call:function(n){n()},never:t(!1),always:t(!0)}}),i("h",Object),u("7",["b","h"],function(n,r){var t=n.never,e=n.always,o=function(){return u},u=function(){var u=function(n){return n.isNone()},i=function(n){return n()},a=function(n){return n},c={fold:function(n){return n()},is:t,isSome:t,isNone:e,getOr:a,getOrThunk:i,getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},or:a,orThunk:i,map:o,ap:o,each:function(){},bind:o,flatten:o,exists:t,forall:e,filter:o,equals:u,equals_:u,toArray:function(){return[]},toString:n.constant("none()")};return r.freeze&&r.freeze(c),c}(),i=function(n){var r=function(){return n},a=function(){return f},c=function(r){return r(n)},f={fold:function(r,t){return t(n)},is:function(r){return n===r},isSome:e,isNone:t,getOr:r,getOrThunk:r,getOrDie:r,or:a,orThunk:a,map:function(r){return i(r(n))},ap:function(r){return r.fold(o,function(r){return i(r(n))})},each:function(r){r(n)},bind:c,flatten:r,exists:c,forall:c,filter:function(r){return r(n)?f:u},equals:function(r){return r.is(n)},equals_:function(r,e){return r.fold(t,function(r){return e(n,r)})},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return f};return{some:i,none:o,from:function(n){return null==n?u:i(n)}}}),i("a",String),u("3",["7","8","9","a"],function(n,r,t,e){var o=function(){var n=r.prototype.indexOf;return void 0===n?function(n,r){return y(n,r)}:function(r,t){return n.call(r,t)}}(),u=function(r,t){var e=o(r,t);return-1===e?n.none():n.some(e)},i=function(n,r){return o(n,r)>-1},a=function(n,r){return E(n,r).isSome()},c=function(n,r){for(var t=[],e=0;e<n;e++)t.push(r(e));return t},f=function(n,r){for(var t=[],e=0;e<n.length;e+=r){var o=n.slice(e,e+r);t.push(o)}return t},l=function(n,t){for(var e=n.length,o=new r(e),u=0;u<e;u++){var i=n[u];o[u]=t(i,u,n)}return o},s=function(n,r){for(var t=0,e=n.length;t<e;t++){r(n[t],t,n)}},d=function(n,r){for(var t=n.length-1;t>=0;t--){r(n[t],t,n)}},h=function(n,r){for(var t=[],e=[],o=0,u=n.length;o<u;o++){var i=n[o];(r(i,o,n)?t:e).push(i)}return{pass:t,fail:e}},v=function(n,r){for(var t=[],e=0,o=n.length;e<o;e++){var u=n[e];r(u,e,n)&&t.push(u)}return t},p=function(n,r){if(0===n.length)return[];for(var t=r(n[0]),e=[],o=[],u=0,i=n.length;u<i;u++){var a=n[u],c=r(a);c!==t&&(e.push(o),o=[]),t=c,o.push(a)}return 0!==o.length&&e.push(o),e},m=function(n,r,t){return d(n,function(n){t=r(t,n)}),t},g=function(n,r,t){return s(n,function(n){t=r(t,n)}),t},T=function(r,t){for(var e=0,o=r.length;e<o;e++){var u=r[e];if(t(u,e,r))return n.some(u)}return n.none()},E=function(r,t){for(var e=0,o=r.length;e<o;e++){if(t(r[e],e,r))return n.some(e)}return n.none()},y=function(n,r){for(var t=0,e=n.length;t<e;++t)if(n[t]===r)return t;return-1},w=r.prototype.push,N=function(n){for(var e=[],o=0,u=n.length;o<u;++o){if(!r.prototype.isPrototypeOf(n[o]))throw new t("Arr.flatten item "+o+" was not an array, input: "+n);w.apply(e,n[o])}return e},C=function(n,r){var t=l(n,r);return N(t)},O=function(n,r){for(var t=0,e=n.length;t<e;++t){if(!0!==r(n[t],t,n))return!1}return!0},M=function(n,r){return n.length===r.length&&O(n,function(n,t){return n===r[t]})},b=r.prototype.slice;return{map:l,each:s,eachr:d,partition:h,filter:v,groupBy:p,indexOf:u,foldr:m,foldl:g,find:T,findIndex:E,flatten:N,bind:C,forall:O,exists:a,contains:i,equal:M,reverse:function(n){var r=b.call(n,0);return r.reverse(),r},chunk:f,difference:function(n,r){return v(n,function(n){return!i(r,n)})},mapToObject:function(n,r){for(var t={},o=0,u=n.length;o<u;o++){var i=n[o];t[e(i)]=r(i,o)}return t},pure:function(n){return[n]},sort:function(n,r){var t=b.call(n,0);return t.sort(r),t},range:c}}),u("c",[],function(){return"undefined"==typeof console&&(console={log:function(){}}),console}),i("d",document),u("4",["b","9","c","d"],function(n,r,t,e){var o=function(n,r){var o=(r||e).createElement("div");if(o.innerHTML=n,!o.hasChildNodes()||o.childNodes.length>1)throw t.error("HTML does not have a single root node",n),"HTML must have a single root node";return a(o.childNodes[0])},u=function(n,r){var t=(r||e).createElement(n);return a(t)},i=function(n,r){var t=(r||e).createTextNode(n);return a(t)},a=function(t){if(null==t)throw new r("Node cannot be null or undefined");return{dom:n.constant(t)}};return{fromHtml:o,fromTag:u,fromText:i,fromDom:a}}),u("e",[],function(){var n={"\xa0":"nbsp","\xad":"shy"},r=function(n,r){var t,e="";for(t in n)e+=t;return new RegExp("["+e+"]",r?"g":"")},t=function(n){var r,t="";for(r in n)t&&(t+=","),t+="span.mce-"+n[r];return t};return{charMap:n,regExp:r(n),regExpGlobal:r(n,!0),selector:t(n),charMapToRegExp:r,charMapToSelector:t}}),u("i",[],function(){return{ATTRIBUTE:2,CDATA_SECTION:4,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,ELEMENT:1,TEXT:3,PROCESSING_INSTRUCTION:7,ENTITY_REFERENCE:5,ENTITY:6,NOTATION:12}}),u("g",["i"],function(n){var r=function(n){return n.dom().nodeName.toLowerCase()},t=function(n){return n.dom().nodeType},e=function(n){return n.dom().nodeValue},o=function(n){return function(r){return t(r)===n}},u=function(e){return t(e)===n.COMMENT||"#comment"===r(e)},i=o(n.ELEMENT),a=o(n.TEXT),c=o(n.DOCUMENT);return{name:r,type:t,value:e,isElement:i,isText:a,isDocument:c,isComment:u}}),u("j",["e"],function(n){return{wrapCharWithSpan:function(r){return'<span data-mce-bogus="1" class="mce-'+n.charMap[r]+'">'+r+"</span>"}}}),u("f",["3","4","g","e","j"],function(n,r,t,e,o){var u=function(t,e){var o=[],i=t.dom(),a=n.map(i.childNodes,r.fromDom);return n.each(a,function(n){e(n)&&(o=o.concat([n])),o=o.concat(u(n,e))}),o};return{isMatch:function(n){return t.isText(n)&&void 0!==t.value(n)&&e.regExp.test(t.value(n))},filterDescendants:u,findParentElm:function(n,r){for(;n.parentNode;){if(n.parentNode===r)return n;n=n.parentNode}},replaceWithSpans:function(n){return n.replace(e.regExpGlobal,o.wrapCharWithSpan)}}}),u("5",["e","f","3","4","g"],function(n,r,t,e,o){var u=function(n,u){var i,a,c=r.filterDescendants(e.fromDom(u),r.isMatch);t.each(c,function(t){var e=r.replaceWithSpans(o.value(t));for(a=n.dom.create("div",null,e);i=a.lastChild;)n.dom.insertAfter(i,t.dom());n.dom.remove(t.dom())})},i=function(r,e){var o=r.dom.select(n.selector,e);t.each(o,function(n){r.dom.remove(n,1)})};return{show:u,hide:i,toggle:function(n){var t=n.getBody(),e=n.selection.getBookmark(),o=r.findParentElm(n.selection.getNode(),t);i(n,o=void 0!==o?o:t),u(n,o),n.selection.moveToBookmark(e)}}}),u("0",["1","2","3","4","5"],function(n,r,t,e,o){return n.add("visualchars",function(n){var t,e=this,u=function(){var r=this;n.on("VisualChars",function(n){r.active(n.state)})},i=r.debounce(function(){o.toggle(n)},300);!1!==n.settings.forced_root_block&&n.on("keydown",function(r){!0===e.state&&(13===r.keyCode?o.toggle(n):i())}),n.addCommand("mceVisualChars",function(){var r,u=n.getBody(),i=n.selection;t=!t,e.state=t,n.fire("VisualChars",{state:t}),r=i.getBookmark(),!0===t?o.show(n,u):o.hide(n,u),i.moveToBookmark(r)}),n.addButton("visualchars",{title:"Show invisible characters",cmd:"mceVisualChars",onPostRender:u}),n.addMenuItem("visualchars",{text:"Show invisible characters",cmd:"mceVisualChars",onPostRender:u,selectable:!0,context:"view",prependToContext:!0})}),function(){}}),e("0")()}();