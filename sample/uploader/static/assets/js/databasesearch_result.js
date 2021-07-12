
//js for Yearpicker

$(document).ready(function() {
	  $(".yearpicker").yearpicker({
		year: 2020,
		startYear: 2010,
		endYear: 2027
	  });
	});
	
//js for send mail model interview type selection	
	$(document).ready(function(){
	  $("#TelephonicRadio").click(function(){
	  $("#walkininterview").hide();
		$("#telephonicinterview").show();	
	  });
	  $("#Walkinraio").click(function(){
	  $("#telephonicinterview").hide();
		$("#walkininterview").show();	
	  });
	});
	
	
	//js for save to folder model foldersave type selection	
	$(document).ready(function(){
	  $("#existingfolderadio").click(function(){
	  $("#newfoldersave").hide();
		$("#existingfoldersave").show();	
	  });
	  $("#newfolderadio").click(function(){
	  $("#existingfoldersave").hide();
		$("#newfoldersave").show();	
	  });
	});
	
	// js for show contact button onclick
	
	$(document).ready(function(){
	  $("#hide").click(function(){
	  $("#hide").hide();
		$("#show").show();	
	  });
	  $("#hide1").click(function(){
	  $("#hide1").hide();
		$("#show1").show();	
	  });
	  $("#hide3").click(function(){
	  $("#hide3").hide();
		$("#show3").show();	
	  });
	});
	
	//js for show contact button tooltip
	
	$('[data-toggle="popover"]').popover({
         trigger: 'hover',
        'placement': 'bottom'
        });

//js for input field with tag tokenfield

	$('#tokenfield').tokenfield({
         autocomplete: {
            delay: 100
         },
         showAutocompleteOnFocus: true
        })


					
					
//js for previewmail walkin

     function previewmaildata(){
    	 var interviewtype = document.getElementById('Walkinraio').value;
 		document.getElementById("re_Walkinraio").innerHTML = interviewtype;
 		
 		
		var walkcompany = document.getElementById('walkcompanyname').value;
		document.getElementById("walkincompanyname1").innerHTML = walkcompany;
		document.getElementById("walkincompanyname2").innerHTML = walkcompany;

		var walkjobposition = document.getElementById('walkinjobpositionname').value;
		document.getElementById("re_walkinjobpositionname").innerHTML = walkjobposition;

		var walkincity = document.getElementById('walkincityname').value;
		document.getElementById("re_walkincityname").innerHTML = walkincity;

		var walkincityinterview = document.getElementById('walkincityinterviewdate').value;
		document.getElementById("re_walkincityinterviewdate").innerHTML = walkincityinterview;

        
		var datepickerselect = document.getElementById('datepickerselect').value;
		document.getElementById("re_datepickerselect").innerHTML = datepickerselect;
		
	 }

//js for telephonic previewmail


 function previewmaildatatelephonic(){
	 var interviewtype = document.getElementById('TelephonicRadio').value;
		document.getElementById("re_TelephonicRadio").innerHTML = interviewtype;
	 
		var telephonicjobposition = document.getElementById('telephoniccompanyname').value;
		document.getElementById("re_telephoniccompanyname1").innerHTML = telephonicjobposition;
		document.getElementById("re_telephoniccompanyname2").innerHTML = telephonicjobposition;

		var telephonicjobposition = document.getElementById('telephonicjobpositionname').value;
		document.getElementById("re_telephonicjobpositionname").innerHTML = telephonicjobposition;

		var telephonicinterview = document.getElementById('telephonicinterviewdate').value;
		document.getElementById("re_telephonicinterviewdate").innerHTML = telephonicinterview;

		var telephonicreporting = document.getElementById('telephonicreportingtime').value;
		document.getElementById("re_telephonicreportingtime").innerHTML = telephonicreporting;

	 }
	
	