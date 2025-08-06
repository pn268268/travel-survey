var frmvalidator  = new Validator("dkf1");


  frmvalidator.addValidation("entry.1899266587","dontselect=000","請選擇度假村");
  frmvalidator.addValidation("entry.1102204105","dontselect=000","請選擇行程類型");
  frmvalidator.addValidation("entry.301730276","req","請填寫出發日期");
  frmvalidator.addValidation("entry.1778902707","dontselect=000","請選擇住宿晚數");
  frmvalidator.addValidation("entry.942315830","dontselect=000","請選擇您的旅遊顧問");
  frmvalidator.addValidation("entry.393548609","req","請填寫備註文字");
  frmvalidator.addValidation("entry.393548609","maxlen=200","備註文字限制200個字元");




  frmvalidator.addValidation("entry.1768911321","req","請填旅客1-英文姓氏");
  frmvalidator.addValidation("entry.1768911321","maxlen=50");
  frmvalidator.addValidation("entry.1768911321","alphabetic_space","旅客1-英文姓氏限填英文字母");

  frmvalidator.addValidation("entry.907295165","req","請填旅客1-英文名子");
  frmvalidator.addValidation("entry.907295165","maxlen=50");
  frmvalidator.addValidation("entry.907295165","alphabetic_space","旅客1-英文名子限填英文字母");

  frmvalidator.addValidation("entry.577191633","req","請填寫旅客1-生日");

  frmvalidator.addValidation("entry.1166802696","selone","請填寫旅客1-性別");

  frmvalidator.EnableMsgsTogether();
  frmvalidator.addValidation("entry.1880712568","req","請填寫旅客1-中文姓名");
  frmvalidator.addValidation("entry.1880712568","maxlen=20","Max length for FirstName is 20");

  frmvalidator.addValidation("entry.2089118623","req","請填旅客1-身分證字號(外籍旅客填寫護照號碼)");
  frmvalidator.addValidation("entry.2089118623","maxlen=50");
  frmvalidator.addValidation("entry.2089118623","alnum","旅客1-身分證字號(外籍旅客填寫護照號碼)限填英文字母");

  frmvalidator.addValidation("entry.1077391629","maxlen=100","旅客1-備註文字限制100個字元");


  frmvalidator.addValidation("entry.714104447","selone","請選擇聯絡人性別");

  frmvalidator.EnableMsgsTogether();
  frmvalidator.addValidation("entry.949400710","req","請填寫姓名");
  frmvalidator.addValidation("entry.949400710","maxlen=20","Max length for FirstName is 20");
  
	
  frmvalidator.addValidation("entry.1246019802","req","請填寫電話");
  frmvalidator.addValidation("entry.1246019802","maxlen=50");
  /*frmvalidator.addValidation("entry.1246019802","numeric","請填寫正確的電話格式");*/	

  frmvalidator.addValidation("entry.998837620","maxlen=50");
  frmvalidator.addValidation("entry.998837620","req","請填寫正確的email格式");
  frmvalidator.addValidation("entry.998837620","email","請填寫正確的email格式");

  frmvalidator.addValidation("entry.1316820184","req","請填寫備註");
  frmvalidator.addValidation("entry.1316820184","maxlen=200","請填寫備註");  

  frmvalidator.addValidation("entry.1464847301","shouldselchk=同意","請勾選同意訂位條款");
  frmvalidator.addValidation("entry.40777154","shouldselchk=同意","請勾選同意個資使用");  


 frmvalidator.addValidation("entry.1995873326","req","請至少填寫成人參加人數");
  frmvalidator.addValidation("entry.1995873326","maxlen=50");
  frmvalidator.addValidation("entry.1995873326","num","參加人數限填數字");