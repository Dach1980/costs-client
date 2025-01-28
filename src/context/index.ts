import { createDomain } from "effector";
import { ICost } from "../types/index.ts";

const costs = createDomain();

export const setCosts = costs.createEvent<ICost[]>();
export const createCost = costs.createEvent<ICost>();
export const updateCosts = costs.createEvent<ICost>();
export const removeCosts = costs.createEvent<string | number>();
export const setTotalPrice = costs.createEvent<number>();

export const $costs = costs.createStore<ICost[]>([])
    .on(createCost, (state, cost) => [...state, cost])
    .on(setCosts, (_, costs) => costs)

export const $totalPrice = costs.createStore<number>(0)
    .on(setTotalPrice, (_, value) => value);
