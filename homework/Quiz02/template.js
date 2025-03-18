function getWelcomeTemplate({name, regNum, phoneNum, favSite}){
    const mytemplate = 
    `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!</h1>
                <hr />
                <div>이메일 : ${name}</div>
                <div>주민번호 : ${regNum}</div>
                <div>휴대폰 번호 : ${phoneNum}</div>
                <div>내가 좋아하는 사이트트 : ${favSite}</div>
            </body>
        </html>
    `
    console.log(mytemplate)
}


const name = "박준제"
const regNum = "021122-3******"
const phoneNum = "01030328103"
const favSite = "chicken.com"

getWelcomeTemplate({name,regNum,phoneNum,favSite})