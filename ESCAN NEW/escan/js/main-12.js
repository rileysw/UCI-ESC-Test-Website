$(function(){

	var student;
	var engineering = ['Engr AE','Engr BM','EngrBMP','EngrChm','Engr CE','EngrCpE','CSE','Engr EE','EngrEnv','Enr MSE','Engr ME', 'EngrMAE','BME', 'CBE', 'MSE', 'CE', 'CNDC', 'CSS', 'EE', 'CPE', 'EnE', 'MMT', 'NTWS', 'MAE', 'EM', 'EECS', 'ECE'];
	var icsAndEngineering = ['Engr AE','Engr BM','EngrBMP','EngrChm','Engr CE','EngrCpE','CSE','Engr EE','EngrEnv','Enr MSE','Engr ME', 'EngrMAE','BME', 'CBE', 'MSE', 'CE', 'CNDC', 'CSS', 'EE', 'CPE', 'EnE', 'MMT', 'NTWS', 'MAE', 'EM', 'EECS', 'ECE', 'CmptSci', 'BIM', 'IN4MATX', 'SW Engr', 'I&C Sci', 'CSGames'];
  $("#submit-UCINetID").click(function() {
    event.preventDefault();

		console.log("In first function");
		var obj = $(this).parent().parent();
		var _uciNetID = obj.find('input[name=uciNetID]').val().trim();
		var major = "";

		console.log("_uciNetID = " + _uciNetID);

		$.ajax({
				url: 'escan/studentCheckIn.php',
				type: 'POST',
				data: { action: "checkInStudent", uciNetId: _uciNetID, registerNonEngineer: "false"},
				async: false,
				success: function(data) {
					data = JSON.parse(data);
					this.student = data.studentInfo;
					major = data.studentInfo.Major;

					  if (parseInt(data.error) == 1) {
            					console.log("error detected ");
            					var heading = "Error: Invalid UCINetID";
				                var message = "Invalid UCINetId received. Please try again."
			                        $("#title").text(heading);
				                $("#notEngineering").text(message);
				                $('#myModal').modal({
					                keyboard: false,
					                backdrop: 'static'
				                });
				                return;
				          }
					var studentObject = data.studentInfo;

					// display a warning if non engineering student is picking up give away
					$("#pickedUpSwag").change(function() {             //.change(function()) executes when checkbox is checked/unchecked
						console.log("Picked UP GIVE AWAY = " + major);
						if (engineering.indexOf(major) <= -1) {
							var heading = "Warning: Only Engineers can pick up give away";
							var message = "Non-Engineering majors cannot pick up give away unless they are switching into Engineering."
							$("#title").text(heading);
							$("#notEngineering").text(message);
							$('#myModal').modal({
									keyboard: false,
									backdrop: 'static'
							});
						}
					});
          // display a warning if non engineering student is picking up give away #2
					$("#pickedUpSwag2").change(function() {
						console.log("Picked UP GIVE AWAY #2= " + major);
						if (engineering.indexOf(major) <= -1) {
							var heading = "Warning: Only Engineers can pick up give away";
							var message = "Non-Engineering majors cannot pick up give away unless they are switching into Engineering."
							$("#title").text(heading);
							$("#notEngineering").text(message);
							$('#myModal').modal({
									keyboard: false,
									backdrop: 'static'
							});
						}
					});
          // display a warning if non engineering student is picking up give away #3
					$("#pickedUpSwag3").change(function() {
						console.log("Picked UP GIVE AWAY #3 = " + major);
						if (engineering.indexOf(major) <= -1) {
							var heading = "Warning: Only Engineers can pick up give away";
							var message = "Non-Engineering majors cannot pick up give away unless they are switching into Engineering."
							$("#title").text(heading);
							$("#notEngineering").text(message);
							$('#myModal').modal({
									keyboard: false,
									backdrop: 'static'
							});
						}
					});
					// display a warning if non engineering student is being registered
					if (icsAndEngineering.indexOf(major) <= -1) {
						console.log("not an engineering major");
						var heading = "Warning: Not an Engineering Student";
						var message = "This event is primarily for Engineers and Computer Scientists. Your major is registered as a '" + major + "' major. If you believe you received this message in error, you can still register below by clicking continue and entering your major."
						$("#title").text(heading);
						$("#notEngineering").text(message);
						$('#myModal').modal({
								keyboard: false,
								backdrop: 'static'
						});
					}
					// show the attended events
					if (studentObject.Monday == null || studentObject.Monday == "") {
						$("#monday").hide();
					} else {
						$("input[name=monday]").val(studentObject.Monday);
					}
					if (studentObject.Tuesday == null || studentObject.Tuesday == "") {
						$("#tuesday").hide();
					} else {
						$("input[name=tuesday]").val(studentObject.Tuesday);
					}
					if (studentObject.Wednesday == null || studentObject.Wednesday == "") {
						$("#wednesday").hide();
					} else {
						$("input[name=wednesday]").val(studentObject.Wednesday);
					}
					if (studentObject.Thursday == null || studentObject.Thursday == "") {
						$("#thursday").hide();
					} else {
						$("input[name=thursday]").val(studentObject.Thursday);
					}
					if (studentObject.Friday == null || studentObject.Friday == "") {
						$("#friday").hide();
					} else {
						$("input[name=friday]").val(studentObject.Friday);
					}
					if (studentObject.Saturday == null || studentObject.Saturday == "") {
						$("#saturday").hide();
					} else {
						$("input[name=saturday]").val(studentObject.Saturday);
					}
					if (studentObject.Sunday == null || studentObject.Sunday == "") {
						$("#sunday").hide();
					} else {
						$("input[name=sunday]").val(studentObject.Sunday);
					}

					if((studentObject.Monday == null || studentObject.Monday == "")
						&& (studentObject.Tuesday == null || studentObject.Tuesday == "")
						&& (studentObject.Wednesday == null || studentObject.Wednesday == "")
						&& (studentObject.Thursday == null || studentObject.Thursday == "")
						&& (studentObject.Friday == null || studentObject.Friday == "")
						&& (studentObject.Saturday == null || studentObject.Saturday == "")
						&& (studentObject.Sunday == null || studentObject.Sunday == "")) {
						($("#noEventsAttended").show());
					} else {
						($("#noEventsAttended").hide());
					}

					// hide the submit button after uciNetId has been received
					$("#submit-UCINetID").hide();
					// display the student information form
					$("#studentInfo").show();
					// populate the student information form
					$("#formStudentInfo").children('input[name=studentName]').val(this.student.Name);
					$("#formStudentInfo").children('input[name=studentMajor]').val(this.student.Major);
					$("#formStudentInfo").children('input[name=studentEmail]').val(this.student.Email);
					//$("#formStudentInfo").children('input[name=studentLevel]').val(this.student.Level);

					console.log("this.student.PickedUpGiveAway = '" + this.student.PickedUpGiveAway + "'");

					// If student has not picked up the give away, hide the giveAway textbox
					if (this.student.PickedUpGiveAway == null || this.student.PickedUpGiveAway.trim() == "")
					{
						console.log("have NOT picked up swag");
						$("#divGiveAway").attr("hidden", "true");
						$("#formStudentInfo").children('input[name=pickedUpGiveAway]').val(" ");
					} else {
						console.log("have picked up swag (code block 1)");
						// check the checkbox if receive emails is already true
						$("#pickedUpSwag").attr("checked", "true");
						$("#pickedUpSwag").attr("disabled", "disabled");
						$("#pickedUpGiveAway").val(this.student.PickedUpGiveAway);
					}
          console.log("this.student.PickedUpGiveAway2 = '" + this.student.PickedUpGiveAway2 + "'");
          // If student has not picked up the give away, hide the giveAway #2 textbox
          if (this.student.PickedUpGiveAway2 == null || this.student.PickedUpGiveAway2.trim() == "")
          {
            console.log("have NOT picked up swag #2 (code block 1)");
            $("#divGiveAway2").attr("hidden", "true");
            $("#formStudentInfo").children('input[name=pickedUpGiveAway2]').val(" ");
          } else {
            console.log("have picked up swag #2 (code block 1)");
            // check the checkbox if pickedUpGiveaway2 is already true
            $("#pickedUpSwag2").attr("checked", "true");
            $("#pickedUpSwag2").attr("disabled", "disabled");
            $("#pickedUpGiveAway2").val(this.student.PickedUpGiveAway2);
          }
          console.log("this.student.PickedUpGiveAway3 = '" + this.student.PickedUpGiveAway3 + "'");
          // If student has not picked up the give away, hide the giveAway #3 textbox
          if (this.student.PickedUpGiveAway3 == null || this.student.PickedUpGiveAway3.trim() == "")
          {
            console.log("have NOT picked up swag #3 (code block 1)");
            $("#divGiveAway3").attr("hidden", "true");
            $("#formStudentInfo").children('input[name=pickedUpGiveAway3]').val(" ");
          } else {
            console.log("have picked up swag #3 (code block 1)");
            // check the checkbox if pickedUpGiveaway3 is already true
            $("#pickedUpSwag3").attr("checked", "true");
            $("#pickedUpSwag3").attr("disabled", "disabled");
            $("#pickedUpGiveAway3").val(this.student.PickedUpGiveAway3);
          }

					if (this.student.ReceiveEmails == "true")
					{
						$("#recieveEmails").attr("checked", "true");
					}
				},
				error:function(){
						alert("something went wrong: error 1");
				}
		});
	});

  $("#formUCINetID").submit(function() {
    event.preventDefault();

		console.log("Called submit function");
		var obj = $(this).parent().parent();
		var _uciNetID = obj.find('input[name=uciNetID]').val().trim();
		var major = "";

		console.log("_uciNetID = " + _uciNetID);

		$.ajax({
				url: 'escan/studentCheckIn.php',
				type: 'POST',
				data: { action: "checkInStudent", uciNetId: _uciNetID, registerNonEngineer: "false"},
				async: false,
				success: function(data) {
					data = JSON.parse(data);
					this.student = data.studentInfo;
					major = data.studentInfo.Major;

					  if (parseInt(data.error) == 1) {
            					console.log("error detected ");
            					var heading = "Error: Invalid UCINetID";
				                var message = "Invalid UCINetId received. Please try again."
			                        $("#title").text(heading);
				                $("#notEngineering").text(message);
				                $('#myModal').modal({
					                keyboard: false,
					                backdrop: 'static'
				                });
				                return;
				          }
					var studentObject = data.studentInfo;

					// display a warning if non engineering student is picking up give away
					$("#pickedUpSwag").change(function() {
						console.log("Picked UP GIVE AWAY = " + major);
						if (engineering.indexOf(major) <= -1) {
							var heading = "Warning: Only Engineers can pick up give away";
							var message = "Non-Engineering majors cannot pick up give away unless they are switching into Engineering."
							$("#title").text(heading);
							$("#notEngineering").text(message);
							$('#myModal').modal({
									keyboard: false,
									backdrop: 'static'
							});
						}
					});
          // display a warning if non engineering student is picking up give away #2
					$("#pickedUpSwag2").change(function() {
						console.log("Picked Up Giveaway #2 = " + major);
						if (engineering.indexOf(major) <= -1) {
							var heading = "Warning: Only Engineers can pick up giveaway(s)";
							var message = "Non-Engineering majors cannot pick up giveaway(s) unless they are switching into Engineering."
							$("#title").text(heading);
							$("#notEngineering").text(message);
							$('#myModal').modal({
									keyboard: false,
									backdrop: 'static'
							});
						}
					});
          // display a warning if non engineering student is picking up give away #3
					$("#pickedUpSwag3").change(function() {
						console.log("Picked Up Giveaway #3 = " + major);
						if (engineering.indexOf(major) <= -1) {
							var heading = "Warning: Only Engineers can pick up giveaway(s)";
							var message = "Non-Engineering majors cannot pick up giveaway(s) unless they are switching into Engineering."
							$("#title").text(heading);
							$("#notEngineering").text(message);
							$('#myModal').modal({
									keyboard: false,
									backdrop: 'static'
							});
						}
					});

					// display a warning if non engineering student is being registered
					if (icsAndEngineering.indexOf(major) <= -1) {
						console.log("not an engineering major");
						var heading = "Warning: Not an Engineering Student";
						var message = "This event is primarily for Engineers and Computer Scientists. Your major is registered as a '" + major + "' major. If you believe you received this message in error, you can still register below by clicking continue and entering your major."
						$("#title").text(heading);
						$("#notEngineering").text(message);
						$('#myModal').modal({
								keyboard: false,
								backdrop: 'static'
						});
					}

					// show the attended events
					if (studentObject.Monday == null || studentObject.Monday == "") {
						$("#monday").hide();
					} else {
						$("input[name=monday]").val(studentObject.Monday);
					}
					if (studentObject.Tuesday == null || studentObject.Tuesday == "") {
						$("#tuesday").hide();
					} else {
						$("input[name=tuesday]").val(studentObject.Tuesday);
					}
					if (studentObject.Wednesday == null || studentObject.Wednesday == "") {
						$("#wednesday").hide();
					} else {
						$("input[name=wednesday]").val(studentObject.Wednesday);
					}
					if (studentObject.Thursday == null || studentObject.Thursday == "") {
						$("#thursday").hide();
					} else {
						$("input[name=thursday]").val(studentObject.Thursday);
					}
					if (studentObject.Friday == null || studentObject.Friday == "") {
						$("#friday").hide();
					} else {
						$("input[name=friday]").val(studentObject.Friday);
					}
					if (studentObject.Saturday == null || studentObject.Saturday == "") {
						$("#saturday").hide();
					} else {
						$("input[name=saturday]").val(studentObject.Saturday);
					}
					if (studentObject.Sunday == null || studentObject.Sunday == "") {
						$("#sunday").hide();
					} else {
						$("input[name=sunday]").val(studentObject.Sunday);
					}

					if((studentObject.Monday == null || studentObject.Monday == "")
						&& (studentObject.Tuesday == null || studentObject.Tuesday == "")
						&& (studentObject.Wednesday == null || studentObject.Wednesday == "")
						&& (studentObject.Thursday == null || studentObject.Thursday == "")
						&& (studentObject.Friday == null || studentObject.Friday == "")
						&& (studentObject.Saturday == null || studentObject.Saturday == "")
						&& (studentObject.Sunday == null || studentObject.Sunday == "")) {
						($("#noEventsAttended").show());
					} else {
						($("#noEventsAttended").hide());
					}

					// hide the submit button after uciNetId has been received
					$("#submit-UCINetID").hide();
					// display the student information form
					$("#studentInfo").show();
					// populate the student information form
					$("#formStudentInfo").children('input[name=studentName]').val(this.student.Name);
					$("#formStudentInfo").children('input[name=studentMajor]').val(this.student.Major);
					$("#formStudentInfo").children('input[name=studentEmail]').val(this.student.Email);
					//$("#formStudentInfo").children('input[name=studentLevel]').val(this.student.Level);

					console.log("this.student.PickedUpGiveAway = '" + this.student.PickedUpGiveAway + "'");
          console.log("this.student.PickedUpGiveAway2 = '" + this.student.PickedUpGiveAway2 + "'");
          console.log("this.student.PickedUpGiveAway3 = '" + this.student.PickedUpGiveAway3 + "'");

					// If student has not picked up the give away, hide the giveAway textbox
					if (this.student.PickedUpGiveAway == null || this.student.PickedUpGiveAway.trim() == "")
					{
						console.log("have not picked up swag (code block 2)");
						$("#divGiveAway").attr("hidden", "true");
						$("#formStudentInfo").children('input[name=pickedUpGiveAway]').val(" ");
					} else {
						console.log("have picked up swag (code block 2)");
						// check the checkbox if receive emails is already true
						$("#pickedUpSwag").attr("checked", "true");
						$("#pickedUpSwag").attr("disabled", "disabled");
						$("#pickedUpGiveAway").val(this.student.PickedUpGiveAway);
					}

          if (this.student.PickedUpGiveAway2 == null || this.student.PickedUpGiveAway2.trim() == "")
          {
            console.log("have not picked up swag #2 (code block 2)");
            $("#divGiveAway2").attr("hidden", "true");
            $("#formStudentInfo").children('input[name=pickedUpGiveAway2]').val(" ");
          } else {
            console.log("have picked up swag #2 (code block 2)");
            // check the checkbox if already true
            $("#pickedUpSwag2").attr("checked", "true");
            $("#pickedUpSwag2").attr("disabled", "disabled");
            $("#pickedUpGiveAway2").val(this.student.PickedUpGiveAway2);
          }

          if (this.student.PickedUpGiveAway3 == null || this.student.PickedUpGiveAway3.trim() == "")
          {
            console.log("have not picked up swag #3 (code block 2)");
            $("#divGiveAway3").attr("hidden", "true");
            $("#formStudentInfo").children('input[name=pickedUpGiveAway3]').val(" ");
          } else {
            console.log("have picked up swag #3 (code block 2)");
            // check the checkbox if already true
            $("#pickedUpSwag3").attr("checked", "true");
            $("#pickedUpSwag3").attr("disabled", "disabled");
            $("#pickedUpGiveAway3").val(this.student.PickedUpGiveAway3);
          }

					if (this.student.ReceiveEmails == "true")
					{
						$("#recieveEmails").attr("checked", "true");
					}
				},
				error:function(){
						alert("something went wrong: error 2");
				}
		});
	});

	// update receive emails and picked up give away
	$("#submit-StudentInfo").click(function() {
		var _uciNetID = $("#submit-UCINetID").parent().parent().find('input[name=uciNetID]').val().trim();
		console.log("got the value = " + _uciNetID);
		var obj = $(this).parent().parent();
		var _giveAway = obj.find('input[name=pickedUpSwag]');

    var _giveAway2 = obj.find('input[name=pickedUpSwag2]');
    var _giveAway3 = obj.find('input[name=pickedUpSwag3]');

		var _receiveEmails = obj.find('input[name=recieveEmails]');
		var pickedUpGiveAway = $("#pickedUpSwag").is(':checked');
    var pickedUpGiveAway2 = $("#pickedUpSwag2").is(':checked');
    var pickedUpGiveAway3 = $("#pickedUpSwag3").is(':checked');

		var recieveEmails = _receiveEmails.is(':checked');

		console.log("pickedUpSwag = " + $("#pickedUpSwag").is(':checked'));
    console.log("pickedUpSwag2 = " + $("#pickedUpSwag2").is(':checked'));
    console.log("pickedUpSwag3 = " + $("#pickedUpSwag3").is(':checked'));
		console.log("recieveEmails = " + recieveEmails);

		$.ajax({
				url: 'escan/updateGiveAwayAndEmail.php',
				type: 'POST',
				data: { action: "updateInfo", uciNetId: _uciNetID, pickedUpGiveAway: pickedUpGiveAway,  pickedUpGiveAway2: pickedUpGiveAway2, pickedUpGiveAway3: pickedUpGiveAway3, recieveEmails: recieveEmails},
				async: false,
				success: function(data) {
					data = JSON.parse(data);
					var heading = "Registered!";
					var message = "You are now registered for today's event. Have Fun!."
					// $("#title").text(heading);
					// $("#notEngineering").text(message);
					alert(heading+ "\n" + message)
					console.log("student Name = " + data.giveAway + " " + data.emails)
          console.log("student Name = " + data.giveAway2 + " " + data.emails)
          console.log("student Name = " + data.giveAway3 + " " + data.emails)
					console.log("data receive = " + data.receive + " " + data.falseV)
				},
				error:function(){
						alert("something went wrong: error 3");
			  }
		});
		event.preventDefault();
		window.location.replace("http://esc.eng.uci.edu/escan.html");
	});
	//
	// $(document).unbind("keyup").keyup(function(e){
	//     var code = e.which; // recommended to use e.which, it's normalized across browsers
	//     if(code==13)
	//     {
	// 			// e.preventDefault();
	// 			$("#submit-UCINetID").click();
	//     }
	// });

});
