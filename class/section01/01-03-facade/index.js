function checkPhone(number){
    if(number.length < 10 || number.length > 11){
       console.log("error! 핸드폰 번호를 제대로 입력해 주세요!!"); //early-exit 패턴
       return false;
    }
    else{
        return true;
    }
}

function getToken(){
    result = String(Math.floor(Math.random()*1000000)).padStart(6,"0");
    return result;
}

function sendTokenToSMS(number,result){
    console.log(number +" 번호로 인증번호 " + result + "를 전송합니다.");
}



function createToken(number){
    const isValid = checkPhone(number);
    if(isValid === false) return

    const token = getToken();

    sendTokenToSMS(number,token);

}

createToken("01030328103"); 