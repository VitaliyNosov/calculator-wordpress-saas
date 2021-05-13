$(function() {

    
	// Украина:
	
	// Значения radio кнопок
	
	$('.radio-block input').on('click', function() {
		// $('#outputUkrOne').val('Cервер: ' + $('.radio-block input:checked').val());
		$('#outputUkrOne').val( $('.radio-block input:checked').val());
		
	});
	
	// Значения первого ряда checkbox
	
	$('.system-block-content input').on('click', function() {
		// $('#outputUkrTwo').val('Cистема: ' + $('.system-block-content input:checked').val() );
		$('#outputUkrTwo').val($('.system-block-content input:checked').val() );
	});
	
	// Значения третего ряда checkbox
	
	$('.group-ukr-content input').on('click', function() {
		// $('#outputUkrThree').val('Лицензия: ' + $('.group-ukr-content input:checked').val() );
		$('#outputUkrThree').val( $('.group-ukr-content input:checked').val() );
	});
	
	
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
			$("#summ1").val( ukr + ukrInput + ' Euro ' );
		};
		summ1();
	
	
	// Европа:
	
	
	// Значения radio кнопок
	
	$('.radio input').on('click', function() {
		// $('#outputEuroOne').val('Сервер: ' + $('.radio input:checked').val());
		$('#outputEuroOne').val( $('.radio input:checked').val());
		
	
	});
	
	// Значения первого ряда checkbox
	
	$('.system-block-content-two input').on('click', function() {
		// $('#outputEuroTwo').val('Cистема: ' + $('.system-block-content-two input:checked').val() );
		$('#outputEuroTwo').val( $('.system-block-content-two input:checked').val() );
	});
	
	// Значения третего ряда checkbox
	
	$('.group-eur-content input').on('click', function() {
		// $('#outputEuroThree').val('Лицензия: ' + $('.group-eur-content input:checked').val() );
		$('#outputEuroThree').val( $('.group-eur-content input:checked').val() );
	});
	
	
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
			$("#summ2").val(euro + euroInput  + ' Euro ' );
		};
		summ2();

	
	
	
		
});
    


    
    