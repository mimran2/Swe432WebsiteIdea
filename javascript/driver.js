jQuery(document).ready(function($){
	$('#Sign_In').click(function(){
		$('#SignInBox').toggle(200);
		$('#headliner').show(200);
		$('#SignUpForm').hide(200);
		$('#SignUpSuccessMsg').hide();
		/////history.pushState({activePane: 'main'},"");
		// window.addEventListener('next', history.forward());
		// window.addEventListener('previous', history.back());
	});
	
	$('#Sign_Up').click(function(){
		$('#SignUpForm').show(200);
		$('#headliner').hide(200);
		$('#SignInBox').hide(200);
		$('#SignUpSuccessMsg').hide();
/////history.pushState({activePane: 'signup'},"");
		// window.addEventListener('next', function(){
		// history.pushState(1, null);
		// history.forward();
		// });
		// window.addEventListener('previous', function(){
		// history.pushState(-1, null);
		// history.back();
		// });
	});
	$('#cancelButton').click(function(){
		$('#SignUpForm').hide(200);
		$('#headliner').show(200);
		$('#SignUpSuccessMsg').hide();
		////////history.pushState({activePane: 'cancel'},"");
		// window.addEventListener('next', history.forward());
		// window.addEventListener('previous', history.back());
	});
	$('#Sign_Up_Submit').click(function(){
		$('#SignUpForm').hide(100);
		$('#SignUpSuccessMsg').show(200);
		//////history.pushState({activePane:'submit'},"");
		// window.addEventListener('next', history.forward());
		// window.addEventListener('previous', history.back());
	});
	// window.addEventListener('next', history.forward());
	// window.addEventListener('previous', history.back());
});

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


