
export interface IRegisterRequest {
    email: string;
    address: string;
    firstname: string;
    lastname: string;
    mobile: string;
    password: string;
    confirmPassword?: string
}

export interface IRegisterServerResponse {

}