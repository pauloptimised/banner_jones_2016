/**
 * plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2015 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
tinymce.PluginManager.add("optimage",function(t){function e(t,e){function i(t,i){n.parentNode&&n.parentNode.removeChild(n),e({width:t,height:i})}var n=document.createElement("img");n.onload=function(){i(Math.max(n.width,n.clientWidth),Math.max(n.height,n.clientHeight))},n.onerror=function(){i()};var a=n.style;a.visibility="hidden",a.position="fixed",a.bottom=a.left=0,a.width=a.height="auto",document.body.appendChild(n),n.src=t}function i(t,e,i){function n(t,i){return i=i||[],tinymce.each(t,function(t){var a={text:t.text||t.title};t.menu?a.menu=n(t.menu):(a.value=t.value,e(a)),i.push(a)}),i}return n(t,i||[])}function n(e){return function(){var i=t.settings.image_list;"string"==typeof i?tinymce.util.XHR.send({url:i,success:function(t){e(tinymce.util.JSON.parse(t))}}):"function"==typeof i?i(e):e(i)}}function a(n){function a(){var t,e,i,n;t=m.find("#width")[0],e=m.find("#height")[0],t&&e&&(i=t.value(),n=e.value(),m.find("#constrain")[0].checked()&&c&&h&&i&&n&&(c!=i?(n=Math.round(i/c*n),isNaN(n)||e.value(n)):(i=Math.round(n/h*i),isNaN(i)||t.value(i))),c=i,h=n)}function o(){function e(e){function i(){e.onload=e.onerror=null,t.selection&&(t.selection.select(e),t.nodeChanged())}e.onload=function(){p.width||p.height||!y||f.setAttribs(e,{width:e.clientWidth,height:e.clientHeight}),i()},e.onerror=i}g(),a(),(p=tinymce.extend(p,m.toJSON())).alt||(p.alt=""),p.title||(p.title=""),""===p.width&&(p.width=null),""===p.height&&(p.height=null),p.style||(p.style=null),p={src:p.src,alt:p.alt,title:p.title,width:p.width,height:p.height,style:p.style,"class":p["class"]},t.undoManager.transact(function(){p.src?(""===p.title&&(p.title=null),b?f.setAttribs(b,p):(p.id="__mcenew",t.focus(),t.selection.setContent(f.createHTML("img",p)),b=f.get("__mcenew"),f.setAttrib(b,"id",null)),e(b)):b&&(f.remove(b),t.focus(),t.nodeChanged())})}function l(t){return t&&(t=t.replace(/px$/,"")),t}function r(i){var n,a,o,l=i.meta||{},r=m.find("#alt");(!r.value()||i.lastControl&&r.value()==i.lastControl.text())&&r.value(i.control.text()),m.find("#src").value(i.control.value()),u&&u.value(t.convertURL(this.value(),"src")),tinymce.each(l,function(t,e){m.find("#"+e).value(t)}),l.width||l.height||(n=t.convertURL(this.value(),"src"),a=t.settings.image_prepend_url,o=new RegExp("^(?:[a-z]+:)?//","i"),a&&!o.test(n)&&n.substring(0,a.length)!==a&&(n=a+n),this.value(n),e(t.documentBaseURI.toAbsolute(this.value()),function(t){t.width&&t.height&&y&&(c=t.width,h=t.height,m.find("#width").value(c),m.find("#height").value(h))}))}function s(t){if(t.margin){var e=t.margin.split(" ");switch(e.length){case 1:t["margin-top"]=t["margin-top"]||e[0],t["margin-right"]=t["margin-right"]||e[0],t["margin-bottom"]=t["margin-bottom"]||e[0],t["margin-left"]=t["margin-left"]||e[0];break;case 2:t["margin-top"]=t["margin-top"]||e[0],t["margin-right"]=t["margin-right"]||e[1],t["margin-bottom"]=t["margin-bottom"]||e[0],t["margin-left"]=t["margin-left"]||e[1];break;case 3:t["margin-top"]=t["margin-top"]||e[0],t["margin-right"]=t["margin-right"]||e[1],t["margin-bottom"]=t["margin-bottom"]||e[2],t["margin-left"]=t["margin-left"]||e[1];break;case 4:t["margin-top"]=t["margin-top"]||e[0],t["margin-right"]=t["margin-right"]||e[1],t["margin-bottom"]=t["margin-bottom"]||e[2],t["margin-left"]=t["margin-left"]||e[3]}delete t.margin}return t}function g(){function t(t){return t.length>0&&/^[0-9]+$/.test(t)&&(t+="px"),t}var e=m.toJSON(),i=f.parseStyle(e.style);i=s(i),e.mtop&&(i["margin-top"]=t(e.mtop)),e.mright&&(i["margin-right"]=t(e.mright)),e.mbottom&&(i["margin-bottom"]=t(e.mbottom)),e.mleft&&(i["margin-left"]=t(e.mleft)),e.border&&(i["border-width"]=t(e.border)),m.find("#style").value(f.serializeStyle(f.parseStyle(f.serializeStyle(i))))}var m,c,h,u,d,p={},f=t.dom,b=t.selection.getNode(),y=!1!==t.settings.image_dimensions;c=f.getAttrib(b,"width"),h=f.getAttrib(b,"height"),"IMG"!=b.nodeName||b.getAttribute("data-mce-object")||b.getAttribute("data-mce-placeholder")?b=null:p={src:f.getAttrib(b,"src"),alt:f.getAttrib(b,"alt"),title:f.getAttrib(b,"title"),"class":f.getAttrib(b,"class"),width:c,height:h},n&&(u={type:"listbox",label:"Image list",values:i(n,function(e){e.value=t.convertURL(e.value||e.url,"src")},[{text:"None",value:""}]),value:p.src&&t.convertURL(p.src,"src"),onselect:function(t){var e=m.find("#alt");(!e.value()||t.lastControl&&e.value()==t.lastControl.text())&&e.value(t.control.text()),m.find("#src").value(t.control.value()).fire("change")},onPostRender:function(){u=this}}),t.settings.image_class_list&&(d={name:"class",type:"listbox",label:"Class",values:i(t.settings.image_class_list,function(e){e.value&&(e.textStyle=function(){return t.formatter.getCssText({inline:"img",classes:[e.value]})})})});var v=[];v.push({type:"form",layout:"grid",packV:"start",columns:2,padding:0,alignH:["left","right"],items:[{name:"upload",type:"button",size:40,text:"Upload a New Image",onclick:function(){t.windowManager.open({title:"Upload a New Image",url:"/admin/images/new_inline",width:485,height:153})}},{name:"choose",classes:"choose-file",type:"button",size:20,text:"Choose an Existing Image",onclick:function(){t.windowManager.open({title:"Choose an Existing Image",url:"/admin/images/tinymce",width:885,height:600,autoScroll:!0})}}]}),v.push({name:"src",type:"filepicker",filetype:"image",onchange:r,classes:"image-url-input",style:"visibility:hidden;height:0;"},u),!1!==t.settings.image_description&&v.push({name:"alt",type:"textbox",label:"Image description",classes:"image-alt-input"}),y&&v.push({type:"container",label:"Dimensions",layout:"flex",direction:"row",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:3,onKeyUp:a,ariaLabel:"Width",classes:"image-width-input"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:3,onKeyUp:a,ariaLabel:"Height",classes:"image-height-input"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}),v.push({type:"form",layout:"grid",columns:2,padding:0,defaults:{type:"textbox",maxWidth:40,onchange:g},items:[{label:"Margin top",name:"mtop"},{label:"Margin right",name:"mright"},{label:"Margin bottom",name:"mbottom"},{label:"Margin left",name:"mleft"}]}),v.push(d),t.settings.image_advtab?(b&&(b.style.marginLeft&&b.style.marginRight&&b.style.marginLeft===b.style.marginRight&&(p.hspace=l(b.style.marginLeft)),b.style.marginTop&&b.style.marginBottom&&b.style.marginTop===b.style.marginBottom&&(p.vspace=l(b.style.marginTop)),b.style.borderWidth&&(p.border=l(b.style.borderWidth)),p.style=t.dom.serializeStyle(t.dom.parseStyle(t.dom.getAttrib(b,"style")))),m=t.windowManager.open({title:"Add or Edit Image",data:p,classes:"test",body:v,onSubmit:o})):m=t.windowManager.open({title:"Insert/edit image",data:p,body:v,onSubmit:o})}t.addButton("optimage",{icon:"image",tooltip:"Insert/edit image",onclick:n(a),stateSelector:"img:not([data-mce-object],[data-mce-placeholder])"}),t.addMenuItem("optimage",{icon:"image",text:"Insert/edit image",onclick:n(a),context:"insert",prependToContext:!0}),t.addCommand("mceImage",n(a))});