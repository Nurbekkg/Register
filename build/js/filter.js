function region_update(){var e=$("#id_country").val(),i=30;$("#id_region").html("").select2({placeholder:translater("Select a region / region"),ajax:{url:"/ru/api/geo/regions/",dataType:"json",delay:250,data:function(i){return{all:1,country:e[0],page:i.page,search:i.term}},processResults:function(e,t){return t.page=t.page||1,$.map(e.results,function(e){return e.text=e.name,e.id=e.name,e}),{results:e.results,pagination:{more:t.page*i<e.count}}},cache:!0},escapeMarkup:function(e){return e}})}function getParameter(e){for(var i=[],t=window.location.search.substring(1),n=t.split("&"),c=0;c<n.length;c++){var r=n[c].split("=");r[0]==e&&i.push(r[1])}return i}setTimeout(function(){var e=getParameter("region");for(var i in e)e[i]=decodeURIComponent(e[i]),e[i]=e[i].replace("+"," "),$("#id_region").append('<option value="'+e[i]+'" selected="selected">'+e[i]+"</option>")},200),$(document).ready(function(){var e=getParameter("categories");for(var i in e)$(".filter-categories input").each(function(){e[i]==$(this).val()&&($(this).prop("checked",!0),$(this).closest(".children").show(),$(this).closest(".main-category").children(".children").show(),$(this).closest(".main-category").children("i").addClass("opened"),$(this).siblings("i").addClass("opened"))})}),$(document).ready(function(){$('input[type="checkbox"]').each(function(e){function i(e){var n=e.parent().parent(),c=!0;e.siblings().each(function(){return c=$(this).children('input[type="checkbox"]').prop("checked")===t}),c&&t?(n.children('input[type="checkbox"]').prop({indeterminate:!1,checked:t}),i(n)):c&&!t?(n.children('input[type="checkbox"]').prop("checked",t),n.children('input[type="checkbox"]').prop("indeterminate",n.find('input[type="checkbox"]:checked').length>0),i(n)):e.parents("li").children('input[type="checkbox"]').prop({indeterminate:!0,checked:!1})}if($(this).prop("checked")){var t=$(this).prop("checked"),n=$(this).parent();n.siblings();n.find('input[type="checkbox"]').prop({indeterminate:!1,checked:t}),i(n)}}),$("#id_country").val()&&(1==$("#id_country").val().length?($(".filter-region").fadeIn("fast"),region_update()):null!=$("#id_country").val()&&1==$("#id_country").val().length||$(".filter-region").fadeOut("fast"))}),$('input[type="checkbox"]').change(function(e){function i(e){var n=e.parent().parent(),c=!0;e.siblings().each(function(){return c=$(this).children('input[type="checkbox"]').prop("checked")===t}),c&&t?(n.children('input[type="checkbox"]').prop({indeterminate:!1,checked:t}),i(n)):c&&!t?(n.children('input[type="checkbox"]').prop("checked",t),n.children('input[type="checkbox"]').prop("indeterminate",n.find('input[type="checkbox"]:checked').length>0),i(n)):e.parents("li").children('input[type="checkbox"]').prop({indeterminate:!0,checked:!1})}var t=$(this).prop("checked"),n=$(this).parent();n.siblings();n.find('input[type="checkbox"]').prop({indeterminate:!1,checked:t}),i(n)}),$("#id_country").change(function(){$(this).val()?1==$("#id_country").val().length?($(".filter-region").fadeIn("fast"),region_update()):null!=$("#id_country").val()&&1==$("#id_country").val().length||$(".filter-region").fadeOut("fast"):$(".filter-region").fadeOut("fast")}),$("#base_filter").submit(function(){$(".root > input").each(function(){1==$(this).prop("checked")&&$(this).parent().children(".children").find("input").prop("checked",!1)}),$(".child > input").each(function(){1==$(this).prop("checked")&&$(this).parent().children(".children").find("input").prop("checked",!1)}),$("#id_region").is(":hidden")&&$("#id_region option").each(function(){$(this).removeAttr("selected")})}),$(".input i").click(function(){$(this).siblings(".children").is(":hidden")?($(this).siblings(".children").slideDown("fast"),$(this).addClass("opened"),$(this).siblings("label").children("span.name").css("color","#333")):($(this).siblings(".children").slideUp("fast"),$(this).removeClass("opened"),$(this).siblings("label").children("span.name").css("color","#95989A"))}),$(".categories label .name").each(function(){$(this).attr("data-search-term",$(this).text().toLowerCase())}),$("#live-search-input").on("keyup",function(){var e=$(this).val().toLowerCase();$(".children").show(),$(".categories label .name").each(function(){$(this).filter("[data-search-term *= "+e+"]").length>0||e.length<1?($(this).parent("label").show(),$(this).parent().siblings("i").show()):($(this).parent("label").hide(),$(this).parent().siblings("i").hide())}),""==e&&$(".children").hide(),$(".input i.opened").removeClass("opened"),$(".input .children:visible").each(function(){$(this).siblings("i").addClass("opened")})}),$(".categories li a").each(function(){$(this).attr("data-search-term",$(this).text().toLowerCase())}),$("#liveSearch").on("keyup",function(){var e=$(this).val().toLowerCase();$(".children").show(),$(".categories li a").each(function(){$(this).filter("[data-search-term *= "+e+"]").length>0||e.length<1?$(this).parent("li").show():$(this).parent("li").hide()}),""==e&&$(".children").hide(),$(".input i.opened").removeClass("opened"),$(".input .children:visible").each(function(){$(this).siblings("i").addClass("opened")})});