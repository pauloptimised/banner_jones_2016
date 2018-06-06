!function(t,e){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.5.2",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,show_on:"all",tip_template:function(t,e){return'<span data-selector="'+t+'" id="'+t+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'" role="tooltip">'+e+'<span class="nub"></span></span>'}},cache:{},init:function(t,e,o){Foundation.inherit(this,"random_str"),this.bindings(e,o)},should_show:function(e){var o=t.extend({},this.settings,this.data_options(e));return"all"===o.show_on||(!(!this.small()||"small"!==o.show_on)||(!(!this.medium()||"medium"!==o.show_on)||!(!this.large()||"large"!==o.show_on)))},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},events:function(e){function o(t,e,o){t.timer||(o?(t.timer=null,s.showTip(e)):t.timer=setTimeout(function(){t.timer=null,s.showTip(e)}.bind(t),s.settings.hover_delay))}function i(t,e){t.timer&&(clearTimeout(t.timer),t.timer=null),s.hide(e)}var s=this,n=s.S;s.create(this.S(e)),t(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"]",function(e){var a=n(this),r=t.extend({},s.settings,s.data_options(a));if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type)&&n(e.target).is("a"))return!1;if(/mouse/i.test(e.type)&&s.ie_touch(e))return!1;if(a.hasClass("open"))Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type)&&e.preventDefault(),s.hide(a);else{if(r.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type))return;if(!r.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type)&&(e.preventDefault(),n(r.tooltip_class+".open").hide(),!0,t(".open["+s.attr_name()+"]").length>0)){var l=n(t(".open["+s.attr_name()+"]")[0]);s.hide(l)}/enter|over/i.test(e.type)?o(this,a):"mouseout"===e.type||"mouseleave"===e.type?i(this,a):o(this,a,!0)}}).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"].open",function(e){if(/mouse/i.test(e.type)&&s.ie_touch(e))return!1;"touch"==t(this).data("tooltip-open-event-type")&&"mouseleave"==e.type||("mouse"==t(this).data("tooltip-open-event-type")&&/MSPointerDown|touchstart/i.test(e.type)?s.convert_to_touch(t(this)):i(this,t(this)))}).on("DOMNodeRemoved DOMAttrModified","["+this.attr_name()+"]:not(a)",function(){i(this,n(this))})},ie_touch:function(){return!1},showTip:function(t){var e=this.getTip(t);if(this.should_show(t,e))return this.show(t)},getTip:function(e){var o=this.selector(e),i=t.extend({},this.settings,this.data_options(e)),s=null;return o&&(s=this.S('span[data-selector="'+o+'"]'+i.tooltip_class)),"object"==typeof s&&s},selector:function(t){var e=t.attr(this.attr_name())||t.attr("data-selector");return"string"!=typeof e&&(e=this.random_str(6),t.attr("data-selector",e).attr("aria-describedby",e)),e},create:function(o){var i=this,s=t.extend({},this.settings,this.data_options(o)),n=this.settings.tip_template;"string"==typeof s.tip_template&&e.hasOwnProperty(s.tip_template)&&(n=e[s.tip_template]);var a=t(n(this.selector(o),t("<div></div>").html(o.attr("title")).html())),r=this.inheritable_classes(o);a.addClass(r).appendTo(s.append_to),Modernizr.touch&&(a.append('<span class="tap-to-close">'+s.touch_close_text+"</span>"),a.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",function(){i.hide(o)})),o.removeAttr("title").attr("title","")},reposition:function(e,o,i){var s,n,a,r;if(o.css("visibility","hidden").show(),s=e.data("width"),a=(n=o.children(".nub")).outerHeight(),n.outerHeight(),this.small()?o.css({width:"100%"}):o.css({width:s||"auto"}),(r=function(t,e,o,i,s){return t.css({top:e||"auto",bottom:i||"auto",left:s||"auto",right:o||"auto"}).end()})(o,e.offset().top+e.outerHeight()+10,"auto","auto",e.offset().left),this.small())r(o,e.offset().top+e.outerHeight()+10,"auto","auto",12.5,t(this.scope).width()),o.addClass("tip-override"),r(n,-a,"auto","auto",e.offset().left);else{var l=e.offset().left;Foundation.rtl&&(n.addClass("rtl"),l=e.offset().left+e.outerWidth()-o.outerWidth()),r(o,e.offset().top+e.outerHeight()+10,"auto","auto",l),n.attr("style")&&n.removeAttr("style"),o.removeClass("tip-override"),i&&i.indexOf("tip-top")>-1?(Foundation.rtl&&n.addClass("rtl"),r(o,e.offset().top-o.outerHeight(),"auto","auto",l).removeClass("tip-override")):i&&i.indexOf("tip-left")>-1?(r(o,e.offset().top+e.outerHeight()/2-o.outerHeight()/2,"auto","auto",e.offset().left-o.outerWidth()-a).removeClass("tip-override"),n.removeClass("rtl")):i&&i.indexOf("tip-right")>-1&&(r(o,e.offset().top+e.outerHeight()/2-o.outerHeight()/2,"auto","auto",e.offset().left+e.outerWidth()+a).removeClass("tip-override"),n.removeClass("rtl"))}o.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},inheritable_classes:function(e){var o=t.extend({},this.settings,this.data_options(e)),i=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(o.additional_inheritable_classes),s=e.attr("class"),n=s?t.map(s.split(" "),function(e){if(-1!==t.inArray(e,i))return e}).join(" "):"";return t.trim(n)},convert_to_touch:function(e){var o=this,i=o.getTip(e),s=t.extend({},o.settings,o.data_options(e));0===i.find(".tap-to-close").length&&(i.append('<span class="tap-to-close">'+s.touch_close_text+"</span>"),i.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",function(){o.hide(e)})),e.data("tooltip-open-event-type","touch")},show:function(t){var e=this.getTip(t);"touch"==t.data("tooltip-open-event-type")&&this.convert_to_touch(t),this.reposition(t,e,t.attr("class")),t.addClass("open"),e.fadeIn(150)},hide:function(t){var e=this.getTip(t);e.fadeOut(150,function(){e.find(".tap-to-close").remove(),e.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),t.removeClass("open")})},off:function(){var e=this;this.S(this.scope).off(".fndtn.tooltip"),this.S(this.settings.tooltip_class).each(function(o){t("["+e.attr_name()+"]").eq(o).attr("title",t(this).text())}).remove()},reflow:function(){}}}(jQuery,window,window.document);