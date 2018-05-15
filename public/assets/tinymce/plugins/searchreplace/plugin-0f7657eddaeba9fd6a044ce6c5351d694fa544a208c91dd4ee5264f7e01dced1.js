!function(){var e={},n=function(n){for(var t=e[n],a=t.deps,i=t.defn,o=a.length,d=new Array(o),l=0;l<o;++l)d[l]=r(a[l]);var c=i.apply(null,d);if(void 0===c)throw"module ["+n+"] returned undefined";t.instance=c},t=function(n,t,r){if("string"!=typeof n)throw"module id must be a string";if(void 0===t)throw"no dependencies for "+n;if(void 0===r)throw"no definition function for "+n;e[n]={deps:t,defn:r,instance:void 0}},r=function(t){var r=e[t];if(void 0===r)throw"module ["+t+"] was undefined";return void 0===r.instance&&n(t),r.instance},a=function(e,n){for(var t=e.length,a=new Array(t),i=0;i<t;++i)a.push(r(e[i]));n.apply(null,n)};({}).bolt={module:{api:{define:t,require:a,demand:r}}};var i=t;(function(e,n){i(e,[],function(){return n})})("4",tinymce.util.Tools.resolve),i("1",["4"],function(e){return e("tinymce.PluginManager")}),i("2",["4"],function(e){return e("tinymce.util.Tools")}),i("3",[],function(){function e(e){return e&&1==e.nodeType&&"false"===e.contentEditable}function n(n,t,r,a,i){function o(e,n){if(n=n||0,!e[0])throw"findAndReplaceDOMText cannot handle zero-length matches";var t=e.index;if(n>0){var r=e[n];if(!r)throw"Invalid capture group";t+=e[0].indexOf(r),e[0]=r}return[t,t+e[0].length,[e[0]]]}function d(n){var t;if(3===n.nodeType)return n.data;if(h[n.nodeName]&&!p[n.nodeName])return"";if(t="",e(n))return"\n";if((p[n.nodeName]||m[n.nodeName])&&(t+="\n"),n=n.firstChild)do{t+=d(n)}while(n=n.nextSibling);return t}function l(n,t,r){var a,i,o,d,l=[],c=0,s=n,f=t.shift(),u=0;e:for(;;){if((p[s.nodeName]||m[s.nodeName]||e(s))&&c++,3===s.nodeType&&(!i&&s.length+c>=f[1]?(i=s,d=f[1]-c):a&&l.push(s),!a&&s.length+c>f[0]&&(a=s,o=f[0]-c),c+=s.length),a&&i){if(s=r({startNode:a,startNodeIndex:o,endNode:i,endNodeIndex:d,innerNodes:l,match:f[2],matchIndex:u}),c-=i.length-d,a=null,i=null,l=[],u++,!(f=t.shift()))break}else if(h[s.nodeName]&&!p[s.nodeName]||!s.firstChild){if(s.nextSibling){s=s.nextSibling;continue}}else if(!e(s)){s=s.firstChild;continue}for(;;){if(s.nextSibling){s=s.nextSibling;break}if(s.parentNode===n)break e;s=s.parentNode}}}function c(e){var n;if("function"!=typeof e){var t=e.nodeType?e:u.createElement(e);n=function(e,n){var r=t.cloneNode(!1);return r.setAttribute("data-mce-index",n),e&&r.appendChild(u.createTextNode(e)),r}}else n=e;return function(e){var t,r,a,i=e.startNode,o=e.endNode,d=e.matchIndex;if(i===o){var l=i;a=l.parentNode,e.startNodeIndex>0&&(t=u.createTextNode(l.data.substring(0,e.startNodeIndex)),a.insertBefore(t,l));var c=n(e.match[0],d);return a.insertBefore(c,l),e.endNodeIndex<l.length&&(r=u.createTextNode(l.data.substring(e.endNodeIndex)),a.insertBefore(r,l)),l.parentNode.removeChild(l),c}t=u.createTextNode(i.data.substring(0,e.startNodeIndex)),r=u.createTextNode(o.data.substring(e.endNodeIndex));for(var s=n(i.data.substring(e.startNodeIndex),d),f=[],p=0,h=e.innerNodes.length;p<h;++p){var m=e.innerNodes[p],g=n(m.data,d);m.parentNode.replaceChild(g,m),f.push(g)}var v=n(o.data.substring(0,e.endNodeIndex),d);return(a=i.parentNode).insertBefore(t,i),a.insertBefore(s,i),a.removeChild(i),(a=o.parentNode).insertBefore(v,o),a.insertBefore(r,o),a.removeChild(o),v}}var s,f,u,p,h,m,g=[],v=0;if(u=t.ownerDocument,p=i.getBlockElements(),h=i.getWhiteSpaceElements(),m=i.getShortEndedElements(),f=d(t)){if(n.global)for(;s=n.exec(f);)g.push(o(s,a));else s=f.match(n),g.push(o(s,a));return g.length&&(v=g.length,l(t,g,c(r))),v}}return{findAndReplaceDOMText:n}}),i("0",["1","2","3"],function(e,n,t){function r(e){function r(){function t(){o.statusbar.find("#next").disabled(!d(u+1).length),o.statusbar.find("#prev").disabled(!d(u-1).length)}function r(){e.windowManager.alert("Could not find the specified string.",function(){o.find("#find")[0].focus()})}var a,i={};a=n.trim(e.selection.getContent({format:"text"}));var o=e.windowManager.open({layout:"flex",pack:"center",align:"center",onClose:function(){e.focus(),f.done()},onSubmit:function(e){var n,a,l,c;return e.preventDefault(),a=o.find("#case").checked(),c=o.find("#words").checked(),(l=o.find("#find").value()).length?i.text==l&&i.caseState==a&&i.wholeWord==c?0===d(u+1).length?void r():(f.next(),void t()):((n=f.find(l,a,c))||r(),o.statusbar.items().slice(1).disabled(0===n),t(),void(i={text:l,caseState:a,wholeWord:c})):(f.done(!1),void o.statusbar.items().slice(1).disabled(!0))},buttons:[{text:"Find",subtype:"primary",onclick:function(){o.submit()}},{text:"Replace",disabled:!0,onclick:function(){f.replace(o.find("#replace").value())||(o.statusbar.items().slice(1).disabled(!0),u=-1,i={})}},{text:"Replace all",disabled:!0,onclick:function(){f.replace(o.find("#replace").value(),!0,!0),o.statusbar.items().slice(1).disabled(!0),i={}}},{type:"spacer",flex:1},{text:"Prev",name:"prev",disabled:!0,onclick:function(){f.prev(),t()}},{text:"Next",name:"next",disabled:!0,onclick:function(){f.next(),t()}}],title:"Find and replace",items:{type:"form",padding:20,labelGap:30,spacing:10,items:[{type:"textbox",name:"find",size:40,label:"Find",value:a},{type:"textbox",name:"replace",size:40,label:"Replace with"},{type:"checkbox",name:"case",text:"Match case",label:" "},{type:"checkbox",name:"words",text:"Whole words",label:" "}]}})}function a(e){var n=e.getAttribute("data-mce-index");return"number"==typeof n?""+n:n}function i(n){var r,a;return(a=e.dom.create("span",{"data-mce-bogus":1})).className="mce-match-marker",r=e.getBody(),f.done(!1),t.findAndReplaceDOMText(n,r,a,!1,e.schema)}function o(e){var n=e.parentNode;e.firstChild&&n.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)}function d(t){var r,i=[];if((r=n.toArray(e.getBody().getElementsByTagName("span"))).length)for(var o=0;o<r.length;o++){var d=a(r[o]);null!==d&&d.length&&d===t.toString()&&i.push(r[o])}return i}function l(n){var t=u,r=e.dom;(n=!1!==n)?t++:t--,r.removeClass(d(u),"mce-match-marker-selected");var a=d(t);return a.length?(r.addClass(d(t),"mce-match-marker-selected"),e.selection.scrollIntoView(a[0]),t):-1}function c(n){var t=e.dom,r=n.parentNode;t.remove(n),t.isEmpty(r)&&t.remove(r)}function s(e){var n=a(e);return null!==n&&n.length>0}var f=this,u=-1;f.init=function(e){e.addMenuItem("searchreplace",{text:"Find and replace",shortcut:"Meta+F",onclick:r,separator:"before",context:"edit"}),e.addButton("searchreplace",{tooltip:"Find and replace",shortcut:"Meta+F",onclick:r}),e.addCommand("SearchReplace",r),e.shortcuts.add("Meta+F","",r)},f.find=function(e,n,t){e=(e=e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")).replace(/\s/g,"\\s"),e=t?"\\b"+e+"\\b":e;var r=i(new RegExp(e,n?"g":"gi"));return r&&(u=-1,u=l(!0)),r},f.next=function(){var e=l(!0);-1!==e&&(u=e)},f.prev=function(){var e=l(!1);-1!==e&&(u=e)},f.replace=function(t,r,i){var l,p,h,m,g,v,x=u;for(r=!1!==r,h=e.getBody(),p=n.grep(n.toArray(h.getElementsByTagName("span")),s),l=0;l<p.length;l++){var b=a(p[l]);if(m=g=parseInt(b,10),i||m===u){for(t.length?(p[l].firstChild.nodeValue=t,o(p[l])):c(p[l]);p[++l];){if((m=parseInt(a(p[l]),10))!==g){l--;break}c(p[l])}r&&x--}else g>u&&p[l].setAttribute("data-mce-index",g-1)}return e.undoManager.add(),u=x,r?(v=d(x+1).length>0,f.next()):(v=d(x-1).length>0,f.prev()),!i&&v},f.done=function(t){var r,i,d,l;for(i=n.toArray(e.getBody().getElementsByTagName("span")),r=0;r<i.length;r++){var c=a(i[r]);null!==c&&c.length&&(c===u.toString()&&(d||(d=i[r].firstChild),l=i[r].firstChild),o(i[r]))}if(d&&l){var s=e.dom.createRng();return s.setStart(d,0),s.setEnd(l,l.data.length),!1!==t&&e.selection.setRng(s),s}}}return e.add("searchreplace",r),function(){}}),r("0")()}();