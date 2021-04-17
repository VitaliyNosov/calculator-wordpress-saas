$(function() {

    
	// Украина:

	// Переменные с нуливыми значениями	
	
	var ukr=0, ukrInput=0; check1=0;	
	
	// Обработка поля с radio input 
	
	$("input[name='ukr']").change(function() {
		if ($("input[name='ukr']").prop("checked")) {
			ukr = $(this).data('check');
		} else {
			ukr = $(this).data('check');
		}
		summ1();
	});
		
	// Обработка полей с checkbox input 
	
	$('.ukr-check').on('change', function(){
		check1 = 0;
		$('input:checkbox:checked').each(function(){
			if($(this).prop("checked")){
			check1 = Number(check1) + Number( Math.round ( $(this).data('check') ) );
			}
		});
		summ1();
	});
	
	
	// Обработка и вывод суммы

	
	function summ1(){
		ukr = Number(ukr);
		ukrInput = Number(check1);
		$("#summ1").text( ukr + ukrInput  + ' Euro ' );
	};
	summ1();


	// Европа:


	// Переменные с нуливыми значениями	
	
	var euro=0, euroInput=0; check2=0;	
	
	// Обработка поля с radio input 
	
	$("input[name='euro']").change(function() {
		if ($("input[name='euro']").prop("checked")) {
			euro = $(this).data('check');
		} else {
			euro = $(this).data('check');
		}
		summ2();
	});
		
	// Обработка полей с checkbox input 
	
	$('.euro-check').on('change', function(){
		check2 = 0;
		$('input:checkbox:checked').each(function(){
			if($(this).prop("checked")){
			check2 = Number(check2) + Number( Math.round ( $(this).data('check') ) );
			}
		});
		summ2();
	});
	
	
	// Обработка и вывод суммы

	
	function summ2(){
		euro = Number(euro);
		euroInput = Number(check2);
		$("#summ2").text( euro + euroInput  + ' Euro ' );
	};
	summ2();

	
	
	
		
	});
    


    
    