function checkEmail(email){
    if(email === undefined || email.includes("@") === false){
        console.log("error! 이메일 주소를 제대로 입력해 주세요")
        return false
    }
    else return true
}

const getWelcomeTemplate = ({name, age, school, createdAt}) =>{
    const mytemplate = 
    `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!</h1>
                <hr />
                <div>이름 : ${name}</div>
                <div>나이 : ${age}</div>
                <div>학교 : ${school}</div>
                <div>가입일 : ${createdAt}</div>
            </body>
        </html>
    `
    return mytemplate
}

const sendTemplateToEmail = (email,result) => {
    console.log(email +" 로 가입환영템플릿 " + result + "를 전송합니다.");
}

const createUser = ({name,age,school,email,createdAt}) => {
    const isValid = checkEmail(email);
    if(isValid === false) return

    const templete = getWelcomeTemplate({name,age,school,email,createdAt})

    sendTemplateToEmail(email,templete);
}

const name = "박준제"
const age = 24
const school = "인천대학교"
const email = "wnswp1122@naver.com"
const createdAt = "2025-01-15"

createUser({name,age,school,email,createdAt})