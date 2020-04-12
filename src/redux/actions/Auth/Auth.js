export const login = 'Login';
export const logout = 'Logout';
export const AddUsers = 'AddUsers';

export function Login(value){
    return({
        type: login,
        value,
    });
};

export function Logout(value){
    return({
        type: logout,
        value,
    });
};

export function addUsers(value){
    return({
        type: AddUsers,
        value
    });
}