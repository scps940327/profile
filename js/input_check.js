var $data_notify_default = "Can not be empty!",
	$data_notify_mail = "Please enter the correct e-mail.",
	$data_notify_pass = "Please check the password.";
function check_submit(object) //FORM_CHECK
{
	
	reEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/; 
	object.find(".required").each(function() {
        if($(this).val()==""){
			$(this).addClass("invalid").next(".notify").remove();
			if($(this).attr("data-notify")){
				$(this).after("<span class='notify'>"+$(this).attr("data-notify")+"</span>");
			}else{
				$(this).after("<span class='notify'>"+$data_notify_default+"</span>");
			}
		}else if($(this).hasClass("mail_check")){ //E-mail Check
			if($(this).val().search(reEmail) == "-1"){
				$(this).addClass("invalid").next(".notify").remove();
				$(this).after("<span class='notify'>"+$data_notify_mail+"</span>");
			}else{
				$(this).removeClass("invalid");
				$(this).next(".notify").remove();
			}
		}else if($(this).hasClass("pw_check")){ //Password Check
			if(!$(this).hasClass("pw_db_check")){
				var $db_check = $(this).parents("form").find("input.pw_db_check");
				if($(this).val().length < 6 || $(this).val().length > 12){
					$(this).addClass("invalid").next(".notify").remove();
					$(this).after("<span class='notify'>"+$data_notify_pass+"</span>");
				}else{
					$(this).removeClass("invalid");
					$(this).next(".notify").remove();
					//do pw db check
					if($(this).val() != $db_check.val()){
						$db_check.addClass("invalid").next(".notify").remove();
						$db_check.after("<span class='notify'>"+$data_notify_pass+"</span>");
						return false;
					}

				}
			}else{ //if it's db_check_input
				if($(this).val().length < 6 || $(this).val().length > 12){
					$(this).addClass("invalid").next(".notify").remove();
					$(this).after("<span class='notify'>"+$data_notify_pass+"</span>");
				}else{
					$(this).removeClass("invalid");
					$(this).next(".notify").remove();
				}
			}
			
		}else{
			$(this).removeClass("invalid");
			$(this).next(".notify").remove();
		}
    });
	
	if (object.find("*").hasClass("invalid")){
		return false;
	}else{
		return true;
	};
}