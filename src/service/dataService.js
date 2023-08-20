import { https } from "./config"

export const dataService = {
    getCategories: () => {
        return https.get('/categories')
    },
}