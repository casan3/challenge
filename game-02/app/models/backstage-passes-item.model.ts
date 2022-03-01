import { BaseItem } from "./base-item.model";

export class BackstagePassesItem extends BaseItem {

    updateQuality(): void {
        if (this.quality <= 50 && this.quality > 0) {
            if (this.sellIn < 0) {
                this.quality = 0;
            } else if (this.sellIn <= 5) {
                this.quality <= 47 ? this.quality += 3 : this.quality = 50;
            } else if (this.sellIn <= 10 && this.quality <= 48) {
                 this.quality += 2;
            }
            else {
                this.quality ++;
            }
        }
    }
}