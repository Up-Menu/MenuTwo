import Api from "src/api/Api"

export const RegisterReq = (value: any, fn: (arg0: any) => void) => {
    Api
        .post('Account/Register', value, '')
        .then(response => {
            fn([response.data.status, response.data.data])
        })
        .catch(err => console.log(err))
}

export const LoginReq = (value: any, fn: (arg0: any) => void) => {
    Api
        .post('Account/Login', value, '')
        .then(response => {
            fn([response.data.status, response.data.data.message, response.data.data.userId])
        })
        .catch(err => console.log(err))
}


export const CreateTableReq = (value: any, fn: (arg0: any) => void) => {
    Api
        .post('TableManagment/CreateTable', value, '')
        .then(response => {
            fn([response.data.status, response.data.data.message])
        })
        .catch(err => console.log(err))
}

export const CreateMenuReq = (value: any, fn: (arg0: any) => void) => {
    Api
        .post('Menu/CreateMenu', value, '')
        .then(response => {
            fn([response.data.status, response.data.data.message])
        })
        .catch(err => console.log(err))
}


// send restaurant data to server
export const CreateRestaurantReq = (value: any, fn: (arg0: any) => void) => {
    Api
        .post('Restaurant/CreateRestaurant', value, '')
        .then(response => {
            fn([response.data.status, response.data.data.message, response.data.data.restaurantId])
        })
        .catch(err => console.log(err))
}


export const GoogleReq = (value: any, fn: (arg0: any) => void) => {
    Api
        .post('Account/SSO', value, '')
        .then(response => {
            fn([response.data.status, response.data.data])
        })
        .catch(err => console.log(err))
}


/**
 * write get methods
 */

export const GetUserRestaurant = (userId: any, fn: (arg0: any) => void) => {
    Api
        .get(`Restaurant/GetUserRestaurant?userId=${userId}`, '', '')
        .then(response => {
            fn(response)
        })
        .catch(err => console.log(err))
}