import { createEffect } from "effector";
import { ICreateCost, IBaseEffectArgs, IReshreshToken } from "../types/index.ts";
import api from './axiosClient.ts'
import { removeUser } from "../utils/auth.ts";
import { handleAxiosError } from "../utils/errors.ts";

export const createCostFx = createEffect(async ({url, cost, token}: ICreateCost) => {
    try {
        const {data} = await api.post(url, {...cost}, {headers: {'Autorization': `Bearer ${token}`}});

        return data; 
    } catch (error) {
        handleAxiosError(error, {type: 'get'})
    }
});

export const getCostsFx = createEffect(async ({url, token}: IBaseEffectArgs) => {
    try {
        const {data} = await api.get(url, {headers: {'Authorization': `Bearer ${token}`}});

        return data; 
    } catch (error) {
        console.log(error);
    }
});

export const refreshTokenFx = createEffect(async ({url, token, username}: IReshreshToken) => {
    try {
        const result = await api.post(url, {refresh_token: token, username});

        if(result.status === 200) {
            localStorage.setItem('auth', JSON.stringify({
                ...result.data,
                username
            }))

            return result.data.access_token;
        } else {
            removeUser();
        }
    } catch (error) {
        console.log(error);
    }
});
