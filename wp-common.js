// calculator script


console.log('calculator')


jQuery(function($){

$(document).ready(function(){
      
// Открываем блок по клику на кнопку	

$('#button-click').click(function () {
	$('#content-block').slideToggle(500);
});

// $(window).resize(function () {
// 	if ($(window).width() > 500) {
// 		$('#content-block').removeAttr('style');
// 	}
// });

// Украина	

// block one 

$('.input-server-ukr').click(function () {
	$('.form-price-ukr').slideDown();
});

// block two

$('.price-ukr').click(function () {
	$('.form-support-system-ukr').slideDown();
});


// block three

$('.suport-system-ukr').click(function () {
	$('.form-software-about-ukr').slideDown();
});

// block four

$('.software-about-ukr').click(function () {
	$('.total-amount-ukr').slideDown();
});


// выделяем только один чекбокс

$(".group-ukr input").on("click", function() {

	if($(".group-ukr input:checked").length >= 1) { // Не больше 2-х checkbox
		
		$(".group-ukr input:not(:checked)").attr("disabled", true);
	
	} else {
		
		$(".group-ukr input:disabled").attr("disabled", false);
	
	}

});

// Украина


// Европа

// block one 

$('.input-server-eur').click(function () {
	$('.form-price-eur').slideDown();
});

// block two

$('.price-eur').click(function () {
	$('.form-support-system-eur').slideDown();
});

// block three

$('.suport-system-eur').click(function () {
	$('.form-software-about-eur').slideDown();
});

// block four

$('.software-about-eur').click(function () {
	$('.total-amount-eur').slideDown();
});

// выделяем только один чекбокс group-eur

$(".group-eur input").on("click", function() {

	if($(".group-eur input:checked").length >= 1) { // Не больше 2-х checkbox
		
		$(".group-eur input:not(:checked)").attr("disabled", true);
	
	} else {
		
		$(".group-eur input:disabled").attr("disabled", false);
	
	}

});

// выделяем только один чекбокс group-ukr

$(".group-ukr input").on("click", function() {

	if($(".group-ukr input:checked").length >= 1) { // Не больше 2-х checkbox
		
		$(".group-ukr input:not(:checked)").attr("disabled", true);
	
	} else {
		
		$(".group-ukr input:disabled").attr("disabled", false);
	
	}

});

// выделяем только один чекбокс system-block 1

$("#system-ukr-block input").on("click", function() {

	if($("#system-ukr-block input:checked").length >= 1) { // Не больше 2-х checkbox
		
		$("#system-ukr-block input:not(:checked)").attr("disabled", true);
	
	} else {
		
		$("#system-ukr-block input:disabled").attr("disabled", false);
	
	}

});

// выделяем только один чекбокс system-block 2

$("#system-eur-block input").on("click", function() {

	if($("#system-eur-block input:checked").length >= 1) { // Не больше 2-х checkbox
		
		$("#system-eur-block input:not(:checked)").attr("disabled", true);
	
	} else {
		
		$("#system-eur-block input:disabled").attr("disabled", false);
	
	}

});

// Европа


// выпадающий список показывать скрывать разные сервера

$(function() {
	$('#servers-select').change(function(){
		$('.servers-wrapper').hide();
		$('#' + $(this).val()).show();
	});
});




    
    });

});