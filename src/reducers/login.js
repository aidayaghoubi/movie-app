const LoginReducer = ( state = false , action )=>{

    switch (action){
        case "LOGGED-IN" :
            return 2 ;
        case "LOGGED-OUT" :
            return 5
        default :
        return 5   
    }
}


export default LoginReducer