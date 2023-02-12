import {call, put, takeEvery} from 'redux-saga/effects'
import { setAccounts } from '../Actions/AccountActions';
import { deleteData, getData, postData } from '../api/httpClient';
import * as actionTypes from '../Actions/AccountActions';

/**
 * GET_ACCOUNTS trigger the get request which takes a generator function makes get request and trigger another action to 
 * update the reducer state.
 * 
 */


export function* getAccounts () {
    // yield put(clearErrorActiob())
    try {
        const results = yield call(getData,"/accounts");
        yield put (setAccounts(results.data));


    } catch(ex) {
         console.log ("ERROR !!" + ex)
    }
}

export function* deleteAccount (action) {
    try {
        const results = yield call(deleteData,`/accounts/${action.accountId}`);
        yield put(actionTypes.getAccounts())


    } catch(ex) {
         console.log ("ERROR !!" + ex)
    }

}

export function* createAccount (action) {
    try {
        const results = yield call(postData,"/accounts", action.account);
        yield put(actionTypes.getAccounts())


    } catch(ex) {
         console.log ("ERROR !!" + ex)
    }

}


export function* watchGetAccounts() {
    yield takeEvery(actionTypes.GET_ACCOUNTS, getAccounts)
}

export function* watchDeleteAccount() {
    yield takeEvery(actionTypes.DELETE_ACCOUNT, deleteAccount)
}

export function* watchAddNewAccount() {
    yield takeEvery(actionTypes.CREATE_ACCOUNT, createAccount)
}