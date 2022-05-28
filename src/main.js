$(document).ready(function(){

	//-------------------------------------------
	//	Описания функций
	
	let msec;

	function msecToMinutes(msec) {
		let minutes = parseInt((msec / (1000 * 60)));
		return minutes;
	}

	function showNotify(){
		$(".notify").fadeIn(300);
	}

	function hideNotify(){
		$(".notify").fadeOut(300);
	}


	const offset = 5; // задержка проверки статуса (в секундах)
	const period = 1; // период напоминаний (в минутах)
	let currentTime = new Date();

	function diffCalc(){
		let lastNotify = localStorage.getItem('lastNotify');
		lastNotify = Number(lastNotify)

		// Сколько прошло времени (мин)
		diff = msecToMinutes(currentTime - lastNotify) // console.log('Прошло (мин): ' + diff )

		// Пора показать уведомление
		if(diff >= period){
			showNotify()
		}
	}// function

	function checkStatus(){
		let notifyStatus = localStorage.getItem('notifyStatus');

		// Если пользователь не подписался, тогда можно напомнить
		if(notifyStatus == "false" || notifyStatus == null){
			setTimeout(diffCalc, offset*1000);		
		}
	}// function

	//-------------------------------------------





	//-------------------------------------------
	//	Запуск функций


	// Проверить статус напоминалки
	checkStatus();

	// Пользователь нажал "Пізніше"
	$(".btn-later").click(function(){ 
		localStorage.setItem('notifyStatus', false);
		localStorage.setItem('lastNotify', +currentTime);
		hideNotify();
	});

	// Пользователь нажал "Зараз"
	$(".btn-now").click(function(){
		$(".notify-body").hide();
		$(".notify-form").show();
	});

	// Пользователь подписался
	$(".btn-ok").click(function(){
		localStorage.setItem('notifyStatus', true);
		localStorage.setItem('lastNotify', +currentTime);
		hideNotify();
	});



	// Пользователь нажал "Купити"
	$(".buy").click(function(){ 
		console.log('Нажата "Купити"');
	});

	// Пользователь нажал "Де купити"
	$(".buy-point").click(function(){
		console.log('Нажата "Де купити"');
	});

	//-------------------------------------------




});