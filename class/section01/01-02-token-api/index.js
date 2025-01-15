function createToken(number){ //매개변수(parameter)
    // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
    if(number.length < 10 || number.length > 11){
        console.log("error! 핸드폰 번호를 제대로 입력해 주세요!!"); //early-exit 패턴
    }
    else{
        // 2. 토큰 6자리 만들기
         result = String(Math.floor(Math.random()*1000000)).padStart(6,"0");

        // 3. 핸드폰번호에 토큰 전송하기
        console.log(number +" 번호로 인증번호 " + result + "를 전송합니다.");
    }

}

createToken("01030328103"); //인자(argument)