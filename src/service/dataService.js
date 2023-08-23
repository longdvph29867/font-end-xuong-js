import { https } from "./config"

export const dataService = {
    postLogin: (data) => {
        return https.post('/auth/signin', data)
    },
    postRegister: (data) => {
        return https.post('/auth/signup', data)
    },
    getCategories: () => {
        return https.get('/categories')
    },
    creatCategories: (data) => {
        return https.post('/categories',data)
    },
    deleteCategories: (data) => {
        return https.delete(`/categories/${data}`)
    },
    getProducts: () => {
        return https.get('/products')
    },
    getProductByCategory: (slug) => {
        return https.get(`/categories/${slug}`)
    },

    getProductDetails: (id) => {
        return https.get(`/products/${id}`)
    },
}