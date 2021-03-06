$(function() {
    $("#price-range").slider({
        range: "max",
        min: 1000,
        max: 70000,
        value: 1,
        slide: function( event, ui ) {
        $( "#priceRange" ).val(  ui.value + " mdl" );
        }
    });
    $("#priceRange").val(  $("#price-range").slider("values", 0)+ " mdl");
} );

let $calculator = document.querySelector('.calculator'),
	$dataCredit = document.querySelector('.dataCredit'),
	$btn = document.querySelector('.button'),
	$slider = document.querySelector('#price-range'),
	$userInput = document.querySelector('#name'),
	nameLabel = document.querySelector('.calculator_block_right_input label'),
	$time = document.querySelector('#time'),
	$pay = document.querySelector('.pay'),
	$payBlock = document.querySelector('.pay_block'),
	$payWrapper = document.querySelector('.pay_wrapper'),
	creditValue = document.querySelector('#priceRange'),
	creditSum = document.querySelector('.credit_block_name'),
	$body = document.querySelector('body');

$btn.addEventListener('click', createCreditUserInfo);
$slider.addEventListener('click', updateCreditSum);
$time.addEventListener('click', updateTime);

function createCreditUserInfo(){

	if($userInput.value == ''){
		$userInput.style.border = "1px Solid #FF0000" ; 
		nameLabel.textContent = 'Введите имя заемщика';
		nameLabel.style.color = 'red';
	} else {
		if(nameLabel.style.color == 'red'){
			nameLabel.style.color = '#494949';
			$userInput.style.border = '1px solid rgba(0,0,0,.3)';
			nameLabel.textContent = 'Фамилия Имя Отчество';
		}
		create();
		createUser();
		getCreditSum();
		getCreditTime();
		createCreditGiver();
		createCreditBlock();
		createCreditBlockTitles();
		getTabListener();
		createMonth();
	} 
}

function create(){
	let user = document.createElement('div'),
	userBlock = document.createElement('div'),
	userTitle = document.createElement('div');

	userBlock.insertAdjacentElement('afterbegin', userTitle);
	userTitle.setAttribute('class', 'user_block_title');
	userTitle.textContent = 'ФИО';

	userBlock.setAttribute('class', 'user_block');
	user.insertAdjacentElement('afterbegin', userBlock);
	user.setAttribute('class', 'user');

	$dataCredit.insertAdjacentElement('afterbegin', user);
	$btn.removeEventListener('click', createCreditUserInfo);
}

function createUser(){
	let userBlock = document.querySelector('.user_block'),
		userName = document.createElement('div');

		userBlock.insertAdjacentElement('afterbegin', userName);
		
		userBlock.insertAdjacentElement('beforeend', userName);
		userName.setAttribute('class', 'user_block_name');
		userName.textContent = $userInput.value; 
		$userInput.addEventListener('blur', updateName);	
}

function updateName(){
	let  userName = document.querySelector('.user_block_name');

	if($userInput.value == ''){
		$userInput.style.border = "1px Solid #FF0000" ; 
		nameLabel.textContent = 'Введите имя заемщика';
		nameLabel.style.color = 'red';
	} else {
		nameLabel.style.color = '#494949';
		$userInput.style.border = '1px solid rgba(0,0,0,.3)';
		nameLabel.textContent = 'Фамилия Имя Отчество';
		userName.textContent = $userInput.value;
	}
}

function getCreditSum(){
	let user = document.querySelector('.user'),
		creditBlock = document.createElement('div'),
		creditTitle = document.createElement('div'),
		creditSum = document.createElement('div'),
		creditValue = document.querySelector('#priceRange');
		
		user.insertAdjacentElement('beforeend', creditBlock);
		creditBlock.setAttribute('class', 'credit_block');

		creditBlock.insertAdjacentElement('afterbegin', creditTitle);
		creditTitle.setAttribute('class', 'credit_block_title');
		creditTitle.textContent = 'Сумма Кредита';

		creditBlock.insertAdjacentElement('beforeend', creditSum);
		creditSum.setAttribute('class', 'credit_block_name');
		creditSum.textContent = creditValue.value;
}

function getCreditTime(){
	let user = document.querySelector('.user'),
		timeBlock = document.createElement('div'),
		creditTimeTitle = document.createElement('div'),
		creditTimeValue = document.createElement('div');

	user.insertAdjacentElement('beforeend', timeBlock);
	timeBlock.setAttribute('class', 'time');
	
	timeBlock.insertAdjacentElement('afterbegin', creditTimeTitle); 
	creditTimeTitle.setAttribute('class', 'time_block_title');
	creditTimeTitle.textContent = 'Срок кредитования';

	timeBlock.insertAdjacentElement('beforeend', creditTimeValue);
	creditTimeValue.setAttribute('class', 'time_block_name');
	creditTimeValue.textContent = $time.value + ' месяцев';

	console.log(time.value);

}
 
