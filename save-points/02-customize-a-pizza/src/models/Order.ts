import { Address } from "./Address";
import { LatLong } from "./LatLong";
import { Pizza } from "./Pizza";

export class Order {
    constructor(
        public orderId: number,
        public userId: string,
        public createdTime: string,
        public deliveryAddress: Address,
        public deliveryLocation: LatLong,
        public pizzas: Array<Pizza>,
    ){}
    
    public getTotalPrice = () => this.pizzas.reduce((acc, p) => acc + p.getTotalPrice(), 0);
    public getFormattedTotalPrice = () => this.getTotalPrice().toFixed(2);
}
