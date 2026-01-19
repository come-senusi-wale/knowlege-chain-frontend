import { axiosInstance } from "./axios";
import { ICheckEmail, ICreateAccount, ICreateProfile, IInitNairaPayment, IVerifyEmail, IVerifyNairaPayment } from "./user.interface";

export const createAccount = (body: ICreateAccount) => {
    return axiosInstance().post("/user/create-account", body);
}

export const getUserAccount = (query: ICreateAccount) => {
    return axiosInstance().get(`/user/check-wallet?walletAddress=${query.walletAddress}`);
}

export const createProfile = (body: ICreateProfile) => {
    return axiosInstance().post("/user/create-profile", body);
}

export const verifyEmail = (body: IVerifyEmail) => {
    return axiosInstance().post("/user/verify-email", body);
}

export const checkEmail = (query: ICheckEmail) => {
    return axiosInstance().get(`/user/check-email?walletAddress=${query.walletAddress}`);
}


export const requestForTest = (body: ICheckEmail) => {
    return axiosInstance().post("/user/request-test-question", body);
}

export const getYourTest = (query: ICheckEmail) => {
    return axiosInstance().get(`/user/test-link?walletAddress=${query.walletAddress}`);
}

export const checkTest = (query: ICheckEmail) => {
    return axiosInstance().get(`/user/check-test-link?walletAddress=${query.walletAddress}`);
}

export const initNairaPayment = (body: IInitNairaPayment) => {
    return axiosInstance().post("/user/init-payment", body);
}

export const verifyNairaPayment = (body: IVerifyNairaPayment) => {
    return axiosInstance().post("/user/verify-payment", body);
}