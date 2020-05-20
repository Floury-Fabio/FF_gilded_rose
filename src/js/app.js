import {CommonItem} from './commonItem'
import {ConjuredItem} from './conjuredItem'
import {LegendaryItem} from './legendaryItem'
import {Shop} from './shop'
import {PassesItem} from './passesItem'

let items = []
items.push(new CommonItem('dede', 7, 10))
items.push(new CommonItem('dodo', 0, 7))
items.push(new LegendaryItem('sulfura', 7, 10))
items.push(new ConjuredItem('skull', 7, 15))
items.push(new ConjuredItem('sword', 0, 24))

let test = new PassesItem('dekqjd', 9, 7)
console.log(test)
test.updateQuality()
console.log(test)

let shop = new Shop(items)

shop.display()
shop.updateQuality()
shop.display()

console.log(undefined == null)
