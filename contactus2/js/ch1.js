var frmvalidator  = new Validator("dkf1");

  frmvalidator.EnableMsgsTogether();
  frmvalidator.addValidation("entry.460518941","req","請填寫姓名");
  frmvalidator.addValidation("entry.460518941","maxlen=20",	"Max length for FirstName is 20");
  
	
  frmvalidator.addValidation("entry.1678893250","req","請填寫電話");
  frmvalidator.addValidation("entry.1678893250","maxlen=50");
  /*frmvalidator.addValidation("entry.1678893250","numeric","請填寫正確的電話格式");	*/

  frmvalidator.addValidation("entry.2004844878","maxlen=50");
  frmvalidator.addValidation("entry.2004844878","req","請填寫正確的email格式");
  frmvalidator.addValidation("entry.2004844878","email","請填寫正確的email格式");

  frmvalidator.addValidation("entry.1292568752","req","請填寫出發日期");

  frmvalidator.addValidation("entry.60787040","dontselect=000","請選擇度假村");
  
  frmvalidator.addValidation("entry.167125722","dontselect=000","請選擇住宿晚數");

  frmvalidator.addValidation("entry.52322945","req","請至少填寫成人參加人數");
  frmvalidator.addValidation("entry.52322945","maxlen=50");
  frmvalidator.addValidation("entry.52322945","num","參加人數限填數字");

  frmvalidator.addValidation("entry.776469579","dontselect=000","請選擇行程類型");
  
  frmvalidator.addValidation("entry.1067166830","maxlen=100","備註文字限制100個字元");
  
  frmvalidator.addValidation("entry.836360585","shouldselchk=同意","請勾選同意個資使用");