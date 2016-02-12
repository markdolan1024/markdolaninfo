var session_var = "undefined";

var idle_time = 0;
var session_timer_id = 0;
var idleInterval = 0;

$(document).ready(function(){
	 
	$("#idle_timer").html(idle_time);
	
	$(this).mousemove(function (e){
		idle_time = 0;
		$("#idle_timer").html(idle_time);
	});
	
	$(this).keypress(function (e){
		idle_time = 0;
		$("#idle_timer").html(idle_time);
	});


	$("#login").click(function(){
		$.ajax({
			url : "login.php",
			success : function(data){
				console.log(data);
				session_var = data;
				$("#session_var").html(session_var);
			},
			error : function(jqXHR, textStatus, errorThrown){
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
		});
		idleInterval = setInterval(timerIncrement, 3000);
	});
	
	$("#logout").click(function(){
		$.ajax({
			url : "logout.php",
			success : function(data){
				console.log(data);
				session_var = data;
				$("#session_var").html(session_var);
			},
			error : function(jqXHR, textStatus, errorThrown){
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
		});
		clearInterval(idleInterval);
	});
	
	$("#session_var").html(session_var);
});

var logout = function(){
	$.ajax({
		url : "logout.php",
		success : function(data){
			console.log(data);
			session_var = data;
			$("#session_var").html(session_var);
			window.location.assign("loggedout.html");
		},
		error : function(jqXHR, textStatus, errorThrown){
			console.log(jqXHR);
			console.log(textStatus);
			console.log(errorThrown);
		}
	});
}

function timerIncrement(){
	idle_time = idle_time + 1;
	$("#idle_timer").html(idle_time);
	if(idle_time > 3){
		logout();
	}
}
