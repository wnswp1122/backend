function customRegistrationNumber(number){
    if(checkFormat1(number)) console.log("에러 발생!!! 형식이 올바르지 않습니다!!!")
    else if(checkFormat2(number)) console.log("에러 발생!!! 개수를 제대로 입력해 주세요!!!")
    else console.log(changeNum(number))
}

function checkFormat1(number){
    return !(number.includes('-'))
}

function checkFormat2(number){
    parts = number.split('-')
    return !(parts[0].length == 6 && parts[1].length == 7)
}

function changeNum(number){
    return number.substring(0,8) + "******";

}

customRegistrationNumber("210510-1010101")
