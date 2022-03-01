import { GildedRose } from "./gilded-rose";
import { BaseItem } from "./models/base-item.model";
import { getItems } from "./services/get-items";
 
const gildedRose = new GildedRose(getItems());

for (let index = 0; index < 50; index++) {
    const items: Array<BaseItem> = gildedRose.updateQuality();
    console.log(`Iteration: ${index + 1}`, items);
}