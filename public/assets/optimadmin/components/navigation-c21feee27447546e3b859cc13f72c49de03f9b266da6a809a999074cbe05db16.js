$(document).on("change","#menu_item_link_attributes_menu_resource_type",function(){var e=$(".resource-type-select").attr("data-url");data=$.get(e+"?klass="+$(this).val())});