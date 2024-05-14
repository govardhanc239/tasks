const isPasswordValid=(password)=>{
    let pattern = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/              
    return pattern.test(password)
}

const isPasswordMatch =(pwd,confirmPwd)=>{
    return pwd ===confirmPwd;
}
export {isPasswordValid,isPasswordMatch}