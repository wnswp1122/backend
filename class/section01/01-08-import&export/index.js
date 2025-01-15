import {checkEmail, getWelcomeTemplate, sendTemplateToEmail} from './email.js'

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