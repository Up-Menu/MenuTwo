

export interface IRegisterForm {
    address: string

    email: string
    firstname: string
    lastname: string
    password: string
}

export interface ILoginForm {
    email: string
    password: string;
    remember: boolean
}

export interface IGoogleSso {
    address: string;
    cellPhone: string;
    confirmPassword: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    profile: string;
}

export interface IGoogleSsoResponse {
    clientId: string
    credential: string;
    select_by: string
}
