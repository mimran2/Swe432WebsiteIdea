jQuery(document).ready(function($){
	$('#Sign_In').click(function(){
		$('#SignInBox').toggle(200);
		$('#headliner').show(200);
		$('#SignUpForm').hide(200);
	});
	$('#Sign_Up').click(function(){
		$('#SignUpForm').show(200);
		$('#headliner').hide(200);
		$('#SignInBox').hide(200);
	});
	$('#cancelButton').click(function(){
		$('#SignUpForm').hide(200);
		$('#headliner').show(200);
	});
});

