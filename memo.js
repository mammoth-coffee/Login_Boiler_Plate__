// npm install body-parser --save
// register router(api)
// bodyparser, userschema가 필요함
// 사용자의 입력정보 -> bodyParser을 통해서 -> req.body에 적합한 형태로 변환
// 그 후 User스키마에 넣어주기
// user.save : mongodb method
// 에러가 발생 -> json형식으로 전달 : {k : v, k : v, ...}

// 개발할 때, 두가지 환경 development dev(local), production dev(deploy 이후)
// process.env.NODE_ENV = development or production 
