import { Action } from '@ngrx/store';

export const SIGN_UP_START = '[Auth] Signup Start';
export const SIGN_UP = '[Auth] Signup';
export const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success';
export const LOGOUT = '[Auth] Logout';
export const LOGIN_START = '[Auth] Login Start';
export const AUTO_LOGIN = '[Auth] Auto Login';
export const AUTHENTICATE_FAIL = '[Auth] Authenticate Fail';
export const CLEAR_ERROR = '[Auth] Clear Error';

export class AuthenticateSuccess implements Action {
    readonly type = AUTHENTICATE_SUCCESS;

    constructor(
        public payload: {
            email: string,
            userId: string,
            token: string,
            expirationDate: Date,
            redirect: boolean
        }
    ) {}

}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export class LoginStart implements Action {
    readonly type = LOGIN_START;
    constructor(public payload: { email: string, password: string }) {}
}

export class AutoLogin implements Action {
    readonly type = AUTO_LOGIN;
}

export class AuthenticateFail implements Action {
    readonly type = AUTHENTICATE_FAIL;
    constructor(public payload: string) {}
}

export class SignupStart implements Action {
    readonly type = SIGN_UP_START;
    constructor(public payload: { email: string, password: string }) {}
}

export class ClearError implements Action {
    readonly type = CLEAR_ERROR;
}

export type AuthActions = AuthenticateSuccess | Logout | LoginStart | AuthenticateFail 
    | SignupStart | ClearError | AutoLogin;