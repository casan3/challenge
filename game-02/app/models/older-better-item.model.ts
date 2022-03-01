import { BaseItem } from "./base-item.model";

export class OlderBetterItem extends BaseItem {
    
    updateQuality(): void {
        if (this.quality < 50) {
            if (this.sellIn < 0 && this.quality < 49) {
                this.quality += 2;
            } else {
                this.quality ++;
            }
        }
    }
}