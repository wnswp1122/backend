function getCurTime(){
    const date = new Date()
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hour = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()
    return `오늘은 ${year}년 ${month}월 ${day}일 ${hour}:${min}:${sec} 입니다`
}

console.log(getCurTime())