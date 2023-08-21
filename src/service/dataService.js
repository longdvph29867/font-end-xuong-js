import { https } from "./config"

export const dataService = {
    postLogin: (data) => {
        return https.post('/auth/signin', data)
    },
    getCategories: () => {
        return https.get('/categories')
    },
}