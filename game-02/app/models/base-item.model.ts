import { Item } from "./item.model";

export abstract class BaseItem extends Item {

    constructor(name, sellIn, quality, private canSellItem: boolean = true){
        super(name, sellIn, quality);
    }

    updateSellIn() {
        if (this.canSellItem) {
            this.sellIn --;
        }
    }

    updateQuality() {}
}