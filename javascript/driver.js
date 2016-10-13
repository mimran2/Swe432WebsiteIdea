/*jQuery(document).ready(function($){
	$('#Sign_In').click(function(){
		$('#SignInBox').toggle(200);
		$('#headliner').show(200);
		$('#SignUpForm').hide(200);
		$('#SignUpSuccessMsg').hide();
	});
	
	$('#Sign_Up').click(function(){
		$('input').val('');
		$('#SignUpForm').show(200);
		$('#headliner').hide(200);
		$('#SignInBox').hide(200);
		$('#SignUpSuccessMsg').hide();
	});
	$('#cancelButton').click(function(){
		$('input').val('');
		$('#SignUpForm').hide(200);
		$('#headliner').show(200);
		$('#SignUpSuccessMsg').hide();
	});
	$('#Sign_Up_Submit').click(function(){
		$('#SignUpForm').hide(100);
		$('#SignUpSuccessMsg').show(200);
		data_process();
	});
});*/

//https://gist.github.com/tobytailor/1164818 don't know why it doesnt work
if(window.history && history.pushState){ // check for history api support
	window.addEventListener('load', function(){
		// create history states
		history.pushState(-1, null); // back state
		history.pushState(0, null); // main state
		history.pushState(1, null); // forward state
		history.go(-1); // start in main state
				
		this.addEventListener('popstate', function(event, state){
			// check history state and fire custom events
			if(state = event.state){
	
				event = document.createEvent('Event');
				event.initEvent(state > 0 ? 'next' : 'previous', true, true);
				this.dispatchEvent(event);
				
				// reset state
				history.go(-state);
			}
		}, false);
	}, false);
}
window.addEventListener('next', function(){
 		console.log('forward button clicked');
 	}, false);
 
 	window.addEventListener('previous', function(){
 		console.log('back button clicked');
 	}, false);


//Store data from the submission form

function data_process(){
	//Stripping out the username from email for node name
	var userN = $('#new_user').val();
	var userName_strip = "";
	for(var i=0, len=userN.length; i < len; i++){
		if (userN[i] == "@")
			break;
		else{
			userName_strip += userN[i];
		}
	}
	//creating the node
	var user = firebase.database().ref('user_list/' + userName_strip);

	//Error checking -- not working yet
	/*
	if ($('#new_password').val() == $('#re_new_password').val()){
		//done
	}
	else{
		//do something
	}
	*/
	var gender;
	if ($('#Male').prop("checked") && !$('#Female').prop("checked")){
		gender = "Male";
	}
	else if (!$('#Male').prop("checked") && $('#Female').prop("checked")){
		gender = "Female";
	}
	else{
		//send error message
	}

	var occupation;
	if ($('#Teacher').prop("checked") && !($('#Student').prop("checked"))){
		occupation = "Student";
	}
	else if (!$('#Teacher').prop("checked") && $('#Student').prop("checked")){
		occupation = "Teacher";
	}
	else{
		//send error message
	}
	//Push everything to Firebase
	user.set(
		{username: $('#new_user').val(),
		password: $('#new_password').val(),
		question: $('#security_question').val(),
		answer: $('#security_ans').val(),
		FirstName: $('#f_name').val(),
		LastName: $('#l_name').val(),
		MiddleInitial: $('#m_i').val(),
		Birthday: $('#DOB').val(),
		Gender: gender,
		Address: $('#Street').val()+" "+$('#Apt').val()+" "+$('#City').val()+" "+$('#State').val()+" "+$('#ZIP').val(),
		Occupation: occupation,
		School: $('#school_name').val()}
	);
};



