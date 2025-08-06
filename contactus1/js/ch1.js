var frmvalidator  = new Validator("dkf1");

  frmvalidator.EnableMsgsTogether();
  frmvalidator.addValidation("entry.2106913930","req","請填寫姓名");
  frmvalidator.addValidation("entry.2106913930","maxlen=20",	"Max length for FirstName is 20");
  
	
  frmvalidator.addValidation("entry.1595398665","req","請填寫電話");
  frmvalidator.addValidation("entry.1595398665","maxlen=50");
  /*frmvalidator.addValidation("entry.1644884692","numeric","請填寫正確的電話格式");	*/

  frmvalidator.addValidation("entry.152707526","maxlen=50");
  frmvalidator.addValidation("entry.152707526","req","請填寫正確的email格式");
  frmvalidator.addValidation("entry.152707526","email","請填寫正確的email格式");
	
  frmvalidator.addValidation("entry.1151788513","dontselect=000","請選擇度假村");

  frmvalidator.addValidation("entry.1048795478","maxlen=100","備註文字限制100個字元");
  
  frmvalidator.addValidation("entry.1857237626","shouldselchk=同意","請勾選同意個資使用");
  