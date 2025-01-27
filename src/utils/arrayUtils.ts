import { setTotalPrice } from "../context/index.ts";
import { ICost } from "../types/index.ts";

export const countTotalPrice = (costs: ICost[]) => {
    if (costs === undefined) return;
    setTotalPrice(
        costs.reduce((defaultCount, item) => defaultCount + item.price, 0)
    )
}