function updateCreditSum(){ 
	creditSum.textContent = creditValue.value;
}
 
function updateTime(){ 
	let creditTimeValue = document.querySelector('.time_block_name'); 
	creditTimeValue.textContent = $time.value + ' месяцев';
}

function createCreditGiver(){
	let $pay = document.createElement('section'),
		$easeCredit = document.createElement('div'),
		$iuteCredit = document.createElement('div'),
		$payWrapper = document.createElement('div'),
		$microInvest = document.createElement('div');

	$dataCredit.insertAdjacentElement('afterend', $pay);
	$pay.insertAdjacentElement('afterbegin', $payWrapper);
	$payWrapper.setAttribute('class', 'pay_wrapper');
	$payWrapper.setAttribute('id', 'pay_wrapper');


	$payWrapper.insertAdjacentElement('afterbegin', $microInvest);
	$payWrapper.insertAdjacentElement('afterbegin', $iuteCredit);
	$payWrapper.insertAdjacentElement('afterbegin', $easeCredit);
	
	$pay.setAttribute('class', 'pay');
	$easeCredit.setAttribute('class', 'pay_name_active');
	$easeCredit.textContent = 'Easy Credit';

	$iuteCredit.setAttribute('class', 'pay_name_inactive');
	$iuteCredit.textContent = 'Iute Credit';

	$microInvest.setAttribute('class', 'pay_name_inactive');
	$microInvest.textContent = 'Micro Invest Credit';

}

function createCreditBlock(){
	let $payBlock = document.createElement('div'),
		$pay = document.querySelector('.pay');
	
	$pay.insertAdjacentElement('beforeend', $payBlock);
	$payBlock.setAttribute('class', 'pay_block');

}

function createCreditBlockTitles(){
	let $payBlockWrapper = document.createElement('div'), 
		$payBlock = document.querySelector('.pay_block');

	$payBlock.insertAdjacentElement('afterbegin', $payBlockWrapper);
	$payBlockWrapper.setAttribute('class', 'pay_block_wrapper');

	for ( let i = 0;  i <= 4; i++){  
		let $payBlockWrapperTitle = document.createElement('div');

			$payBlockWrapper.insertAdjacentElement('beforeend', $payBlockWrapperTitle);
			$payBlockWrapperTitle.setAttribute('class', 'pay_block_wrapper_title');

		switch (i){
			case 0:
				$payBlockWrapperTitle.textContent = 'Месяц';
				break;
			case 1:
				$payBlockWrapperTitle.textContent = 'Месячный платеж';
				break;
			case 2:
				$payBlockWrapperTitle.textContent = 'Остаток кредита';
				break;
			case 3:
				$payBlockWrapperTitle.textContent = 'Плата за кредит';
				break; 
			case 4:
				$payBlockWrapperTitle.textContent = 'Итого \r\n в месяц';
				break;
		}
	}
}

function getTabListener(){
	document.getElementById('pay_wrapper').addEventListener('click', (event) => { 
		let tab = document.querySelectorAll('.pay_wrapper div');
 
		if (event.target.className != "pay_name_active"){
			console.log('Inactive'); 
			for (let i = 0; i < tab.length; i++){
				if(tab[i].classList.contains('pay_name_active')){
				   tab[i].classList.remove('pay_name_active');
				   tab[i].classList.add('pay_name_inactive');
				}
			}
			event.target.classList.add('pay_name_active');
			event.target.classList.remove('pay_name_inactive');
		}  
	});
}

// function calculationCredit(){ 

// 	let val = creditValue.value,
// 		t = $time.value;
	
// 	for (let i = 0; i <= $time.value; i++){

// 	}

// }

function createMonth(){
	for (let k = 0; k <= $time.value; k++){

		let creditBlock = document.querySelector('.pay_block'),
			month = document.createElement('div');

			creditBlock.insertAdjacentElement('beforeend', month);
			month.setAttribute('class', 'month');

			for(let i = 0; i<5; i++){ 
				let  monthBlock = document.createElement('div'); 

					 month.insertAdjacentElement('beforeend', monthBlock);
					 monthBlock.setAttribute('class', 'month_block');

					 monthBlock.textContent = 'test';
			} 
	} 
}
