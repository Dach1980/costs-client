import { setTotalPrice } from "../context/index.ts";
import { ICosts } from "../types/index.ts";

export const countTotalPrice = (costs: ICosts[]) => {
    if (costs === undefined) return;
    setTotalPrice(
        costs.reduce((defaultCount, item) => defaultCount + item.price, 0)
    )
}