export const FETCHING_USER_LOGIN_FAIL = "FETCHING_USER_LOGIN_FAIL";
export const FETCHING_USER_LOGIN_SUCCESS = "FETCHING_USER_LOGIN_SUCCESS";

export function loginAction(userId){
    return { type: FETCHING_USER_LOGIN_FAIL }
}