
var userInfo = prompt("���� �����͸� �Է��ϼ���: "); 
  const myString = ' ';
  var userArr  = userInfo.split(' ');
  let userNum = userArr[0]+1;
  
  for (var i=1; i<userNum; i++) {
    var userObj = {};
    let key = userArr[2*i-1];
    let value = userArr[2*i+1];
    userObj.key = value;
}
for(var prop in userObj) {
   console.log(`userObj.${prop} = ${userObj[prop]}`);
  }


