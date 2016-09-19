jQuery(document).ready(function($){
	$('#Sign_In').click(function(){
		$('#SignInBox').toggle(200);
		$('#headliner').show(200);
		$('#SignUpForm').hide(200);
		$('#SignUpSuccessMsg').hide();
		($).history.pushState();
	});
	$('#Sign_Up').click(function(){
		$('#SignUpForm').show(200);
		$('#headliner').hide(200);
		$('#SignInBox').hide(200);
		$('#SignUpSuccessMsg').hide();
		($).history.pushState();
	});
	$('#cancelButton').click(function(){
		$('#SignUpForm').hide(200);
		$('#headliner').show(200);
		$('#SignUpSuccessMsg').hide();
		($).history.pushState();
	});
	$('#Sign_Up_Submit').click(function(){
		$('#SignUpForm').hide(100);
		$('#SignUpSuccessMsg').show(200);
		($).history.pushState();
	});
});

jQuery(document).ready(function(){
	$.bind('back',fuction(){
		historyBack();
	});
});

function historyBack(){
	window.history.pop();
}



