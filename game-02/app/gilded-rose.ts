import { BaseItem } from "./models/base-item.model";

export class GildedRose {
    constructor(private items = [] as Array<BaseItem>) {}

    updateQuality() {
        this.items.forEach(item => {
            item.updateSellIn();
            item.updateQuality();
        });
        return this.items;
    }
}
