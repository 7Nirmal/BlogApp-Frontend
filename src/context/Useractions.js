

export const loginstart = (userdetails) => ({
    type:"LOGIN_START",
})

export const login = (data) => ({
    type:"LOGIN",
    payload:data,
})

export const loginfail = (error) => ({
type:"LOGIN_ERROR",
payload:error,
})

export const logout = () => ({
    type:"LOGOUT",
    })