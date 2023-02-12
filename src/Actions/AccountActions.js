


export const GET_ACCOUNTS = "GET_ACCOUNTS";
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";
export const GET_ACCOUNT = "GET_ACCOUNT";
export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const SET_ACCOUNTS = "SET_ACCOUNTS";

export function getAccounts() {
    return {
        type: GET_ACCOUNTS
    }
}

export function setAccounts(payload) {
    return {
        type: SET_ACCOUNTS,  payload :payload
    }
}

export function getAccount(accId) {
    return {
        type: GET_ACCOUNT,
        ...accId
    }
}

export function deleteAccount(accId) {
    return {
        type: DELETE_ACCOUNT,
        accountId: accId
    }
}

export function createAccount(data) {
    return {
        type: CREATE_ACCOUNT,
        account: data
    }
}