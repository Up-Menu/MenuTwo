const TOKEN_KEY = 'REACTAPP.TOKEN'
const USER = 'REACTAPP.USER'
const REFRESH_TOKEN_KEY = 'REACTAPP.REFRESH_TOKEN'

/**
 * Manage the how Access Tokens are being stored and retrieved from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instance.
 **/
const TokenService = {
  getToken () {
    return localStorage.getItem( TOKEN_KEY )
  },

  saveToken ( accessToken: string ) {
    localStorage.setItem( TOKEN_KEY, accessToken )
  },

  removeToken () {
    localStorage.removeItem( TOKEN_KEY )
  },

  getRefreshToken () {
    return localStorage.getItem( REFRESH_TOKEN_KEY )
  },

  saveRefreshToken ( refreshToken: string ) {
    localStorage.setItem( REFRESH_TOKEN_KEY, refreshToken )
  },

  removeRefreshToken () {
    localStorage.removeItem( REFRESH_TOKEN_KEY )
  },
}

const SetUser = {
  getUser () {
    let user = localStorage.getItem( USER )
    return JSON.parse( user )
  },
  isAdmin () {
    let user = this.getUser()
    return user != null ? user.role == 'admin' : false
  },
  saveUser ( user: any ) {
    localStorage.setItem( USER, JSON.stringify( user ) )
  },

  removeUser () {
    localStorage.removeItem( USER )
  },
}

export { TokenService, SetUser }
