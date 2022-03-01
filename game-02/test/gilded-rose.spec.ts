import { expect } from 'chai';
import { GildedRose } from "../app/gilded-rose";
import { BackstagePassesItem } from '../app/models/backstage-passes-item.model';
import { BaseItem } from '../app/models/base-item.model';
import { CommonItem } from '../app/models/common-item.model';
import { ConjuredItem } from '../app/models/conjured-item.model';
import { LegendaryItem } from '../app/models/legendary-item.model';
import { OlderBetterItem } from '../app/models/older-better-item.model';

const getTestItems = (): Array<BaseItem> => {
    const items: Array<BaseItem> = [
        new LegendaryItem('Sulfuras, Hand of Ragnaros', 999, 80, false),
        new OlderBetterItem('Aged Brie', 15, 1, true),
        new BackstagePassesItem('Backstage passes to a TAFKAL80ETC concert', 0 , 50, true),
        new CommonItem('Roasted Chicken', 0, 10, true),
        new ConjuredItem('Conjured Water', 10, 50, true),
        new CommonItem('Another Common Item', 0, 0, true)
    ];
    return items;
}

const gildedRose = new GildedRose(getTestItems());
const result = gildedRose.updateQuality();

describe('updateQuality()', function () {
    it('should return an array', function() {
        expect(result).to.be.an('array');
    });

    it('Ragnaros should have quality of 80 and SellIn of 999', function() {
        expect(result.find(item => item.name === 'Sulfuras, Hand of Ragnaros')).to.have.property('quality').eql(80)
        expect(result.find(item => item.name === 'Sulfuras, Hand of Ragnaros')).to.have.property('sellIn').eql(999)
    });

    it('Aged Brie should have quality of 2 and SellIn of 14', function() {
        expect(result.find(item => item.name === 'Aged Brie')).to.have.property('quality').eql(2)
        expect(result.find(item => item.name === 'Aged Brie')).to.have.property('sellIn').eql(14)
    });

    it('Backstage passes to a TAFKAL80ETC concert should have quality of 0 and SellIn of -1', function() {
        expect(result.find(item => item.name === 'Backstage passes to a TAFKAL80ETC concert')).to.have.property('quality').eql(0)
        expect(result.find(item => item.name === 'Backstage passes to a TAFKAL80ETC concert')).to.have.property('sellIn').eql(-1)
    });

    it('Roasted Chicken should have quality of 8 and SellIn of -1', function() {
        expect(result.find(item => item.name === 'Roasted Chicken')).to.have.property('quality').eql(8)
        expect(result.find(item => item.name === 'Roasted Chicken')).to.have.property('sellIn').eql(-1)
    });

    it('Conjured Water should have quality of 48 and SellIn of 9', function() {
        expect(result.find(item => item.name === 'Conjured Water')).to.have.property('quality').eql(48)
        expect(result.find(item => item.name === 'Conjured Water')).to.have.property('sellIn').eql(9)
    });

    it('Another Common Item should have quality of 0 and SellIn of -1', function() {
        expect(result.find(item => item.name === 'Another Common Item')).to.have.property('quality').eql(0)
        expect(result.find(item => item.name === 'Another Common Item')).to.have.property('sellIn').eql(-1)
    });
});
