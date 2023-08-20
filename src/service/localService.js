export const USER_SIGNIN = 'USER_SIGNIN';
export const localUserService = {
    get: () => {
        let jsonData = localStorage.getItem(USER_SIGNIN);
        return JSON.parse(jsonData);
    },
    set: (userInfo) => {
        let jsonData = JSON.stringify(userInfo);
        localStorage.setItem(USER_SIGNIN, jsonData);
    },
    remove: () => {
        localStorage.removeItem(USER_SIGNIN);
    }
}