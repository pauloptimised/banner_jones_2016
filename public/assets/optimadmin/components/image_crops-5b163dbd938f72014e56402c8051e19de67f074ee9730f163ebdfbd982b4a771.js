var getQueryString=function(e,o){var r=o||window.location.href,n=new RegExp("[?&]"+e+"=([^&#]*)","i").exec(r);return n?n[1]:null};$(document).on("click",".image-key-navigation",function(){var e=$(this).data("key");$(".image-crop-area form").addClass("hide"),$("#form_"+e).removeAttr("style").removeClass("hide invisible"),$(".imgareaselect-outer").toggle(!1),$(".imgareaselect-selection").parent().toggle(!1),$(".current-crop").removeClass("current-crop"),$(".nav_"+e).addClass("current-crop"),!0!==inIframe()&&equalHeight(),$(".image-crops-hint").remove()}),$(window).load(function(){$(".invisible").css({position:"absolute",top:-1e3})}),$(document).on("click",".action-button",function(){if(!0===inIframe())return parent.jQuery.colorbox.close(),!1});