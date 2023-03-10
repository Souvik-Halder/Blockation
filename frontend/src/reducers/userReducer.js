import { CLEAR_ERRORS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/userConstants";

export const userReducer=(state={user:{}},action)=>{
    switch(action.type){
        case REGISTER_USER_REQUEST:
        case LOGIN_REQUEST:
            case LOAD_USER_REQUEST:
            return{
                loading:true,
                isAuthenticated:false,
            }
        case LOGIN_SUCCESS:
            
            case LOAD_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                isAuthenticated:true,
                user:action.payload,
            }
            case REGISTER_USER_SUCCESS:
                return{
                    ...state,
                loading:false,
                isAuthenticated:false,
                user:action.payload,
                }
            case LOGOUT_SUCCESS:
        return {
          ...state,
          loading:false,
          user:null,
          isAuthenticated:false
        }
        case LOGIN_FAIL:
            case REGISTER_USER_FAIL:
            case LOAD_USER_FAIL:
            return{
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            }
            case LOGIN_FAIL:{
                return{
                  ...state,
                  loading:false,
                  error:action.payload
                }
              }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null,
            }
        default:
            return state
    }
};