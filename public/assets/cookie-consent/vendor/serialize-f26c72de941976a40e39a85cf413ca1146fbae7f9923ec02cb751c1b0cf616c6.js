function serialize(e){var n,t=[];if("object"==typeof e&&"FORM"==e.nodeName){var o=e.elements.length;for(i=0;i<o;i++)(n=e.elements[i]).name&&!n.disabled&&"file"!=n.type&&"reset"!=n.type&&"submit"!=n.type&&"button"!=n.type&&n.checked&&(t[t.length]=encodeURIComponent(n.name)+"="+encodeURIComponent(n.value))}return t.join("&").replace(/%20/g,"+")}