jQuery(document).ready(function($){
	$('#Sign_In').click(function(){
		$('#SignInBox').toggle(200);
		$('#headliner').show(200);
		$('#SignUpForm').hide(200);
		$('#SignUpSuccessMsg').hide();
		var SignIn = {name:"SignIn"};
		window.history.pushState(SignIn, "Nothing");
	});

	$('#Sign_Up').click(function(){
		$('#SignUpForm').show(200);
		$('#headliner').hide(200);
		$('#SignInBox').hide(200);
		$('#SignUpSuccessMsg').hide();
		var SignUp = {name:"SignUp"};
		window.history.pushState(SignUp,"Sign Up");
	});
	$('#cancelButton').click(function(){
		$('#SignUpForm').hide(200);
		$('#headliner').show(200);
		$('#SignUpSuccessMsg').hide();
		var cancelButton = {name:"cancel"};
		window.history.pushState(cancelButton, "Cancel button");
	});
	$('#Sign_Up_Submit').click(function(){
		$('#SignUpForm').hide(100);
		$('#SignUpSuccessMsg').show(200);
		var SubmitSignUp = {name:"SubmitSignUp"};
		window.history.pushState(SubmitSignUp, "Sign Up Submit");
	});
});


window.addEventListener("popstate", function(e){
	window.history.back();
});