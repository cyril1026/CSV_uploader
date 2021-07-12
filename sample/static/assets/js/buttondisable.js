// to disable and enabling the buttons like download,sendmail and etc...

$(document).ready(function(){
        	 $("#download").attr("disabled", "disabled");
        	 $("#mailsend").attr("disabled", "disabled");
        	 $("#smssend").attr("disabled", "disabled");
        	 $("#dropdown-running-projects").attr("disabled", "disabled");
        	 $('input[name="profilecheck"]').click(function() {	
        		 var checked_status = this.checked;
        		    if (checked_status == true) {
        		       $("#download").removeAttr("disabled");
        		       $("#mailsend").removeAttr("disabled");
        		       $("#smssend").removeAttr("disabled");
        		       $("#dropdown-running-projects").removeAttr("disabled");
        		    } else {
        		    	$("#download").attr("disabled", "disabled");
        	        	 $("#mailsend").attr("disabled", "disabled");
        	        	 $("#smssend").attr("disabled", "disabled");
        	        	 $("#dropdown-running-projects").attr("disabled", "disabled");
        		    }
        	 });
        	 
        	 $("#checkbox-bulk-purchases-select").change(function () {
        		    $('input[name="profilecheck"]').prop('checked', $(this).prop("checked"));
        		    var checked_status = this.checked;
        		    if (checked_status == true) {
        		       $("#download").removeAttr("disabled");
        		       $("#mailsend").removeAttr("disabled");
        		       $("#smssend").removeAttr("disabled");
        		       $("#dropdown-running-projects").removeAttr("disabled");
        		    } else {
        		    	$("#download").attr("disabled", "disabled");
        	        	 $("#mailsend").attr("disabled", "disabled");
        	        	 $("#smssend").attr("disabled", "disabled");
        	        	 $("#dropdown-running-projects").attr("disabled", "disabled");
        		    }
        		});
         });