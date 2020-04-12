import { login, logout, AddUsers } from "../../actions/Auth/Auth";

export function Authreducer(state = {}, action){
    switch(action.type){
        case login : {
            return {...state , authUser: action.value}
        }
        case logout: {
            return {}
        }

        case AddUsers: {
            return action.value
        }
        default: return state;
    }
}