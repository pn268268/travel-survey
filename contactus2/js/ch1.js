var frmvalidator  = new Validator("dkf1");

  frmvalidator.EnableMsgsTogether();
  frmvalidator.addValidation("entry.460518941","req","�ж�g�m�W");
  frmvalidator.addValidation("entry.460518941","maxlen=20",	"Max length for FirstName is 20");
  
	
  frmvalidator.addValidation("entry.1678893250","req","�ж�g�q��");
  frmvalidator.addValidation("entry.1678893250","maxlen=50");
  /*frmvalidator.addValidation("entry.1678893250","numeric","�ж�g���T���q�ܮ榡");	*/

  frmvalidator.addValidation("entry.2004844878","maxlen=50");
  frmvalidator.addValidation("entry.2004844878","req","�ж�g���T��email�榡");
  frmvalidator.addValidation("entry.2004844878","email","�ж�g���T��email�榡");

  frmvalidator.addValidation("entry.1292568752","req","�ж�g�X�o���");

  frmvalidator.addValidation("entry.60787040","dontselect=000","�п�ܫװ���");
  
  frmvalidator.addValidation("entry.167125722","dontselect=000","�п�ܦ�J�߼�");

  frmvalidator.addValidation("entry.52322945","req","�Цܤֶ�g���H�ѥ[�H��");
  frmvalidator.addValidation("entry.52322945","maxlen=50");
  frmvalidator.addValidation("entry.52322945","num","�ѥ[�H�ƭ���Ʀr");

  frmvalidator.addValidation("entry.776469579","dontselect=000","�п�ܦ�{����");
  
  frmvalidator.addValidation("entry.1067166830","maxlen=100","�Ƶ���r����100�Ӧr��");
  
  frmvalidator.addValidation("entry.836360585","shouldselchk=�P�N","�ФĿ�P�N�Ӹ�ϥ�");