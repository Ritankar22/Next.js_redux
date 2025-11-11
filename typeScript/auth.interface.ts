//register form send-data
export interface RegisterData {
    id: string;
    email: string;
    name: string;
    address: string;
    imagePath: File;
    password:string;
    confirmPassword:string;
}
interface registerPayload {
    status: boolean,
    message: string,
    user: {
        id: string,
        name: string,
        email: string,
        address: string,
        imagePath: string,
    },
    token: string;
}
export interface IRegisterResponse extends registerPayload {
    data: registerPayload;
}
//........................Register end...............................//

// OTP form send-data
export interface OtpData {
    id: string;
    otp: string;
}
interface otpPayload {
    status: boolean,
    message: string;
}
export interface IOtpResponse extends otpPayload {
    data: otpPayload;
}
//.................OTP END................................//

// Login form send-data 
export interface LoginData {
    id: string,
    email: string,
    password: string,
}
interface loginPayload {
    status: boolean,
    message: string,
    user: {
        id: string,
        name: string,
        email: string,
    },
    token: string,
}
export interface ILoginResponse extends loginPayload{
    data:loginPayload;
}

//...................login end.....................//

//UpdatePassword//

export interface UpdatePasswordData{
    oldPassword: string,
    newPassword: string,
}
interface UpdatePasswordPayload{
    status: boolean,
    message: string,
}
export interface IUpdatePasswordResponse extends UpdatePasswordPayload{
    data:UpdatePasswordPayload;
}

export interface forgotPasswordData {
  email: string;
}
interface forgotPasswordPayload {
  status: boolean;
  message: string;
}
export interface IForgotPasswordResonse extends forgotPasswordPayload {
  data: forgotPasswordPayload;
}


export interface resetPasswordData {
  password: string;
  confirm_password: string;
}
interface resetPasswordPayload {
  status: boolean;
  message: string;
}
export interface ResetPasswordArgs {
  id: string;
  token: string;
  payload: resetPasswordData;
}
export interface IResetPasswordResonse extends resetPasswordPayload {
  data: resetPasswordPayload;
}
//.........................................
export interface ProfilePayload {
  status: true;
  message: string;
  data: {
    _id: string;
    name: string;
    email: string;
    address: string;
    imagePath: string;
    is_verified: boolean;
    password: string;
    __v: number;
  };
}





