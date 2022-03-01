import { OlderBetterItem } from "../models/older-better-item.model";
import { CommonItem } from "../models/common-item.model";
import { LegendaryItem } from "../models/legendary-item.model";
import { BackstagePassesItem } from "../models/backstage-passes-item.model";
import { ConjuredItem } from "../models/conjured-item.model";
import { BaseItem } from "../models/base-item.model";

const items: Array<BaseItem> = [
    new LegendaryItem('Sulfuras, Hand of Ragnaros', 999, 80, false),
    new OlderBetterItem('Aged Brie', 15, 1),
    new BackstagePassesItem('Backstage passes to a TAFKAL80ETC concert', 5 , 1),
    new CommonItem('Roasted Chicken', 15, 50),
    new ConjuredItem('Conjured Water', 15, 50)
];

export const getItems = (): Array<BaseItem> => {
    return items;
}