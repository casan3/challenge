import { BaseItem } from "./base-item.model";

export class ConjuredItem extends BaseItem {

    updateQuality(): void {
        if (this.quality > 0) {
            if (this.sellIn < 0) {
                this.quality >= 4 ? this.quality -= 4 : this.quality = 0;
            } else if (this.quality >= 2) {
                this.quality -= 2;
            } else {
                this.quality = 0;
            }
        }
    }
}