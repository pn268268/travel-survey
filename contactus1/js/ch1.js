var frmvalidator  = new Validator("dkf1");

  frmvalidator.EnableMsgsTogether();
  frmvalidator.addValidation("entry.2106913930","req","�ж�g�m�W");
  frmvalidator.addValidation("entry.2106913930","maxlen=20",	"Max length for FirstName is 20");
  
	
  frmvalidator.addValidation("entry.1595398665","req","�ж�g�q��");
  frmvalidator.addValidation("entry.1595398665","maxlen=50");
  /*frmvalidator.addValidation("entry.1644884692","numeric","�ж�g���T���q�ܮ榡");	*/

  frmvalidator.addValidation("entry.152707526","maxlen=50");
  frmvalidator.addValidation("entry.152707526","req","�ж�g���T��email�榡");
  frmvalidator.addValidation("entry.152707526","email","�ж�g���T��email�榡");
	
  frmvalidator.addValidation("entry.1151788513","dontselect=000","�п�ܫװ���");

  frmvalidator.addValidation("entry.1048795478","maxlen=100","�Ƶ���r����100�Ӧr��");
  
  frmvalidator.addValidation("entry.1857237626","shouldselchk=�P�N","�ФĿ�P�N�Ӹ�ϥ�");
  