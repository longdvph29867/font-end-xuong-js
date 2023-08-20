import axios from "axios";
import { localUserService } from "./localService";

export const BASE_URL = "https://xuong-js-api-nhom1.vercel.app";
let configHeaders = () => {
    return {
        "Authorization": "Bearer " + localUserService.get()?.accessToken,
    }
}
export const https = axios.create({
    baseURL: BASE_URL,
    headers: configHeaders(),
})