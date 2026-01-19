export interface ICreateAccount {
    walletAddress: string;
}

export interface ICreateProfile {
    walletAddress: string;
    email: string;
    name: string;
    phoneNumber: string;
}

export interface IVerifyEmail {
    otp: string;
    email: string;
}

export interface ICheckEmail {
    walletAddress: string;
}

export interface IInitNairaPayment {
    walletAddress: string;
    callback: string;
}
export interface IVerifyNairaPayment {
    walletAddress: string;
    reference: string;
}