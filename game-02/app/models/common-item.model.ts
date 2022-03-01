import { BaseItem } from "./base-item.model";

export class CommonItem extends BaseItem {

    updateQuality(): void {
        if (this.quality > 0) {
            if (this.sellIn < 0 && this.quality > 1) {
                this.quality -= 2;
            } else {
                this.quality --;
            }
        }
    }
}