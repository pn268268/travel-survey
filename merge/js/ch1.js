var frmvalidator = new Validator("dkf1");

// contactus2
frmvalidator.EnableMsgsTogether();
frmvalidator.addValidation("entry.460518941", "req", "請輸入您的姓名");
frmvalidator.addValidation("entry.460518941", "maxlen=20", "Max length for FirstName is 20");

frmvalidator.addValidation("entry.1678893250", "req", "請輸入您的電話");
frmvalidator.addValidation("entry.1678893250", "maxlen=50");
// frmvalidator.addValidation("entry.1678893250","numeric","電話格式不正確");

frmvalidator.addValidation("entry.2004844878", "maxlen=50");
frmvalidator.addValidation("entry.2004844878", "req", "請輸入您的email");
frmvalidator.addValidation("entry.2004844878", "email", "email格式不正確");

frmvalidator.addValidation("entry.1292568752", "req", "請輸入您的出發日期");

frmvalidator.addValidation("entry.60787040", "dontselect=000", "請選擇您的度假村");

frmvalidator.addValidation("entry.167125722", "dontselect=000", "請選擇您的行程類型");

frmvalidator.addValidation("entry.52322945", "req", "請輸入您的旅遊顧問");
frmvalidator.addValidation("entry.52322945", "maxlen=50");
frmvalidator.addValidation("entry.52322945", "num", "旅遊顧問格式不正確");

frmvalidator.addValidation("entry.776469579", "dontselect=000", "請選擇您的住宿晚數");

frmvalidator.addValidation("entry.1067166830", "maxlen=100", "請輸入您的房型備註");

frmvalidator.addValidation("entry.836360585", "shouldselchk=男,女", "請選擇您的性別");

// contactus3
var frmvalidator = new Validator("dkf2");

frmvalidator.addValidation("entry.1899266587", "dontselect=000", "請選擇您的國家");
frmvalidator.addValidation("entry.1102204105", "dontselect=000", "請選擇您的住宿晚數");
frmvalidator.addValidation("entry.301730276", "req", "請輸入您的出發日期");
frmvalidator.addValidation("entry.1778902707", "dontselect=000", "請選擇您的行程類型");
frmvalidator.addValidation("entry.942315830", "dontselect=000", "請選擇您的度假村");
frmvalidator.addValidation("entry.393548609", "req", "請輸入您的旅遊顧問");
frmvalidator.addValidation("entry.393548609", "maxlen=200", "請輸入您的旅遊顧問");

frmvalidator.addValidation("entry.1768911321", "req", "請輸入您的護照英文姓氏");
frmvalidator.addValidation("entry.1768911321", "maxlen=50");
frmvalidator.addValidation("entry.1768911321", "alphabetic_space", "護照英文姓氏格式不正確");

frmvalidator.addValidation("entry.907295165", "req", "請輸入您的護照英文名字");
frmvalidator.addValidation("entry.907295165", "maxlen=50");
frmvalidator.addValidation("entry.907295165", "alphabetic_space", "護照英文名字格式不正確");

frmvalidator.addValidation("entry.577191633", "req", "請輸入您的護照英文名字");

frmvalidator.addValidation("entry.1166802696", "selone", "請選擇您的性別");

frmvalidator.EnableMsgsTogether();
frmvalidator.addValidation("entry.1880712568", "req", "請輸入您的護照英文名字");
frmvalidator.addValidation("entry.1880712568", "maxlen=20", "Max length for FirstName is 20");

frmvalidator.addValidation("entry.2089118623", "req", "請輸入您的護照英文名字");
frmvalidator.addValidation("entry.2089118623", "maxlen=50");
frmvalidator.addValidation("entry.2089118623", "alnum", "護照英文名字格式不正確");

frmvalidator.addValidation("entry.1077391629", "maxlen=100", "請輸入您的護照英文名字");

frmvalidator.addValidation("entry.714104447", "selone", "請選擇您的性別");

frmvalidator.EnableMsgsTogether();
frmvalidator.addValidation("entry.949400710", "req", "請輸入您的護照英文名字");
frmvalidator.addValidation("entry.949400710", "maxlen=20", "Max length for FirstName is 20");


frmvalidator.addValidation("entry.1246019802", "req", "請輸入您的護照英文名字");
frmvalidator.addValidation("entry.1246019802", "maxlen=50");
// frmvalidator.addValidation("entry.1246019802","numeric","護照英文名字格式不正確");

frmvalidator.addValidation("entry.998837620", "maxlen=50");
frmvalidator.addValidation("entry.998837620", "req", "請輸入您的護照英文名字");
frmvalidator.addValidation("entry.998837620", "email", "email格式不正確");

frmvalidator.addValidation("entry.1316820184", "req", "請輸入您的護照英文名字");
frmvalidator.addValidation("entry.1316820184", "maxlen=200", "請輸入您的護照英文名字");

frmvalidator.addValidation("entry.1464847301", "shouldselchk=男,女", "請選擇您的性別");
frmvalidator.addValidation("entry.40777154", "shouldselchk=男,女", "請選擇您的性別");

// frmvalidator.addValidation("entry.1995873326", "req", "請輸入您的護照英文名字");
// frmvalidator.addValidation("entry.1995873326", "maxlen=50");
// frmvalidator.addValidation("entry.1995873326", "num", "護照英文名字格式不正確");