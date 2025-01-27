import { createEffect } from "effector";
import { ICreateCost, IGetCost } from "../types";
import api from './axiosClient.ts'

export const createCostFx = createEffect(async ({url, cost, token}: ICreateCost) => {
    try {
        const {data} = await api.post(url, {...cost}, {headers: {'Autorization': `Bearer ${token}`}});

        return data; 
    } catch (error) {
        console.log(error);
    }
})

export const getsCostsFx = createEffect(async ({url, token}: IGetCost) => {
    try {
        const {data} = await api.get(url, {headers: {'Autorization': `Bearer ${token}`}});

        return data; 
    } catch (error) {
        console.log(error);
    }
})
