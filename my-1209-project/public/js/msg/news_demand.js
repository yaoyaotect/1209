var a=document.getElementById("dope");
var b=document.getElementById("inform");
var c=document.getElementById("need");
var dope=document.getElementById("demand_one")
var inform=document.getElementById("demand_two")
var need=document.getElementById("demand_three")
$(function(){
	$('#dope' ).click(function(){
		$("#demand_one" ).css("width","100%" ).css("height","850px")
		$("#demand_two" ).css("width","0" ).css("height","0")
		$("#demand_three" ).css("width","0" ).css("height","0")
	})
	$('#inform').click(function(){
		$("#demand_one" ).css("width","0" ).css("height","0")
		$("#demand_two" ).css("width","100%" ).css("height","850px")
		$("#demand_three" ).css("width","0" ).css("height","0")
	})
	$('#need' ).click(function(){
		$("#demand_one" ).css("width","0" ).css("height","0")
		$("#demand_two" ).css("width","0" ).css("height","0")
		$("#demand_three" ).css("width","100%" ).css("height","600px")
	})
})


