// 아이디, 비밀번호 인풋에서 영어만 포함할 수 있게 하는 정규식
export const idRegex = /^[a-zA-Z0-9]+$/;
export const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
