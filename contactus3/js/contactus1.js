function to_check(v){
 if (v=="index.html"){

	if ($('.dk_email').val()==""){
		$('.dk_email').focus();
		alert("請輸入您的email");
		return;
	}
	if (chkemail($('.dk_email').val())==0){
		$('.dk_email').focus();
		alert("email格式不正確");
		return;
	}
}









 var result = "";
 var stairs = parseInt($('.pc_stairs').val());
 if ($('.pc_smokes1').is(':checked')){  //有抽
     if ($('.pc_q2-1').is(':checked') || $('.pc_q2-2').is(':checked') || $('.pc_q2-3').is(':checked')){  //有喘咳痰
     	  if (stairs<30){
     	  	 result = "1";
     	  }
     	  if (stairs>=30 && stairs<50){
     	  	 result = "2";
     	  }
     	  if (stairs>=50 && stairs<80){
     	  	 result = "3";
     	  }
     	  if (stairs>=80){
     	  	 result = "4";
     	  }
     }else{
     	  result = "5";
     }
 }
 if ($('.pc_smokes2').is(':checked')){  //沒抽
     if ($('.pc_q2-1').is(':checked') || $('.pc_q2-2').is(':checked') || $('.pc_q2-3').is(':checked')){  //有喘咳痰
     	  result = "5";
     }else{
     	  if (stairs>=80){
     	  	 result = "6";
     	  }
     	  if (stairs<80){
     	  	 result = "7";
     	  }
     }
 }
 
 var sex = "";
 var smokes = "";
 var Q2 = "";
 if ($('.pc_sex1').is(':checked')){
 	 sex = $('.pc_sex1').val();
 }
 if ($('.pc_sex2').is(':checked')){
 	 sex = $('.pc_sex2').val();
 }
 if ($('.pc_smokes1').is(':checked')){
 	 smokes = $('.pc_smokes1').val();
 }
 if ($('.pc_smokes2').is(':checked')){
 	 smokes = $('.pc_smokes2').val();
 }
 if ($('.pc_q2-1').is(':checked')){
 	 if (Q2!="") Q2 += ",";
 	 Q2 += $('.pc_q2-1').val();
 }
 if ($('.pc_q2-2').is(':checked')){
 	 if (Q2!="") Q2 += ",";
 	 Q2 += $('.pc_q2-2').val();
 }
 if ($('.pc_q2-3').is(':checked')){
 	 if (Q2!="") Q2 += ",";
 	 Q2 += $('.pc_q2-3').val();
 }
 try{
	 $.ajax({
		   type: 'post',
		   data: {'entry.1550439234': $('.pc_age').val(),  //年齡
		   	   	  'entry.1193757': sex,  //性別
		   	   	  'entry.1583882994': $('.pc_email').val(),  //Email
		   	   	  'entry.1742888091': smokes,  //Q1
		   	   	  'entry.676901967': Q2,  //Q2
		   	   	  'entry.2056266234': $('.pc_stairs').val(),  //幾階
		   	   	  'entry.339881142': 'pc',  //裝置
		   	   },
		   dataType: 'text',
		   url: 'https://docs.google.com/forms/u/4/d/e/1FAIpQLSfYEylFba6629WYdheHUhBNVrJt2BPGwjUXK1lNYXaRaOGIrw/formResponse',
		   success: function(data){
		   	   alert("感謝你參加測驗~");
		   	   location.href="result-"+result+".html";
		   },
		   error: function(data){
		   	   alert("感謝你參加測驗~");
		   	   location.href="result-"+result+".html";
		   }
	  });
  }catch(err) {
	  alert("抽獎測驗已送出~感謝你參加!");
	  location.href="result-"+result+".html";
  }
 
}

function chkemail(a){
	var regExp = /^[^@^\s]+@[^\.@^\s]+(\.[^\.@^\s]+)+$/;
	if ( a.match(regExp) )
		return 1;
	else
		return 0;		
}