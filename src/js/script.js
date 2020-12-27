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
	let creditValue = document.querySelector('#priceRange'),
		creditSum = document.querySelector('.credit_block_name');

	creditSum.textContent = creditValue.value;

}
 
function updateTime(){ 
	let creditTimeValue = document.querySelector('.time_block_name'); 
	creditTimeValue.textContent = $time.value + ' месяцев';
}

function createCreditGiver(){
	let $pay = document.createElement('section');
		$easeCredit = document.createElement('div'),
		$iuteCredit = document.createElement('div'),
		$payWrapper = document.createElement('div'),
		$microInvest = document.createElement('div');

	$dataCredit.insertAdjacentElement('afterend', $pay);
	$pay.insertAdjacentElement('afterbegin', $payWrapper);
	$payWrapper.setAttribute('class', 'pay_wrapper');

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