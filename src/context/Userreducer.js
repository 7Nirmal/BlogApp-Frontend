

export const Userreducer = (state, action) =>{
    switch(action.type){
        default :
        return state;
        case "LOGIN_START" :
            return{
                ...state,
                isfetching:true
        };
        case "LOGIN" :
            return{
                ...state,
                userdetails:action.payload.user,
                isfetching:false, 
                token:action.payload.token,
            };

        case "LOGIN_ERROR" :
            return {
                ...state,
                error:action.payload.error
            };
            case "LOGOUT" :
                return {
                    ...state,
                   userdetails:null,
                   token:null
                };
    }
}